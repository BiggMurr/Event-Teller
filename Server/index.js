require ('dotenv').config()
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')

const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env

const app = express()

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.use( session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use( passport.initialize() );
app.use( passport.session() );

passport.use( new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: "openid profile"
},
    function(accessToken, refreshToken, extraParams, profile, done) {
        const db = app.get('db');
        db.find_user([profile.id]).then(userResult => {
            if (!userResult[0]) {
                db.create_user([
                    profile.displayName,
                    profile.id,
                    profile.picture
                ]).then(createdUser => {
                    return done(null, createdUser[0])
                })
            } else {
                return done(null, userResult[0])
            }
        })
    }
) );

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((user, done) => {
    done(null, user)
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    failureRedirect: 'http://localhost:3000'
}), (req, res) => {
    if (req.user && !req.session.user) {
        req.session.user = req.user
    } 
    res.redirect('http://localhost:3000/#/')
})

app.get('/auth/me', function (req, res) {
    if (req.session.user) {
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send('nice try MY DUDE!!')
    }
})

app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000/');
})



app.listen(SERVER_PORT, () => console.log(`0,0 is listening on port: ${SERVER_PORT}`))
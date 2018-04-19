require ('dotenv').config()
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    //Does index.js need the (_dirname + './controller.js') ??
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , cors = require('cors')
    , axios = require('axios')



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

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());
// app.use(cors())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())
passport.use(new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: "openid profile"
}, (accessToken, refreshToken, extraParams, profile, done) => {
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
}));

passport.serializeUser((user, done) => {
    done(null, user)
});


passport.deserializeUser((user, done) => {
    console.log('deserializeUser fired:', user)
    done(null, user)
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: 'http://localhost:3000'
}), (req, res) => {
    if(!req.user) {
        console.error('Passport did not set a user on req.user')
    }

    res.redirect('/auth/me')
})

app.get('/auth/me', function (req, res) {
    if (req.user) {
        console.log('USER FOUND ON SESSION', req.user)
        if (!req.session.user) {
            console.log('SETTING USER ON SESSION')
            req.session.user = req.user
        }
        return res.status(200).send(req.user)
    }
    
    return res.status(500).send('No user found')
})

app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000/');
})

// My endpoints
const favoritesBaseUrl = "/api/favorites";

app.post(favoritesBaseUrl, controller.create);
app.get(favoritesBaseUrl, controller.read);
app.patch('/api/set/favorite/:id', controller.makeFavorite);
app.patch('/api/set/super_favorite/:id', controller.makeSuperFavorite)
app.delete(`${favoritesBaseUrl}/:id`, controller.delete);

app.get('/api/search/:zip', controller.searchZip)


app.listen(SERVER_PORT, () => console.log(`0,0 is listening on port: ${SERVER_PORT}`))
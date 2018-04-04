Going off of SIM 3

React Setup

    npm install - (DONE)
    npm i axios react-router-dom redux react-redux --save  (DONE)
    --
    created Auth, Dashboard, Favorites, Form, Nav, Newsletter, Results folders. (DONE)
    created .js files for Auth, Dashboard, Favorites, Form, Nav, Newsletter, Results - Remembered to Capitalized the first letter. (DONE)
    --
    created class component for the Auth, Dashboard, Favorites, Form, Nav, Newsletter, Results components. Then named them their own name in a <div>
        example:
            <!-- import React, { Component } from 'react';
            import axios from 'axios';

            export default class Auth extends Component {
            render() {
                return(
                    <div>
                        AUTH
                    </div>
                )
            }
        } -->

    --
    created a functional component for the Nav Component then returned 'Nav' in the <div>
    Example:
        <!-- import React, { Component } from 'react';
        import { Link } from 'react-router-dom';

        export default function Nav() {
            return(
                <div>
                    NAV
                </div>
            )
        } -->
    --
    imported the Auth, Dashboard, Favorites, Form, Nav, Newsletter, Results components into App.js - Then rendered them. Example: <Auth />

    --
    created the route.js in the SRC folder
    --
    create the 'DUCKS' folder in the SRC folder
    --
    created the store.js and the reducer.js file in the Ducks Folder
    --
    npm start your terminal to make sure that everything is working. 

Server Setup

    Run npm i express body-parser --save
    --
    Created a folder called server at the root of the project
    --
    created a index.js and a controller.js file in the server folder
    
    --
    Open index.js and require your packages and the controller file.
    --
    Setup a basic Express server (you will add endpoints later, just get the server ready to run).

    Open your package.json. Add your main property (so nodemon will work) and your proxy (so our axios requests will work).
        Your main should look like "main": "server/index.js"
        Your proxy should look like "proxy": "http://localhost:4000" using whatever port your server is setup to run on (the port should not be 3000 because that is what React will be running on).

    --
    Run nodemon and make sure your server runs.

Stopped, and went to James to start coding and she stated that we might want to get the FRONT-END done first then move back to the back-end. 

Created logo in Photo-Shop and then imported it into the website via .png. I then changed the CSS to make sure that it does fit in the header. 

Created Carousel for homepage, pulled the code from https://www.npmjs.com/package/react-responsive-carousel

Database Setup



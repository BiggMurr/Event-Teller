Going off of SIM 3

    Wire Framing: https://wireframe.cc/9QbrUq
    api from: https://developer.predicthq.com/api/quickstart/
    Project Rubric: https://github.com/DevMountain/rubrics/blob/master/personal_project.md
    Sim 3: https://github.com/devmountain/simulation-3
    Button Tutorial: https://www.youtube.com/watch?v=XWnPjG3AP1o
    zip code to use: 
    
    J = // Go into DB and set 'super_favorites' to false on the given `event_id`
    J = // Go into DB and set 'super_favorites' to true on the given `event_id`

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

Routing

    Opened the src/index.js file and 'brought in' (import) HashRouter from react-router-dom. import HashRouter from 'react-router-dom';
    --
    Then wrap App with HashRouter.

    Now open routes.js. Bring in Switch and Route from react-router-dom. Also bring in the Auth, Dashboard, Form, Favorites, Newsletter, and Results components.


    Set up the Switch Statement: Set up the Switch element as the default export of the file.
    --
    Inside the Switch, setup a Route for the components you brought in.

    --> <!-- export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/form' component={Form} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/newsletter' component={Newsletter} />
        <Route path='/results' component={Results} />
    </Switch>
    )

    Open App.js and change what you're bringing into the component.
        Remove Auth, Dashboard, Form, and Post from the component.
        Instead bring in routes from routes.js and render it instead of the other components.
        The Nav component should remain, as this will show on almost every view.
            The Nav component should not render if the current view is the Auth view (hint: use this.props.history to check which view the user is currently on).
        If you open your application in the browser you should see the navbar in every view but Auth.


    (Side note: I moved everything to the Nav Component. to me my header and logo and buttons in the Nav bar)


Setting Up Auth0 -



SQL Input: 

        -- ALTER TABLE favorites;
        -- ADD super_favorites BOOLEAN;

        -- ALTER TABLE ONLY favorites ALTER COLUMN super_favorites SET DEFAULT false;


        -- SELECT * FROM favorites;

        -- UPDATE favorites SET super_favorites = false WHERE super_favorites IS null; 

        -- INSERT INTO favorites (
        --     user_id,
        --     event_name,
        --     event_url,
        --     event_image,
        --     event_start,
        --     event_min_price,
        --     event_max_price,
        --     venue_url,
        --     venue_image,
        --     venue_name
        -- )
        -- VALUES
        -- (
        --     2,
        --     'awesome event',
        --     'http://event.com',
        --     'https://cdn.fstoppers.com/wp-content/uploads/2013/06/1.jpg',
        --     '2018-04-03',
        --     44.5,
        --     88.6,
        --     'http://www.ticketmaster.com/downtown-las-vegas-events-center-tickets-las-vegas/venue/189394',
        --     'https://s1.ticketm.net/dbimages/20046v.jpg',
        --     'my venue'
        -- )


        -- UPDATE favorites SET super_favorites = true WHERE id = 6;
        SELECT * FROM favorites;
            





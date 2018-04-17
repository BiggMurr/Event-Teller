import React, { Component } from 'react';
import axios from 'axios';
import Favorites from './../Favorites/Favorites'
import SuperFavorites from './../SuperFavorites/SuperFavorites'

export default class Auth extends Component {
    constructor () {
        super()
        this.state = {
            favorites: [],
            SuperFavorites: [],
        }
    }

    componentDidMount() {
        axios.get('/api/favorites')
        .then((res) => console.log(res)
        )}

        //I need take all the data amd make a favorites array [] and a super favorites []. Then I will need to LOOP through the data and push them to the separate array's. 
        //Then pass it down as PROPS in the RENDER Statement.
    
    render() {
        return(
            <div>
                <SuperFavorites />
                <Favorites />
            </div>
        )
    }
}
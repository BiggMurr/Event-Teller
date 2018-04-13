import React, { Component } from 'react';
import axios from 'axios';
import Favorites from './../Favorites/Favorites'
import SuperFavorites from './../SuperFavorites/SuperFavorites'

export default class Auth extends Component {

    componentDidMount() {
        axios.get('/api/favorites')
    }
    
    render() {
        return(
            <div>
                <SuperFavorites />
                <Favorites />
            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';
import Favorites from './../Favorites/Favorites'
import SuperFavorites from './../SuperFavorites/SuperFavorites'

export default class FavoriteDisplay extends Component {
    constructor() {
        super()
        this.state = {
            favorites: [],
            SuperFavorites: [],
        }
    }

    componentDidMount() {
        axios.get('/api/favorites')
            .then((res) => {
                const favorites = res.data
                console.log(favorites)
                let fav = []
                let supFav =[]

                for (let i = 0; i < favorites.length; i++) {
                    console.log(favorites[i])
                    if (favorites[i].super_favorites === true) {
                        supFav.push(favorites[i])
                    } else {
                        fav.push(favorites[i])
                    }
                } 
                console.log(fav, supFav)
                this.setState({favorites: fav, SuperFavorites: supFav})
            })
    }

    //I need take all the data amd make a favorites array [] and a super favorites []. Then I will need to LOOP through the data and push them to the separate array's. 
    //Then pass it down as PROPS in the RENDER Statement.


    render() {
            
        return (
            <div>
                <SuperFavorites data={this.state.SuperFavorites} />
                <Favorites data={this.state.favorites} />
            </div>
        )
    }
}
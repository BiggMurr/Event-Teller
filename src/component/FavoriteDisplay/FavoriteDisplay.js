import React, { Component } from 'react';
import Favorites from './../Favorites/Favorites'
import SuperFavorites from './../SuperFavorites/SuperFavorites'
import swal from 'sweetalert2'
import axios from 'axios';

export default class FavoriteDisplay extends Component {
    constructor() {
        super()
        this.state = {
            favorites: [],
            SuperFavorites: [],
        }

        this.superFavoriteEvent = this.superFavoriteEvent.bind(this)
        this.delete = this.delete.bind(this)
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

    superFavoriteEvent(id) {
        // console.log('THIS.PROPS.DATA', this.props.data)
        console.log(id)
        axios.put(`/api/favorites/${id}`).then(res => {
            swal({
                position: 'top-end',
                type: 'success',
                title: 'SUPER FAVORITED!',
                showConfirmButton: false,
                timer: 1500
            })
            console.log("SuperFavorites BETTER WORK!!", res.data)

            const newSuperFavorite = res.data
            const { favorites, SuperFavorites } = this.state;

            const favIndex = favorites.findIndex(fav => fav.id === newSuperFavorite.id)
            let newFavArray = [...favorites]
            let newSuperFavArray = [...SuperFavorites]

            newFavArray.splice(favIndex, 1)
            newSuperFavArray.push(newSuperFavorite)

            this.setState({ favorites: newFavArray, SuperFavorites: newSuperFavArray })
        }).catch(err => {
            console.log(err)
        })
    }

    delete(id, isSuperFavorite) {
        axios.delete(`/api/favorites/${id}`).then(res => {
            swal({
                position: 'top-end',
                type: 'success',
                title: 'Deleted!',
                showConfirmButton: false,
                timer: 1500
            })

            const eventToDelete = id
            const { favorites, SuperFavorites } = this.state;
            
            if (isSuperFavorite) {
                // The event to delete is a super favorite
                const favIndex = SuperFavorites.findIndex(fav => fav.id === eventToDelete)
                let newSuperFavArray = [...SuperFavorites]

                newSuperFavArray.splice(favIndex, 1)

                this.setState({ SuperFavorites: newSuperFavArray })
            } else {
                // The event to delete is a normal favorite
                const favIndex = favorites.findIndex(fav => fav.id === eventToDelete)
                let newFavArray = [...favorites]
    
                newFavArray.splice(favIndex, 1)
    
                this.setState({ favorites: newFavArray })
            }
        })
    }


    render() {
            
        return (
            <div>
                <SuperFavorites data={this.state.SuperFavorites} deleteFavoriteFn={this.delete} />
                <Favorites data={this.state.favorites} superFavoriteFn={this.superFavoriteEvent} deleteFavoriteFn={this.delete} />
            </div>
        )
    }
}
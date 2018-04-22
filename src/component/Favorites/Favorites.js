import React, { Component } from 'react';
import axios from 'axios';
import './Favorites.css'
import swal from 'sweetalert2'




export default class Favorites extends Component {
constructor(props) {
    super(props)

    this.state = {
        favorites: props.data,
    }
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
            console.log("SuperFavorites BETTER WORK!!", res)
        }).catch(err => {
            console.log(err)
        })
    }

    delete(id){
        axios.delete(`/api/favorites/${id}`).then(res => {
            swal({
                position: 'top-end',
                type: 'success',
                title: 'Deleted!',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }


    render() {
        return (
            <div className="webtext">
                <div className="supfav">
                    <h1>FAVORITE EVENTS</h1>
                    {this.props.data.map(favorite => {
                        console.log("Favorites here", favorite) 
                        return (
                            <div key={favorite.id} className="event">
                                <div className='container1'>
                                    <span>{favorite.event_id}</span>
                                    <h2>{favorite.event_name}</h2>
                                    <p><a href={favorite.event_url}>{favorite.event_url}</a></p>
                                    <p>{favorite.event_start_date} </p>
                                    <p>${favorite.event_min_price} </p>
                                    <p>${favorite.event_max_price} </p>
                                </div>
                                <img src={favorite.event_image} width='200px' alt="" className="container2" />
                                <div className="container3" >
                                <h3>{favorite.venue_name}</h3>
                                <p>{favorite.venue_url} </p>
                                    <button className='btn btn-success btn-lg' onClick={(id) => this.superFavoriteEvent(favorite.id)}>Super Favorite Event</button>
                                    <button className='btn btn-success btn-lg' onClick={() => this.delete(favorite.id)}>Delete</button> 
                                </div>
                                <img src={favorite.venue_image} width='200px' alt="" className="container4" />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
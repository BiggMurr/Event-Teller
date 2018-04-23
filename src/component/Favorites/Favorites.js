import React, { Component } from 'react';
import './Favorites.css'


export default class Favorites extends Component {
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
                                    <button className='btn btn-success btn-lg' onClick={(id) => this.props.superFavoriteFn(favorite.id)}>Super Favorite Event</button>
                                    <button className='btn btn-success btn-lg' onClick={() => this.props.deleteFavoriteFn(favorite.id, false)}>Delete</button> 
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
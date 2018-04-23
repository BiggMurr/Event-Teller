import React, { Component } from 'react';
import './SuperFavorites.css'

export default class SuperFavorites extends Component {
    render() {
        return (
            <div className="webtext">
                <div className="supfav">
                    <h1>YOUR SUPER FAVORITE EVENTS</h1>
                    {this.props.data.map(superFavorites => {
                        console.log("superFavorite here", superFavorites)
                        return (
                            <div key={superFavorites.id} className="event">
                                <div className='container1'>
                                    <span>{superFavorites.event_id}</span>
                                    <h2>{superFavorites.event_name}</h2>
                                    <p><a href={superFavorites.event_url}>Buy Tickets Here!</a></p>
                                    <p>{superFavorites.event_start_date}</p>
                                    <p>${superFavorites.event_min_price}</p>
                                    <p>${superFavorites.event_max_price}</p>
                                </div>
                                <img src={superFavorites.event_image} width='200px' alt="" className="container2" />
                                <div className="container3">
                                    <h3>{superFavorites.venue_name}</h3>
                                    <p>{superFavorites.venue_url}</p>
                                    <button className='btn btn-success btn-lg' onClick={() => this.props.deleteFavoriteFn(superFavorites.id, true)}>
                                        Delete</button> 
                                </div>
                                <img src={superFavorites.venue_image} width='200px' alt="" className="container4" />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
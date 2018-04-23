import React, { Component } from 'react';
import './SuperFavorites.css'
// import moment from 'moment';

export default class SuperFavorites extends Component {
    render() {
        // console.log(this.props.data.dates.start)
        // let time = moment (this.props.data.dates.start.localtime, "HH:mm:ss").format("hh:mm:ss A");
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
                                    <p>{superFavorites.event_start_time}</p>
                                    <p>Starting Price - ${superFavorites.event_min_price}</p>
                                    <p>Max Price - ${superFavorites.event_max_price}</p>
                                </div>
                                <img src={superFavorites.event_image} width='200px' alt="" className="container2" />
                                <div className="container3">
                                    <h3>{superFavorites.venue_name}</h3>
                                    <p><a href={superFavorites.venue_url}>Venue Info</a></p>
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
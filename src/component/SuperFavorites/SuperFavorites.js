import React, { Component } from 'react';
import './SuperFavorites.css'
import axios from 'axios';
import swal from 'sweetalert2'



export default class SuperFavorites extends Component {
    constructor(props) {
        super(props)


    }

    delete(id) {
        axios.delete(`api/favorites/${id}`).then(res => {
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
                                    <button className='btn btn-success btn-lg' onClick={() => this.delete(superFavorites.id)}>
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
import React, { Component } from 'react';
// import axios from 'axios';
import './Favorites.css'

// ***** FAKE DATA ***** //


// const favorites = [
//     {
//         event_id: 0,
//         event_name: "Godsmack / Shinedown",
//         event_url: "http://www.ticketmaster.com/godsmack-shinedown-las-vegas-nevada-08-03-2018/event/1700546F07579C77",
//         event_image: "https://s1.ticketm.net/dam/a/db0/7c59b884-507b-4cee-b432-051ad6eabdb0_126011_RETINA_PORTRAIT_3_2.jpg", 
//         event_start_date: "2018-08-03",
//         event_min_price: 42.45,
//         event_max_price: 88.33,
//         venue_name: "Downtown Las Vegas Events Center",
//         venue_url: "http://www.ticketmaster.com/downtown-las-vegas-events-center-tickets-las-vegas/venue/189394",
//         venue_image: "https://s1.ticketm.net/dbimages/20046v.jpg"
//     }
// ];


export default class Favorites extends Component {
    // constructor() {
    //     super()

    //     this.state ={
    //         favorites: [],
    //         superFavorites: []
    //     }
    // }

    // componentDidMount() {
    //     axios.get('/api/favorites')
    //         .then((res) => {this.setState({ favorites: res.data })
    //             console.log(res.data)
    //         })
    //     this.state.favorites.map((fav, index) => {
    //         console.log(this.state.favorites)
    //         if (fav.super_favorites === true) {
    //             const supFav = this.state.favorites.splice(index, 1)
    //             this.state.superFavorites.push(supFav)
    //         }
    //     })

    // }
    render() {
        return (
            <div className="webtext">
                <div>
                    <h1>FAVORITE EVENTS</h1>
                    {this.props.data.map(favorite => {
                        console.log("Favorites here", favorite)
                        return (
                            <div key={favorite.id} className="event">
                                <div className='container1'>
                                    <span>{favorite.event_id}</span>
                                    <h2>{favorite.event_name}</h2>
                                    <p>{favorite.event_url}</p>
                                    <p>{favorite.event_start_date} </p>
                                    <p>${favorite.event_min_price} </p>
                                    <p>${favorite.event_max_price} </p>
                                </div>
                                <img src={favorite.event_image} width='200px' alt="" className="container2" />
                                <div className="container3" >
                                <h3>{favorite.venue_name}</h3>
                                <p>{favorite.venue_url} </p>
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
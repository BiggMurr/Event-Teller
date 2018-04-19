import React, { Component } from 'react';
import './SuperFavorites.css'
//  import axios from 'axios';

// ***** FAKE DATA ***** //

//  const superFavorites = [
//      {
//          event_id: 44,
//          event_name: "Godsmack / Shinedown",
//          event_url: "http://www.ticketmaster.com/godsmack-shinedown-las-vegas-nevada-08-03-2018/event/1700546F07579C77",
//          event_image: "https://s1.ticketm.net/dam/a/db0/7c59b884-507b-4cee-b432-051ad6eabdb0_126011_RETINA_PORTRAIT_3_2.jpg",
//          event_start_date: "2018-08-03",
//          event_min_price: 42.45,
//          event_max_price: 88.33,
//          venue_name: "Downtown Las Vegas Events Center",
//          venue_url: "http://www.ticketmaster.com/downtown-las-vegas-events-center-tickets-las-vegas/venue/189394",
//          venue_image: "https://s1.ticketm.net/dbimages/20046v.jpg"
//      }
//  ];

export default class SuperFavorites extends Component {
    //  constructor() {
    //      super()

    //      this.state ={
    //          favorites: [],
    //          superFavorites: [],
    //      }
    //  }

    //  componentDidMount() {
    //      axios.get('/api/favorites')
    //          .then((res) => {this.setState({ favorites: res.data })
    //          })
    //      this.state.favorites.map((fav, index) => {
    //          console.log(fav)
    //          console.log('HELLO!!!')
    //          if (fav.super_favorites === true) {
    //              let supFav = this.state.favorites.splice(index, 1)
    //              this.setState({ superFavorites: [...this.state.superFavorites, supFav]})
    //          }
    //          return(fav)
    //      })
    //      console.log('HELLO!!!')
    //  }


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
                                    <p>{superFavorites.event_url}</p>
                                    <p>{superFavorites.event_start_date}</p>
                                    <p>${superFavorites.event_min_price}</p>
                                    <p>${superFavorites.event_max_price}</p>
                                </div>
                                <img src={superFavorites.event_image} width='200px' alt="" className="container2" />
                                <div className="container3">
                                    <h3>{superFavorites.venue_name}</h3>
                                    <p>{superFavorites.venue_url}</p>
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
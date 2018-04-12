 import React, { Component } from 'react';
 import axios from 'axios';

 const superFavorites = [
     {
         event_id: 44,
         event_name: "Godsmack / Shinedown",
         event_url: "http://www.ticketmaster.com/godsmack-shinedown-las-vegas-nevada-08-03-2018/event/1700546F07579C77",
         event_image: "https://s1.ticketm.net/dam/a/db0/7c59b884-507b-4cee-b432-051ad6eabdb0_126011_RETINA_PORTRAIT_3_2.jpg",
         event_start_date: "2018-08-03",
         event_min_price: 42.45,
         event_max_price: 88.33,
         venue_name: "Downtown Las Vegas Events Center",
         venue_url: "http://www.ticketmaster.com/downtown-las-vegas-events-center-tickets-las-vegas/venue/189394",
         venue_image: "https://s1.ticketm.net/dbimages/20046v.jpg"
     }
 ];

 export default class Auth extends Component {
     constructor() {
         super()

         this.state ={
             favorites: [],
             superFavorites: [],
         }
     }

     componentDidMount() {
         console.log(superFavorites)
         this.setState({ superFavorites })
     }

     render() {
         return(
             <div>
                 SUPER FAVORITE EVENTS 
                 { this.state.superFavorites.map( superFavorites => {
                     console.log(superFavorites)
                     return(
                         <div key={superFavorites.event_id}>
                            <span>{superFavorites.event_id}</span>
                            <span>{superFavorites.event_name}</span>
                            <img src={superFavorites.event_image} width='200px' />
                            <span>{superFavorites.event_url}</span>
                            <span>{superFavorites.event_start_date}</span>
                            <span>{superFavorites.event_min_price}</span>
                            <span>{superFavorites.event_max_price}</span>
                            <span>{superFavorites.venue_name}</span>
                            <span>{superFavorites.venue_url}</span>
                            <img src={superFavorites.venue_image} width='200px' />
                         </div>
                     )
                 })}
             </div>
         )
     }
 }
import React, { Component } from 'react';
import axios from 'axios';
import Event from './../Event/Event'

import config from '../../config'

export default class Auth extends Component {
  constructor () {
      super ()
      this.state = {
        postalCode: '',
        events: [],
      }

    this.searchAPI = this.searchAPI.bind(this)
    }

    componentDidMount () {
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=
            ${config.TICKETMASTER_API_KEY}&postalCode=${this.state.postalCode}`)
                .then(res => { 
                    // this.setState({ events: res.data.results })
                    console.log(res.data)
                })
    }

    updatePostalCode (value) {
        this.setState({postalCode: value})
    }

    searchAPI () {
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=
            ${config.TICKETMASTER_API_KEY}&postalCode=${this.state.postalCode}`)
            .then(res => {
                // this.setState({ events: res.data.results })
                console.log(res.data)
                if (res.data._embedded) { this.setState({events: res.data._embedded.events})}
            })
    }
    


    render() {

        const events = this.state.events.map(event => { console.log(event)
            return <Event key={event.id} data={event} />
        }) 


        return (
            <div>
                <h2>ZIPCODE:</h2>
                <input placeholder='zipcode' onChange={(e) => this.updatePostalCode(e.target.value)}/>
                <button className='btn btn-success btn-lg' onClick={this.searchAPI}>SEARCH</button>

                <br />
                <br />
                {events}
            </div>
        )
    }
}

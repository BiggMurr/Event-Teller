import React, { Component } from 'react';
import axios from 'axios';
import Event from './../Event/Event'

import config from '../../config'


export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            postalCode: '',
            events: [],
        }

        this.searchAPI = this.searchAPI.bind(this)
    }

    componentDidMount() {
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${config.TICKETMASTER_API_KEY}&postalCode=${this.state.postalCode}`)
            .then(res => {
                console.log(res)
                this.setState({ events: res.data._embedded.events })
            })
    }

    updatePostalCode(value) {
        this.setState({ postalCode: value })
    }

    searchAPI() {
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${config.TICKETMASTER_API_KEY}&postalCode=${this.state.postalCode}`)
            .then(res => {
                this.setState({ events: res.data._embedded.events })
                console.log(res.data)
            })
    }



    render() {

        const events = this.state.events.map(event => {
            console.log(event)
            return <Event key={event.id} data={event} />
        })


        return (
            <div className="webtext">
                <h1>SEARCH BY ZIPCODE:</h1>
                <div>
                <input className="zipcodeInput" placeholder='zipcode' onChange={(e) => this.updatePostalCode(e.target.value)} />
                <button className='btn btn-success btn-lg' onClick={this.searchAPI}>SEARCH</button>
                </div>
                <br />
                <h2>LOCAL EVENTS IN YOUR AREA:</h2>
                {events}
            </div>
        )
    }
}

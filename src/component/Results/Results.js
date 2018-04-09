import React, { Component } from 'react';
import axios from 'axios';

import config from '../../config'

export default class Auth extends Component {
  constructor () {
      super ()
      this.state = {
        category: 'sports',
      }
      this.getEventResults = this.getEventResults.bind(this)
    }

    getEventResults () {
        axios
            .get(
                `https://api.predicthq.com/v1/events?category=${this.state.category}&country=US`, 
                { headers: { Authorization: `Bearer ${config.PREDICT_HQ_KEY}`}}
            )
            .then( res => { console.log(res)})
    }


    render() {
        return (
            <div>
                <select value={this.state.category} onChange={e => this.setState({category: e.target.value})}>
                    <option value='school-holidays'>School Holidays</option>
                    <option value='public-holidays'>Public Holidays</option>
                    <option value='politics'>Politics</option>
                    <option value='conferences'>Conferences</option>
                    <option value='expos'>Expos</option>
                    <option value='concerts'>Concerts</option>
                    <option value='festivals'>Festivals</option>
                    <option value='performing-arts'>Performing Arts</option>
                    <option value='sports'>Sports</option>
                    <option value='community'>Community</option>
                </select>
                <button className='btn btn-success btn-lg' onClick={this.getEventResults}>SEARCH</button>
            </div>
        )
    }
}

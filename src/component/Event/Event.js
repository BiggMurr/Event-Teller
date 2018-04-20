import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

export default class Event extends Component {
   constructor (props) {
       super (props)

       this.favoriteEvent = this.favoriteEvent.bind(this)
   }

    favoriteEvent () {
        console.log('THIS.PROPS.DATA', this.props.data)
        axios.post('/api/favorites', this.props.data).then(res => {
            console.log("Murray can't figure this out!", res)
        }).catch(err => {
            console.log(err)
        })
    }

    

    render() {
        // console.log(this.props.data.dates.start)
        let time = moment(this.props.data.dates.start.localTime, "HH:mm:ss").format("hh:mm:ss A");
        // console.log('time: ',time)
        return (
            <div className="results">
                <div className="results1">
                    <p>{this.props.data.name}</p>
                </div>
                <img src={this.props.data.images[0].url} width='200px' alt="" className="results2" />
                <div className="results3">
                    <p>{this.props.data.dates.start.localDate}</p>
                    <p>{time}</p>
                </div>
                <div className="results4">
                    <button className='btn btn-success btn-lg' onClick={()=> this.favoriteEvent()} > Favorite Event</button>
                    <button className='btn btn-success btn-lg' > Super Favorite Event</button>
                </div>
                <br />
                <br />
            </div>
        )
    }
}

import React, { Component } from 'react';
import moment from 'moment';

export default class Event extends Component {

    render() {
        console.log(this.props.data.dates.start)
        let time = moment(this.props.data.dates.start.localTime, "HH:mm:ss").format("hh:mm:ss A");
        console.log('time: ',time)
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
                    <button className='btn btn-success btn-lg' > Favorite Event</button>
                    <button className='btn btn-success btn-lg' > Super Favorite Event</button>
                </div>
                <br />
                <br />
            </div>
        )
    }
}

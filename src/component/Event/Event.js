import React, { Component } from 'react';

export default class Event extends Component {

    render() {
        return (
            <div className="Event-container">
                <div className="results">
                    <div className="container1">
                    <p>{this.props.data.name}</p>
                    </div>
                    <img src={this.props.data.images[0].url} width='200px' alt="" className="container2" />
                    <p>{this.props.data.dates.start.dateTime}</p>
                    <button className='btn btn-success btn-lg' > Favorite Event</button>
                    <button className='btn btn-success btn-lg' > Super Favorite Event</button>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

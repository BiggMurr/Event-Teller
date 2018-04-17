import React, { Component } from 'react';

export default class Event extends Component {

    render () {
        return(
            <div className="Event-container">
                <span>{this.props.data.name}</span>
                <img src={this.props.data.images[0].url} width='200px' />
                <span>{this.props.data.dates.start.dateTime}</span>
                <button className='btn btn-success btn-lg' > Favorite Event</button>
                <button className='btn btn-success btn-lg' > Super Favorite Event</button>
                <br />
                <br />    
            </div>
        )
    }
}

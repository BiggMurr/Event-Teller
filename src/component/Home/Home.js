import React, { Component } from 'react';
import axios from 'axios';
import Carousel from './../Carousel/Carousel';

export default class Home extends Component {
    render() {
        return(
            <div>
                HOME
                    <Carousel />
            </div>
        )
    }
}
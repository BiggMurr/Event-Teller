import React, { Component } from 'react';
// import axios from 'axios';
import Carousel from './../Carousel/Carousel';
import cityLogo from './../../assets/homecityflyover.png'

export default class Home extends Component {
    render() {
        return(
            <div className="webtext">
                    <Carousel />
                    <div className="homeSearch" >
                    <br />
                            <img src={cityLogo} className="" alt="logo" width="200px" />
                        SEARCH/ ACCOUNT 'MIDDLE' 
                        PARAGRAPH CONTENT 'RIGHT'
                    </div>

            </div>
                
        )
    }
}
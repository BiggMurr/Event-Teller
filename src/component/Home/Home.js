import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Carousel from './../Carousel/Carousel';

import cityLogo from './../../assets/homecityflyover.png';
import vegasLogo from './../../assets/homecityflyovervegas.png';
import seattleLogo from './../../assets/homecityflyoverseattle.png';

import todd from './../../assets/testimonialtodd.png';
import vince from './../../assets/testimonialvince.png';

import './Home.css'


export default class Home extends Component {
    render() {
        return (
            <div className="mainHome">
                <Carousel />
                <br />
                <div className="section2">
                    <div className="homepageCityImg">
                        <img src={cityLogo} alt="logo" width="275px" />
                    </div>
                    <br />
                    {/* <div className="homeSearch">
                        <button className='btn btn-success btn-lg'>SEARCH BY ZIP CODE</button>
                            </div> */}
                    <div className="homeText">
                        <p>
                            This is why you need to use us! Here at Event-Teller.com, we are dedicated to brining you the greatest events that are happening within your local area, or your vacation destination. Be sure to Favorite or Super Favorite your events so you can always come back and view them later. Come check it out!!
                            </p>
                        <br />
                        <Link to="/results"><button className='btn btn-success btn-lg'>SEARCH BY ZIP CODE</button></Link>
                    </div>
                </div>
                <div className="lineBreak" />
                <br />
                <div className="testIntro">
                    SEE WHAT OTHERS HAVE SAID
                        </div>
                <div className="lineBreak2" />
                <div className="testimonials">
                    <div>
                        <img src={todd} alt='testimonialtodd' width='100px' />
                    </div>
                    <div className="testimonial1">
                        "I ABSOLUTELY LOVE EVENT-TELLER!"
                                <p className="names"> ~ Todd Rasband</p>
                    </div>
                </div>
                <div className="testimonials">
                    <div className="testimonial2">
                        "I cannot thank Event-Teller enough! My friends were coming into town and I just didn't know what to do with them- I then found Event-Teller! I was able to find a concert right here in town. Thank you Event-Teller!" "So easy to use and so fun to find events in my local area!"
                                <br />
                        <p className="names"> ~ Vince Palmer</p>
                    </div>
                    <div>
                        <img src={vince} alt='testimonialtodd' width='100px' />
                    </div>
                </div>
            <div className="lineBreak" />
            <br />
                <div className="testIntro">
                    CITIES THAT ARE HOPPIN'
                        </div>
                <div className="lineBreak2" />
                            <div className="section3">
                                <div className="sec2col1">
                        <img src={vegasLogo} alt="logoVegas" width="275px" />
                        <p>LAS VEGAS, NV</p>
                        <p className="sec2col1text">Las Vegas Strip</p>
                                </div>
                                <div className="sec2col2">
                        <img src={seattleLogo} alt="logoVegas" width="275px" />
                        <p>SEATTLE, WA</p>
                        <p className="sec2col1text">Broadway St. WA, USA</p>
                                </div>
                            </div>
            </div>
        )
    }
} 
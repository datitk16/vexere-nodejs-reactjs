import React, { Component } from 'react';
import './Carousel.css';
import BookingTicket from '../BookingTicket/BookingTicket';
class Carousel extends Component {
    render() {
        return (
            <div className="form__carousel">
                <div id="demo" class="carousel slide" data-ride="carousel">


                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>


                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require('./../../images/carousel2.jpg')} />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./../../images/carousl3.jpg')} />
                        </div>
                        <div class="carousel-item">
                            <img src={require('./../../images/carousl3.jpg')} />
                        </div>
                    </div>


                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
                <div className="__booking_ticket">
                      <BookingTicket/>
                </div>
            </div>


        );
    }
}

export default Carousel;
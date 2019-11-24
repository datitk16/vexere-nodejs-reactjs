import React, { Component } from 'react';
import './TripItem.css'
import ByTickets from '../ByTickets/ByTickets';
class TripItem extends Component {
    render() {
        return (
            <div>
                <div className="item__trip">
                    <div className="info__item__trip">
                        <div className="info__company">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="https://img.icons8.com/color/100/000000/bus.png" />
                                </div>
                                <div className="col-md-7 name__company">
                                    <p>   Xe Hoàng Long</p>
                                    <img src="https://img.icons8.com/bubbles/50/000000/tv.png" />
                                    <img src="https://img.icons8.com/color/50/000000/wifi-router.png" className="ml-2"></img>
                                </div>
                            </div>

                        </div>
                        <div className="start__time">
                            <span>11:00</span>

                            <p>Bến xe Nước Ngầm</p>
                        </div>
                        <div className="next__time">
                            <img src="https://img.icons8.com/ios/24/000000/arrow.png" />
                        </div>
                        <div className="start__time">
                            <span>00:36</span>
                            <p>Bến xe Miền Đông</p>
                        </div>
                        <div className="empty__seat">
                            <p>Gường nằm 40 chỗ </p>
                            <p>40 chỗ trống</p>
                            <a href="#">Chính sách hủy vé</a>
                        </div>
                        <div className="start__cart">
                            <div className="row">
                                <img src="https://img.icons8.com/color/24/000000/christmas-star.png" />
                                <img src="https://img.icons8.com/color/24/000000/christmas-star.png" />
                                <img src="https://img.icons8.com/color/24/000000/christmas-star.png" />
                                <img src="https://img.icons8.com/color/24/000000/christmas-star.png" />
                                <img src="https://img.icons8.com/officexs/24/000000/star.png" />

                            </div>

                        </div>
                        <div className="by__ticket">
                            <button className="btn " data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><img src="https://img.icons8.com/material-outlined/24/000000/bus.png" /> Mua vé</button>
                        </div>
                    </div>
                </div>
                <ByTickets />
            </div>

        );
    }
}

export default TripItem;
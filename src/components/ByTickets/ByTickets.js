import React, { Component } from 'react';
import './ByTickets.css'
import Title from '../Title/Title';
class ByTickets extends Component {
    render() {
        return (
            <div class="collapse" id="collapseExample">
                <div className="booking__tickets">
                    <div className="info__ticket">
                        <div className="select__seat">
                            <Title>1 - CHỌN CHỖ</Title>
                            <div className="show__seat">
                                <div className="ex__seat">

                                    <div className="seat__cart"><img src="https://img.icons8.com/ios/24/000000/unchecked-checkbox.png" /> Ghế trống</div>
                                    <div className="seat__cart"><img src="https://img.icons8.com/material-two-tone/24/000000/unchecked-checkbox.png" /> Không bán</div>
                                    <div className="seat__cart"><img src="https://img.icons8.com/ultraviolet/24/000000/unchecked-checkbox.png" /> Đang chọn</div>
                                    <div className="clear"></div>
                                    <div className="price__seat_item">
                                        Giá vé : 750.000
                                    </div>

                                </div>
                                <div className="floor_one">
                                    <p>Tầng 1</p>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>

                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/nolan/24/000000/seat-heater.png" />
                                    </button>






                                </div>
                                <div className="floor_one">
                                    <p>Tầng 2</p>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>

                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>
                                    <button className="btn">
                                        <img src="https://img.icons8.com/cute-clipart/24/000000/seat-heater.png" />
                                    </button>
                                </div>
                                <div className="count_seat_money">
                                    <span>Số ghế: Vui lòng chọn ghế</span>
                                    <p>Tổng tiền: 000.000</p>
                                </div>
                            </div>
                            <div className="clear"></div>

                        </div>
                        <div className="select__seat">
                            <Title>2 - CHỌN ĐIỂM ĐI/ĐIỂM ĐẾN</Title>
                            <div className="navBar__stations">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"> Nơi đi</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Nơi đến</a>
                                    </li>

                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <p>Điểm đón</p>

                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <p>Điểm trả</p>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="select__seat">
                            <Title>3 - THÔNG TIN KHÁCH HÀNG</Title>
                            <form className="info__user_ticket">
                                <div class="form__group">
                                    <label for="exampleInputEmail1">Họ tên *:</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="form__group">
                                    <label for="exampleInputEmail1">Số điện thoại người đi *:</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="form__group">
                                    <label for="exampleInputEmail1">Email *:</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="form__group">
                                    <label for="exampleInputEmail1">Ghi chú</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="clear"></div>
                                <button type="submit" class="btn btn-primary"><img className="img__left" src="https://img.icons8.com/ios/80/000000/bus.png"/> Tiếp tục <img src="https://img.icons8.com/ios/24/000000/long-arrow-right.png"></img> </button>
                                <div className="clear"></div>
                            </form>
                        </div>
                        <div className="clear"></div>
                    </div>

                </div>
            </div>

        );
    }
}

export default ByTickets;
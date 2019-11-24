import React, { Component } from 'react';
import './Trips.css'
import Title from '../Title/Title';
import FilterTrip from '../FilterTrip/FilterTrip';
import TripItem from '../TripItem/TripItem';
class Trips extends Component {
    render() {
        return (
            <div>
                <div className="title__trip">
                <Title>Vé xe từ Hà Nội Đến Sài Gòn</Title>
                </div>
               
                <div className="trips__container">

                    <div className="search__trips">
                        <form className="form__trips">
                            <div class="form-group">
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group ">

                                {/* <label for="exampleFormControlSelect1" >Ngày đi</label> */}
                                <div class="">
                                    <input class="form-control input__form" type="date" value="2011-08-19" id="example-date-input" />
                                </div>
                            </div>
                            <div className="form__group__time ">
                                <button type="submit" class="btn ">Hôm nay</button>
                            </div>
                            <div className="form__group__time ">
                                <button type="submit" class="btn ">Ngày mai</button>
                            </div>
                            <div className="form__group__search ">
                                <button type="submit" class="btn btn-primary">Tìm Vé Xe Rẻ</button>
                            </div>
                            <div className="clear"></div>
                        </form>

                    </div>

                </div>
                <FilterTrip/>
                <TripItem/>
                <TripItem/>
                <TripItem/>
                <TripItem/>
                <TripItem/>
                <TripItem/>
            </div>

        );
    }
}

export default Trips;
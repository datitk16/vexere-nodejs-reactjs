import React, { Component } from 'react';
import './BookingTicket.css'
class BookingTicket extends Component {
    render() {
        return (
          
                <form className=" booking__ticket">
                    <div class="form-group ">
                        <label for="exampleFormControlSelect1">Nơi xuất phát</label>
                        <select class="form-control input__form" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group ">
                        <label for="exampleFormControlSelect1">Điểm đến</label>
                        <select class="form-control input__form" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group ">

                        <label for="exampleFormControlSelect1" >Ngày đi</label>
                        <div class="">
                            <input class="form-control input__form" type="date" value="2011-08-19" id="example-date-input" />
                        </div>
                    </div>

                </form>

            
        );
    }
}

export default BookingTicket;
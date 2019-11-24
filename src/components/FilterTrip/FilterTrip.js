import React, { Component } from 'react';
import './FilterTrip.css'
class FilterTrip extends Component {
    render() {
        return (
            
            <div className="filter__trip">
                <div className="contact__filter">
                    <div className="title__trips">
                        <a href="#">Xe limosine đi từ Hồ Chính Minh từ Hà Nội</a>
                    </div>
                    <div className="filter__cost">
                        <div class="dropdown">
                            <p id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sắp xếp <img src="https://img.icons8.com/material/24/000000/down-squared--v1.png"/></p>
                            {/* <button class="btn btn-secondary dropdown-toggle" type="button" >
                            Dropdown
  </button> */}
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Giá từ thấp đến cao</button>
                                <button class="dropdown-item" type="button">Giá từ cao xuống thấp</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FilterTrip;
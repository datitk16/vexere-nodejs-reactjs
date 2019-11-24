import React, { Component } from 'react';

import './HomePage.css'
class HomePage extends Component {
  render() {
    return (
      <div className="container__body">
        <div className="info__trips">
          <h4>Ưu đãi nổi bật</h4>
          <div className="image_info image_bane1">

          </div>
          <div className="image_info image_bane2">

          </div>
          <div className="image_info image_bane3">

          </div>


        </div>
        <div className="clear"></div>
        <div className="body__icon ">
          <h4>Hệ thống vé xe khách và vé xe limousine lớn nhất Việt Nam</h4>
          <div className="icon1 icon_way">
            <div className="title__icon">
              <img src={require('./../../images/station.png')} />
              <div className="title">
                <span>5000+</span>
                <div><p>Tuyến đường</p></div>
              </div>
            </div>

          </div>
          <div className="icon2 icon_way">
            <div className="title__icon">
              <img src={require('./../../images/shop.png')} />
              <div className="title">
                <span>2000+</span>
                <div><p>Nhà xe</p></div>
              </div>
            </div>
          </div>
          <div className="icon3 icon_way">
            <div className="title__icon">
              <img src={require('./../../images/station.png')} />
              <div className="title">
                <span>5000+</span>
                <div><p>Đại lý bán vé</p></div>
              </div>
            </div>
          </div>
          <div className="icon4 icon_way">
            <div className="title__icon">
              <img src={require('./../../images/station.png')} />
              <div className="title">
                <span>400+</span>
                <div><p>Bến xe</p></div>
              </div>
            </div>
          </div>

        </div>
        <div className="clear"></div>
        <div className="body__icon ">
          <h4>Bến xe khách</h4>
          <div className="icon1">
            <div className="station__info">
              <img src={require('./../../images/benxe1.jpg')} />
             
            </div>

          </div>
          <div className="icon2">
            <div className="station__info">
              <img src={require('./../../images/ben-xe2.jpg')} />
             
            </div>
          </div>
          <div className="icon3">
            <div className="station__info">
              <img src={require('./../../images/ben-xe3.jpg')} />
              
            </div>
          </div>
          <div className="icon4">
            <div className="station__info">
              <img src={require('./../../images/ben-xe4.jpg')} />
             
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default HomePage;
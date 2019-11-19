import React, { Component } from 'react';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import BookingTicket from './components/BookingTicket/BookingTicket';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* <div className=> */}
        <Carousel/>
        {/* </div> */}
       {/* <BookingTicket/> */}
      </div>
    );
  }
}

export default App;
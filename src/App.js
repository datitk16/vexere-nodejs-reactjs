import React, { Component } from 'react';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import BookingTicket from './components/BookingTicket/BookingTicket';
import './App.css'
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Trips from './components/Trips/Trips';
class App extends Component {
  render() {
    return (
      <div className="body">
      
        {/* <Login/> */}
        <Header/>
        <Trips/>
        {/* <div className=> */}
        {/* <Carousel/> */}
        <div className="clear"></div>
        {/* <HomePage/> */}
      
       {/* <BookingTicket/> */}
      </div>
    );
  }
}

export default App;
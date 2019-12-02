import React, { Component } from 'react';
import UserPage from '../../pages/UserPage/UserPage';
import { connect } from 'react-redux';
import {actLoginUserReques} from './../../action/index'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
class UsersContainer extends Component {
    componentWillMount(){
        this.props.LoginUser('devcodedao1997@gmail.com','12345678');
       
    }
    
    onClick=()=>{
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
        axios.get('https://fs07-vexere-devcodedao.herokuapp.com/api/users',{
            headers: {
                token: localStorage.getItem('token')
            }
          })
       .then(user=>console.log(user))
    }
    render() {
        const {user}=this.props;
        // console.log(user)
        return (
            <div>
                <button className="btn btn-success" onClick={this.onClick}>Get user</button>
                <UserPage />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        LoginUser: (Email, Password) => {
            dispatch(actLoginUserReques({Email, Password}))
        }
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
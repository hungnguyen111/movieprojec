import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../../Redux/Actions';

class Header extends Component {
    constructor(props){
        super(props);
        this.state=({
            logout: false
        })
    }
    handleLogout = () => {
        localStorage.removeItem('UserGuest');
        localStorage.removeItem('UserAdmin');        
        // window.location.reload();
        this.setState({
            logout: true
        })
    }
    render() {
        
        let user = JSON.parse(localStorage.getItem('UserGuest'));
        let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
        // console.log(user);
        let avatarLogin = () => {
            if (user !== null || userAdmin !== null) {
                return (
                    <>
                        <p>Xin chào <Link to='/profile'>{userAdmin ? userAdmin.taiKhoan : user.taiKhoan}</Link></p>
                        <Link to='/' className="logoutButton ml-3 text-white avatar btn btn-danger" onClick={this.handleLogout}>Đăng xuất</Link>
                    </>
                )
            } else {
                return <Link to='/login' className="avatar"><img src={require('../../assets/img/avatar.png')} alt="avatar" /> Đăng Nhập</Link>
            }
        }
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light navHeader">
                    <NavLink to='/'><img className="logo" src={require('../../assets/img/icons/web-logo.png')} alt="logo" /></NavLink>
                    <div className="navbar-collapse" id="navMenu">
                        <ul className="row mr-auto">
                            <li className={`${this.props.isDisplayMenu? '':'displayMenu'}`}><a href="#selectFilm">Lịch Chiếu</a></li>
                            <li className={`${this.props.isDisplayMenu? '':'displayMenu'}`}><a href="#homeCinemaComplex">Cụm rạp</a></li>
                            <li className={`${this.props.isDisplayMenu? '':'displayMenu'}`}><a href="#homeNews">Tin Tức</a></li>
                            <li className={`${this.props.isDisplayMenu? '':'displayMenu'}`}><a href="#homeApp">Ứng dụng</a></li>
                        </ul>
                        <div className="row navRight">
                            {avatarLogin()}
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        isDisplayMenu: state.movieReducer.isDisplayMenu
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setIsLoading: () => {
            dispatch(action.setIsLoading());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
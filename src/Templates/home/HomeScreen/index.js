import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Redux/Actions';

// import component 
import NavMobile from './navMobile';
import Carousel from './Carousel';
import SelectMenu from './SelectMenu';
import HomeMovie from './HomeMovie';
import HomeCinemaComplex from './HomeCinemaComplex';
import HomeNews from './HomeNews';
import HomeApp from './HomeApp';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header'

class Home extends Component {

    render() {
        return (
            <>
                <Header />
                {/* <NavMobile /> */}
                <Carousel />
                <SelectMenu />
                <HomeMovie />
                <HomeCinemaComplex />
                <HomeNews />
                <HomeApp />
                <Footer />
            </>
        )
    }
    componentDidMount() {
        this.props.getListMovie();
        this.props.getListMovieComming();
        this.props.getListCinema();
        this.props.getCinePlexBHD();
        this.props.getCinePlex();
        this.props.setIsLoading();
        this.props.setIsListSeat();
        this.props.setDisplayMenu();
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListMovie: () => {
            dispatch(actions.actGetListMovieAPI());
        },
        getListMovieComming: () => {
            dispatch(actions.actGetListMovieAPIComming());
        },
        getListCinema: () => {
            dispatch(actions.actGetListCinema());
        },
        getCinePlexBHD: () => {
            dispatch(actions.actGetCinePlexBHD());
        },
        getCinePlex: () => {
            dispatch(actions.actGetCinePlex());
        },
        setIsLoading: () => {
            dispatch(actions.setIsLoading());
        },
        setIsListSeat: () => {
            dispatch(actions.setIsListSeat());
        },
        setDisplayMenu: ()=>{
            dispatch(actions.setDisplayMenu())
        }
    }
}
export default connect(null, mapDispatchToProps)(Home);
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as action from '../../../Redux/Actions'
import Footer from '../../../Layouts/Footer/Footer';
import DetailCinemaComplex from './DetailCinemaComplex';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import Header from '../../../Layouts/Header';

// const useStyle = makeStyles((theme)=>{
//     loading: {
//         display: "none"
//     }
// })
// const classes = useStyle();
// import { RingLoader } from "react-spinners";

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 15%;
`;
// const displayComponent = `
//     display: none
// `

class DetailMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    componentDidMount() {
        this.props.getDetailMovie(this.props.match.params.maPhim)
        this.props.isDisplayMenu()
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        if (nextProps.isDetail) {
            this.setState({
                loading: false
            })
        }
    }
    render() {
        let { detailMovie } = this.props;
        console.log(detailMovie);

        return (
            <>
                <RingLoader
                    css={override}
                    // css={!this.state.loading? `display: none`: override}
                    size={80}
                    //size={"150px"} this also works
                    color={"#fb4226"}
                    loading={this.state.loading}
                >

                </RingLoader>
                <Header />
                <div className={this.state.loading ? 'loadingDisplay' : ''}>
                    <div className="row detailMovie" >
                        <div className="col-4 detailImg">
                            <img src={detailMovie.hinhAnh} />

                        </div>
                        <div className="col-4 detailContent">
                            <h4>{detailMovie.tenPhim}</h4>
                            <p><span>Ngày khởi chiếu:</span> {new Date(detailMovie.ngayKhoiChieu).toLocaleDateString()}</p>
                            <p><span>Mô tả:</span> {detailMovie.moTa}</p>
                            <a className="detailBuy" href="#buy-ticket">MUA VÉ</a>
                        </div>
                        <div className="col-4 detailPoint">
                            <span className="pointNumber">{detailMovie.danhGia}</span><br />
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <DetailCinemaComplex />
                    <Footer />
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        detailMovie: state.movieReducer.detailMovie,
        isDetail: state.movieReducer.isDetail
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDetailMovie: (maPhim) => {
            dispatch(action.getDetailMovie(maPhim))
        },
        isDisplayMenu: ()=>{
            dispatch(action.setNoDisplayMenu())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
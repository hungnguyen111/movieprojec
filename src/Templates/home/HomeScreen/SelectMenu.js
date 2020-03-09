import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as action from '../../../Redux/Actions'

class SelectMenu extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            maPhimSelected: '',
            cinemaSelected: '',
            dateSelected: '',
            timeSelected: '',
            maLichChieu: ''
        })
    }
    onChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            maPhimSelected: value,
            timeSelected: ''
        })
        this.props.showtimes(value)
    }
    renderNameMovie = () => {
        return (
            this.props.listMovie.map((movie, index) => {

                return (
                    <Fragment key={index}>
                        <option value={movie.maPhim}>{movie.tenPhim}</option>
                    </Fragment>
                )
            })
        )
    }

    renderCinema = () => {
        return this.props.showtimesMovie.map((heThongRap, index) => {
            return heThongRap.heThongRapChieu.map((cumRap, index) => {
                return cumRap.cumRapChieu.map((item, index) => {
                    // console.log(item);
                    return (
                        <option key={index}>{item.tenCumRap}</option>
                    )
                })
            })
        })
    }
    onChangeCinema = (e) => {
        let { name, value } = e.target;
        // console.log(value);
        this.setState({
            cinemaSelected: value
        })
        if (value === 'Rạp') {
            this.setState({
                cinema: false
            })
        } else {
            this.setState({
                cinema: true
            })

        }
    }

    renderDate = () => {
        return this.props.showtimesMovie.map((heThongRap, index1) => {
            return heThongRap.heThongRapChieu.map((cumRap, index2) => {
                return cumRap.cumRapChieu.map((item, index3) => {
                    // console.log(item);
                    if (item.tenCumRap === this.state.cinemaSelected) {
                        return item.lichChieuPhim.map((lichChieu, index4) => {
                            // console.log(lichChieu);

                            // console.log(new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString());
                            return (
                                <option key={index4}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString()}</option>
                            )
                            // console.log(new Date(lichChieu[index4+1].ngayChieuGioChieu).toLocaleDateString());

                            // if(new Date(lichChieu[index4].ngayChieuGioChieu).toLocaleDateString() === new Date(lichChieu[index4+1].ngayChieuGioChieu).toLocaleDateString()){
                            //     return <></>;
                            // } else {
                            //     return (
                            //         <option key={index4}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString()}</option>
                            //     )
                            // }
                        })
                    }
                })
            })
        })
    }
    onChangeDate = (e) => {
        let { name, value } = e.target;
        this.setState({
            dateSelected: value
        })
    }
    renderTime = () => {
        return this.props.showtimesMovie.map((heThongRap, index1) => {
            return heThongRap.heThongRapChieu.map((cumRap, index2) => {
                return cumRap.cumRapChieu.map((item, index3) => {
                    // console.log(item);
                    if (item.tenCumRap === this.state.cinemaSelected) {
                        return item.lichChieuPhim.map((lichChieu, index4) => {
                            return (
                                <option key={index4} value={lichChieu.maLichChieu}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}</option>
                            )

                            // console.log(lichChieu);
                            // console.log(new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString());
                            // console.log(new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString());
                            // console.log(this.state.timeSelected);
                            // console.log(lichChieu.maLichChieu);
                            // if(this.state.timeSelected === new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString()){
                            // }
                            // console.log(new Date(lichChieu[index4+1].ngayChieuGioChieu).toLocaleDateString());
                            // if(new Date(lichChieu[index4].ngayChieuGioChieu).toLocaleDateString() === new Date(lichChieu[index4+1].ngayChieuGioChieu).toLocaleDateString()){
                            //     return <></>;
                            // } else {
                            //     return (
                            //         <option key={index4}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString()}</option>
                            //     )
                            // }
                        })
                    }
                })
            })
        })
    }
    onChangeTime = (e) => {
        let { name, value } = e.target;
        if(value === 'Xuất chiếu'){
            this.setState({
                timeSelected: ''
            })
        } else{
            this.setState({
                timeSelected: value
            })
        }
    }

    render() {
        // let { listMovie } = this.props;
        // console.log(listMovie);
        // console.log(listMovie)
        // console.log(this.props.showtimesMovie);
        // console.log(this.state.timeSelected);
        return (
            <section className="selectMenu">
                <div className="selectCinema">
                    <select className="form-control selectMenuChild" name='maPhimSelected' onChange={this.onChange}>
                        <option>Phim</option>
                        {this.renderNameMovie()}
                    </select>
                </div>
                <div className="selectCinema">
                    <select className="form-control selectMenuChild" name="cinemaSelected" onChange={this.onChangeCinema}>
                        <option>Rạp</option>
                        {this.renderCinema()}
                    </select>
                </div>
                <div className="selectCinema" onChange={this.onChangeDate}>
                    <select className="form-control selectMenuChild">
                        <option>Ngày Xem</option>
                        {this.renderDate()}
                    </select>
                </div>
                <div className="selectCinema" onChange={this.onChangeTime}>
                    <select className="form-control selectMenuChild">
                        <option value=''>Xuất chiếu</option>
                        {this.renderTime()}
                    </select>
                </div>
                <div className="buttonSelect">
                    <Link to={`/checkout/${this.state.timeSelected}`}><button type="button" className={`btn btn-secondary ${this.state.timeSelected !== '' ? 'selectedMovie': ''}`} id="btnBuy">MUA VÉ NGAY</button></Link>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        listMovie: state.movieReducer.listMovie,
        showtimesMovie: state.movieReducer.showtimesMovie,
        getShowtimesSuccess: state.movieReducer.getShowtimesSuccess
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showtimes: (maPhim) => {
            dispatch(action.getShowtimes(maPhim))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectMenu);
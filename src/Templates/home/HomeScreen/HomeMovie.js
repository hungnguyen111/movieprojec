import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

class HomeMovie extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            src: ''
        })
    }

    handleClick = (src) => {
        this.setState({
            src
        })
    }

    render() {
        let { listMovie, listMovieComing } = this.props;
        
        let elmMovie = listMovie.map((item, index) => {
            // console.log(item);
            return (
                <div className="card" key={index}>
                    <div className="filmDetail">
                        <NavLink to={`/detail/${item.maPhim}`}><img src={item.hinhAnh} className="card-img-top" alt="..." /></NavLink>
                        <div className="showHoverImg">
                            <a data-toggle="modal" data-target={`#modalTrailer`} onClick={() => { this.handleClick(item.trailer) }}>
                                <img src={require('../../../assets/img/icons/play-video.png')} alt="..." />
                                {/* <iframe width="560" height="315" src={item.trailer} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                            </a>
                        </div>
                    </div>
                    {/* //modal  */}
                    <div className="showHover">
                        <NavLink to={`/detail/${item.maPhim}`}>MUA VÉ</NavLink>
                    </div>
                    <span className="ageType">C16</span>
                    <span className="avgPoint">
                        <p>8.5</p>
                        <p>
                            <img src={require('../../../assets/img/icons/star1.png')} alt="..." />
                            <img src={require('../../../assets/img/icons/star1.png')} alt="..." />
                            <img src={require('../../../assets/img/icons/star1.png')} alt="..." />
                            <img src={require('../../../assets/img/icons/star1.png')} alt="..." />
                            <img src={require('../../../assets/img/icons/star1.2.png')} alt="..." />
                        </p>
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">{item.tenPhim}</h5>
                        <p className="card-text">117 phút</p>
                    </div>
                </div>
            )
        })
        let elmMovieComing = listMovieComing.map((item, index) => {
            return (
                <div className="card" key={index}>
                    <div className="filmDetail">
                        <img src={item.hinhAnh} className="card-img-top" alt="..." />
                        <div className="showHoverImg">
                            <a>
                                <img src={require('../../../assets/img/icons/play-video.png')} alt="..." />
                            </a>
                        </div>
                    </div>
                    <div className="showHover">
                        <a>MUA VÉ</a>
                    </div>
                    <span className="ageType">C16</span>
                    <span className="avgPoint">
                        <p>8.5</p>
                        <p>
                            <img src={require('../../../assets/img/icons/star1.png')} alt="..." />
                            <img src={require('../../../assets/img/icons/star1.png')} alt="..." />
                            <img src={require('../../../assets/img/icons/star1.png')} alt="..." />
                            <img src={require('../../../assets/img/icons/star1.png')} alt="..." />
                            <img src={require('../../../assets/img/icons/star1.2.png')} alt="..." />
                        </p>
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">{item.tenPhim}</h5>
                        <p className="card-text">117 phút</p>
                    </div>
                </div>
            )
        })

        return (
            <section className="homeMovie my-5" id="selectFilm">
                <div className="tabControl">
                    <ul className="nav navCenter">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#home">Đang Chiếu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu1">Sắp Chiếu</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane active" id="home">
                        <div className="owl-carousel owl-theme homeMovie__now">
                            <div className="item row myHomeMovie">
                                {elmMovie}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="menu1">
                        <div className="homeMovie__comming owl-carousel" id="upComingFilms">
                            <div className="carouselItem item row myHomeMovie">
                                {elmMovieComing}
                                {elmMovieComing}

                            </div>
                        </div>
                    </div>
                </div>

                {/* {renderModal} */}
                <div className="modal fade" id="modalTrailer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <iframe width="750" height="450" src={this.state.src} frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listMovie: state.movieReducer.listMovie,
        listMovieComing: state.movieReducer.listMovieComing
    }
}

export default connect(mapStateToProps, null)(HomeMovie);
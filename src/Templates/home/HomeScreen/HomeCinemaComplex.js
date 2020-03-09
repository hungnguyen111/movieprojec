import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class HomeCinemaComplex extends Component {
    renderPlexBHD = () => {
        return this.props.cinePlex.map((item, index) => {
            if (item.maHeThongRap === 'BHDStar') {
                return (
                    item.lstCumRap.map((cumRap, index) => {
                        // console.log(cumRap.danhSachPhim);

                        return (
                            <div key={index} className={`nav-link ${index === 0? 'active':''}`} data-toggle="pill" href={`#bhd${index + 1}`} role="tab">
                                <div className="row cinemaLeft">
                                    <div className="cinemaLeftLeft">
                                        <img src={require('../../../assets/img/icons/bhd1.jpg')} alt="..." />
                                    </div>
                                    <div className="cinemaLeftRight">
                                        <span><span style={{ color: '#8bc541' }}>{cumRap.tenCumRap}</span></span><br />
                                        <p className="address">{cumRap.diaChi}</p>
                                        <a href="#">[Chi tiết]</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
            }
        })
    }
    renderPlexBHDContent = () => {
        return this.props.cinePlex.map((item, index) => {
            // console.log(item);
            if (item.maHeThongRap === 'BHDStar') {
                return (
                    item.lstCumRap.map((cumRap, index2) => {
                        // console.log(cumRap.danhSachPhim);
                        return (
                            cumRap.danhSachPhim.map((phim, index) => {
                                let lichChieu = phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                    // console.log(lichChieu);
                                    return (
                                        <Fragment key={index}>
                                            {new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() === '1/1/2019' ? <Link to={`/checkout/${lichChieu.maLichChieu}`} key={index}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}</Link> : ''}
                                        </Fragment>
                                    )
                                })
                                // console.log(phim);
                                
                                return (
                                    <div key={index} className={`tab-pane fade show row ${index2 === 0 ? "active" : ""} `} id={`bhd${index2 + 1}`} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <h4>
                                            {phim.tenPhim}
                                        </h4>
                                        {lichChieu}
                                    </div>
                                )
                            })
                        )

                    })
                )
            }
        })
    }

    renderPlexCGV = () => {
        return this.props.cinePlex.map((item, index) => {
            // console.log(item);
            if (item.maHeThongRap === 'CGV') {
                return (
                    item.lstCumRap.map((cumRap, index) => {
                        // console.log(cumRap);
                        return (
                            <div key={index} className={`nav-link ${index === 0? 'active':''}`} data-toggle="pill" href={`#cgv${index + 1}`} role="tab">
                                <div className="row cinemaLeft">
                                    <div className="cinemaLeftLeft">
                                        <img src={require('../../../assets/img/icons/cgv1.jpg')} alt="..." />
                                    </div>
                                    <div className="cinemaLeftRight">
                                        <span><span style={{ color: '#8bc541' }}>{cumRap.tenCumRap}</span></span><br />
                                        <p className="address">{cumRap.diaChi}</p>
                                        <a href="#">[Chi tiết]</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
            }
        })
    }
    renderPlexCGVContent = () => {
        return this.props.cinePlex.map((item, index) => {
            // console.log(item);
            if (item.maHeThongRap === 'CGV') {
                return (
                    item.lstCumRap.map((cumRap, index2) => {
                        // console.log(cumRap.danhSachPhim);
                        return (
                            cumRap.danhSachPhim.map((phim, index) => {
                                // console.log(phim);
                                let lichChieu = phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                    // console.log(lichChieu.ngayChieuGioChieu);
                                    return (
                                        <Fragment key={index}>
                                            {new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() === '1/1/2019' ? <Link to={`/checkout/${lichChieu.maLichChieu}`} key={index}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}</Link> : ''}
                                        </Fragment>
                                    )
                                })
                                return (
                                    <div key={index} className={`tab-pane fade show row ${index2 === 0 ? "active" : ""} `} id={`cgv${index2 + 1}`} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <h4>
                                            {phim.tenPhim}
                                        </h4>
                                        {lichChieu}
                                    </div>
                                )
                            })
                        )

                    })
                )
            }
        })
    }
    renderCineStar = () => {
        return this.props.cinePlex.map((item, index) => {
            if (item.maHeThongRap === 'CineStar') {
                return (
                    item.lstCumRap.map((cumRap, index) => {
                        return (
                            <div key={index} className={`nav-link ${index === 0? 'active':''}`} data-toggle="pill" href={`#cine${index + 1}`} role="tab">
                                <div className="row cinemaLeft">
                                    <div className="cinemaLeftLeft">
                                        <img src={require('../../../assets/img/icons/cine.jpg')} alt="..." />
                                    </div>
                                    <div className="cinemaLeftRight">
                                        <span><span style={{ color: '#8bc541' }}>{cumRap.tenCumRap}</span></span><br />
                                        <p className="address">{cumRap.diaChi}</p>
                                        <a href="#">[Chi tiết]</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
            }
        })
    }
    renderPlexCineStarContent = () => {
        return this.props.cinePlex.map((item, index) => {
            // console.log(item);
            if (item.maHeThongRap === 'CineStar') {
                return (
                    item.lstCumRap.map((cumRap, index2) => {
                        // console.log(cumRap.danhSachPhim);
                        return (
                            cumRap.danhSachPhim.map((phim, index) => {
                                // console.log(phim);
                                let lichChieu = phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                    // console.log(lichChieu.ngayChieuGioChieu);
                                    return (
                                        <Fragment key={index}>
                                            {new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() === '1/1/2019' ? <Link to={`/checkout/${lichChieu.maLichChieu}`} key={index}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}</Link> : ''}
                                        </Fragment>
                                    )
                                })
                                return (
                                    <div key={index} className={`tab-pane fade show row ${index2 === 0 ? "active" : ""} `} id={`cine${index2 + 1}`} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <h4>
                                            {phim.tenPhim}
                                        </h4>
                                        {lichChieu}
                                    </div>
                                )
                            })
                        )

                    })
                )
            }
        })
    }

    renderGalaxy = () => {
        return this.props.cinePlex.map((item, index) => {
            if (item.maHeThongRap === 'Galaxy') {
                return (
                    item.lstCumRap.map((cumRap, index) => {
                        return (
                            <div key={index} className={`nav-link ${index === 0? 'active':''}`} data-toggle="pill" href={`#galaxy${index + 1}`} role="tab">
                                <div className="row cinemaLeft">
                                    <div className="cinemaLeftLeft">
                                        <img src={require('../../../assets/img/icons/galaxy.jpg')} alt="..." />
                                    </div>
                                    <div className="cinemaLeftRight">
                                        <span><span style={{ color: '#8bc541' }}>{cumRap.tenCumRap}</span></span><br />
                                        <p className="address">{cumRap.diaChi}</p>
                                        <a href="#">[Chi tiết]</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
            }
        })
    }
    renderPlexGalaxyContent = () => {
        return this.props.cinePlex.map((item, index) => {
            // console.log(item);
            if (item.maHeThongRap === 'Galaxy') {
                return (
                    item.lstCumRap.map((cumRap, index2) => {
                        // console.log(cumRap.danhSachPhim);
                        return (
                            cumRap.danhSachPhim.map((phim, index) => {
                                // console.log(phim);
                                let lichChieu = phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                    // console.log(lichChieu.ngayChieuGioChieu);
                                    return (
                                        <Fragment key={index}>
                                            {new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() === '1/1/2019' ? <Link to={`/checkout/${lichChieu.maLichChieu}`} key={index}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}</Link> : ''}
                                        </Fragment>
                                    )
                                })
                                return (
                                    <div key={index} className={`tab-pane fade show row ${index2 === 0 ? "active" : ""} `} id={`galaxy${index2 + 1}`} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <h4>
                                            {phim.tenPhim}
                                        </h4>
                                        {lichChieu}
                                    </div>
                                )
                            })
                        )

                    })
                )
            }
        })
    }

    renderLotte = () => {
        return this.props.cinePlex.map((item, index) => {
            if (item.maHeThongRap === "LotteCinima") {
                return (
                    item.lstCumRap.map((cumRap, index) => {
                        return (
                            <div key={index} className={`nav-link ${index === 0? 'active':''}`} data-toggle="pill" href={`#lotte${index + 1}`} role="tab">
                                <div className="row cinemaLeft">
                                    <div className="cinemaLeftLeft">
                                        <img src={require('../../../assets/img/icons/lotte.jpg')} alt="..." />
                                    </div>
                                    <div className="cinemaLeftRight">
                                        <span><span style={{ color: '#8bc541' }}>{cumRap.tenCumRap}</span></span><br />
                                        <p className="address">{cumRap.diaChi}</p>
                                        <a href="#">[Chi tiết]</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
            }
        })
    }

    renderPlexLotteContent = () => {
        return this.props.cinePlex.map((item, index) => {
            // console.log(item);
            if (item.maHeThongRap === 'LotteCinima') {
                return (
                    item.lstCumRap.map((cumRap, index2) => {
                        // console.log(cumRap.danhSachPhim);
                        return (
                            cumRap.danhSachPhim.map((phim, index) => {
                                // console.log(phim);
                                let lichChieu = phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                    // console.log(lichChieu.ngayChieuGioChieu);
                                    return (
                                        <Fragment key={index}>
                                            {new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() === '1/1/2019' ? <Link to={`/checkout/${lichChieu.maLichChieu}`} key={index}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}</Link> : ''}
                                        </Fragment>
                                    )
                                })
                                return (
                                    <div key={index} className={`tab-pane fade show row ${index2 === 0 ? "active" : ""} `} id={`lotte${index2 + 1}`} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <h4>
                                            {phim.tenPhim}
                                        </h4>
                                        {lichChieu}
                                    </div>
                                )
                            })
                        )

                    })
                )
            }
        })
    }
    renderMegaGS = () => {
        return this.props.cinePlex.map((item, index) => {
            if (item.maHeThongRap === "MegaGS") {
                return (
                    item.lstCumRap.map((cumRap, index) => {
                        return (
                            <div key={index} className={`nav-link ${index === 0? 'active':''}`} data-toggle="pill" href={`#mega${index + 1}`} role="tab">
                                <div className="row cinemaLeft">
                                    <div className="cinemaLeftLeft">
                                        <img src={require('../../../assets/img/icons/megags.jpg')} alt="..." />
                                    </div>
                                    <div className="cinemaLeftRight">
                                        <span><span style={{ color: '#8bc541' }}>{cumRap.tenCumRap}</span></span><br />
                                        <p className="address">{cumRap.diaChi}</p>
                                        <a href="#">[Chi tiết]</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
            }
        })
    }
    renderPlexMegaContent = () => {
        return this.props.cinePlex.map((item, index) => {
            // console.log(item);
            if (item.maHeThongRap === 'MegaGS') {
                return (
                    item.lstCumRap.map((cumRap, index2) => {
                        // console.log(cumRap.danhSachPhim);
                        return (
                            cumRap.danhSachPhim.map((phim, index) => {
                                // console.log(phim);
                                let lichChieu = phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                    // console.log(lichChieu.ngayChieuGioChieu);
                                    return (
                                        <Fragment key={index}>
                                            {new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() === '1/1/2019' ? <Link to={`/checkout/${lichChieu.maLichChieu}`} key={index}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}</Link> : ''}
                                        </Fragment>
                                    )
                                })
                                return (
                                    <div key={index} className={`tab-pane fade show row ${index2 === 0 ? "active" : ""} `} id={`mega${index2 + 1}`} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <h4>
                                            {phim.tenPhim}
                                        </h4>
                                        {lichChieu}
                                    </div>
                                )
                            })
                        )

                    })
                )
            }
        })
    }

    render() {
        let { listCinema, cinePlexBHD, cinePlex } = this.props;

        let elmLogo = listCinema.map((item, index) => {
            return (
                <a key={index} className={`nav-link ${item.maHeThongRap === "BHDStar" ? "active" : ""}`} data-toggle="pill" href={`#${item.maHeThongRap}`} role="tab"><img src={item.logo} alt="..." /></a>
            )
        })


        return (
            <section className="homeCinemaComplex mb-5" id="homeCinemaComplex">
                <div className="homeCinemaTop">
                    <img src={require('../../../assets/img/icons/back-news.png')} alt="back-new" />
                </div>
                <div className="homeCinema">
                    <nav>
                        <div className="nav nav-tabs homeCinemaTop" role="tablist">
                            {elmLogo}
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="BHDStar" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="homeCinemaPosition row">
                                <div className="cinema__position__control">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        {this.renderPlexBHD()}
                                    </div>
                                </div>
                                <div className="cinema__position__content">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {this.renderPlexBHDContent()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="CGV" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="homeCinemaPosition row">
                                <div className="cinema__position__control">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        {this.renderPlexCGV()}
                                    </div>
                                </div>
                                <div className="cinema__position__content">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {this.renderPlexCGVContent()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="CineStar" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className="homeCinemaPosition row">
                                <div className="cinema__position__control">
                                    <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                                        {this.renderCineStar()}
                                    </div>
                                </div>
                                <div className="cinema__position__content">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {this.renderPlexCineStarContent()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="Galaxy" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="homeCinemaPosition row">
                                <div className="cinema__position__control">
                                    <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                                        {this.renderGalaxy()}
                                    </div>
                                </div>
                                <div className="cinema__position__content">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {this.renderPlexGalaxyContent()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="LotteCinima" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className="homeCinemaPosition row">
                                <div className="cinema__position__control">
                                    <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                                        {this.renderLotte()}
                                    </div>
                                </div>
                                <div className="cinema__position__content">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {this.renderPlexLotteContent()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="MegaGS" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="homeCinemaPosition row">
                                <div className="cinema__position__control">
                                    <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                                        {this.renderMegaGS()}
                                    </div>
                                </div>
                                <div className="cinema__position__content">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {this.renderPlexMegaContent()}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="homeCinemaPosition">
                    </div>
                    <div className="homeCinemaFilm" />
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        listCinema: state.movieReducer.listCinema,
        cinePlexBHD: state.movieReducer.cinePlexBHD,
        cinePlex: state.movieReducer.cinePlex
    }
}

export default connect(mapStateToProps, null)(HomeCinemaComplex);
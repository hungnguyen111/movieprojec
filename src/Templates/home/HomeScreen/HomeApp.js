import React, { Component } from 'react';
import Swiper from 'swiper';



export default class HomeApp extends Component {
    render() {
        return (
            <section className="homeApp" id="homeApp">
                <div className="footer__top__bg">
                    <div className="footer__top">
                        <div className="row">
                            <div className="footer__left">
                                <p>Ứng dụng tiện lợi dành cho người yêu điện ảnh</p>
                                <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                                <button className="btn">App miễn phí - Tải về ngay!</button>
                                <p>TIX có hai phiên bản <a href="#">IOS</a> &amp; <a href="#">Android</a></p>
                            </div>
                            <div className="footer__right">
                                <img className="footer__right__img" src={require('../../../assets/img/icons/mobile.png')} alt="Loading..." />
                                <div className="slideInPhone">
                                    <div className="swiper-container swiperSlide">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <img src={require('../../../assets/img/icons/slide0.png')} alt={0} />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={require('../../../assets/img/icons/slide1.png')} alt={1} />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={require('../../../assets/img/icons/slide2.png')} alt={2} />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={require('../../../assets/img/icons/slide4.png')} alt={3} />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={require('../../../assets/img/icons/slide5.png')} alt={5} />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={require('../../../assets/img/icons/slide7.png')} alt={7} />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={require('../../../assets/img/icons/slide8.png')} alt={8} />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={require('../../../assets/img/icons/slide9.png')} alt={9} />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={require('../../../assets/img/icons/slide10.png')} alt={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

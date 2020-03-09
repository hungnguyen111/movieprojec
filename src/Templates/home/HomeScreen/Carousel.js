import React, { Component } from 'react';

export default class Carousel extends Component {
    render() {
        return (
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../../../assets/img/ke-du-hanh-15761286853539.jpg')} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../../../assets/img/ccee-15768157060937.jpg')} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../../../assets/img/jumanjii-3-15762073170542.jpg')} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../../../assets/img/last-christ-15762073893342.jpg')} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../../../assets/img/mat-biec-15768091323740.jpg')} alt="..." />
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

            // <section className="carousel">
            //     <div className="swiper-container carousel__container">
            //         {/* Additional required wrapper */}
            //         <div className="swiper-wrapper">
            //             {/* Slides */}
            //             <div className="swiper-slide">
            //                 <img src={require('../../../assets/img/ke-du-hanh-15761286853539.jpg')} alt="..." />
            //             </div>
            //             <div className="swiper-slide">
            //                 <img src={require('../../../assets/img/ccee-15768157060937.jpg')} alt="..." />
            //             </div>
            //             <div className="swiper-slide">
            //                 <img src={require('../../../assets/img/jumanjii-3-15762073170542.jpg')} alt="..." />
            //             </div>
            //             <div className="swiper-slide">
            //                 <img src={require('../../../assets/img/last-christ-15762073893342.jpg')} alt="..." />
            //             </div>
            //             <div className="swiper-slide">
            //                 <img src={require('../../../assets/img/mat-biec-15768091323740.jpg')} alt="..." />
            //             </div>
            //         </div>
            //         {/* If we need pagination */}
            //         <div className="swiper-pagination" />
            //         {/* If we need navigation buttons */}
            //         <div className="swiper-button-prev" />
            //         <div className="swiper-button-next" />
            //         <div className="swiper-pagination" />
            //     </div>
            // </section>
        )
    }
}

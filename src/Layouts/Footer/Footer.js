import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer__bot_bg">
                    <div className="footer__bot">
                        <div className="row ">
                            <div className="bot__items bot__left">
                                <p className="hideOnMobile">TIX</p>
                                <div className="row">
                                    <div className="bot__left__top hideOnMobile">
                                        <a href="#">FAQ</a><br />
                                        <a href="#">Brand Guidelines</a>
                                    </div>
                                    <div className="bot__left__bot ">
                                        <a href="#">Thỏa thuận sử dụng</a>
                                        <a href="#">Quy chế hoạt động</a>
                                        <a href="#">Chính sách bảo mật</a>
                                        <a href="#">Quyền lợi thành viên</a>
                                        <a href="#">Brand Guidelines</a>
                                    </div>
                                </div>
                            </div>
                            <div className="bot__items bot__mid hideOnMobile">
                                <p>ĐỐI TÁC</p>
                                <div className="row col-12 linePartner">
                                    <a href="https://www.cgv.vn/"><img src={require('../../assets/img/icons/cgv.png')} alt="cgv" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/bhd.png')} alt="bhd" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/galaxycine.png')} alt="galaxycine" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/cinestar.png')} alt="cinestar" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/lotte.png')} alt="lotte" /></a>
                                </div>
                                <div className="row col-12 linePartner">
                                    <a href="https://www.cgv.vn/"><img src={require('../../assets/img/icons/megags.png')} alt="megags" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/bt.jpg')} alt="bt" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/dongdacinema.png')} alt="dongdacinema" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/TOUCH.png')} alt="TOUCH" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/cnx.jpg')} alt="cnx" /></a>
                                </div>
                                <div className="row col-12 linePartner">
                                    <a href="https://www.cgv.vn/"><img src={require('../../assets/img/icons/STARLIGHT.png')} alt="STARLIGHT" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/dcine.png')} alt="dcine" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/momo.png')} alt="momo" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/zalopay_icon.png')} alt="zalopay" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/payoo.jpg')} alt="payoo" /></a>
                                </div>
                                <div className="row col-12 linePartner">
                                    <a href="https://www.cgv.vn/"><img src={require('../../assets/img/icons/VCB.png')} alt="vcb" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/AGRIBANK.png')} alt="agri" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/VIETTINBANK.png')} alt="VIETTINBANK" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/IVB.png')} alt="IVB" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/123go.png')} alt={123} /></a>
                                </div>
                                <div className="row col-12 linePartner">
                                    <a href="#"><img src={require('../../assets/img/icons/laban.png')} alt="laban" /></a>
                                </div>
                            </div>
                            <div className="row bot__items bot__right">
                                <div className="col-xs-6 textCenter hideOnMobile">
                                    <p className="title">MOBILE APP</p>
                                    <a href="#"><img src={require('../../assets/img/icons/apple-logo.png')} alt="apple" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/android-logo.png')} alt="android" /></a>
                                </div>
                                <div className="col-xs-6 textCenter">
                                    <p className="title hideOnMobile">SOCIAL</p>
                                    <a href="#"><img src={require('../../assets/img/icons/facebook-logo.png')} alt="facebook" /></a>
                                    <a href="#"><img src={require('../../assets/img/icons/zalo-logo.png')} alt="zalo-logo" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="hrFooter" />
                    <div className="footer__brand row">
                        <div className="imgFooter brand__items">
                            <img src={require('../../assets/img/icons/zion-logo.jpg')} alt="zion" />
                        </div>
                        <div className="infoFooter brand__items">
                            <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span><br />
                            <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam</span><br />
                            <span>Mã số thuế: 0101659783</span>
                        </div>
                        <div className="imgFooter2 brand__items">
                            <img src={require('../../assets/img/icons/9693e0dbb6ceb3b274afeb6aa09a911f.png')} alt="bo cong thuong" />
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

import React, { Component } from 'react'

export default class NavMobile extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="idnavMobile">
                <div className="menuMobile">
                    <ul className="listMenu">
                        <li><a href="#" className="avatar"><img src="./img/avatar.png" alt="avatar" /> Đăng Nhập</a></li>
                        <li><a href="#">Lịch Chiếu</a></li>
                        <li className="angleRight"><a href="#" data-toggle="collapse" data-target="#idnavMobile" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-angle-right" /></a></li>
                        <li><a href="#">Cụm rạp</a></li>
                        <li><a href="#">Tin Tức</a></li>
                        <li><a href="#">Ứng dụng</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

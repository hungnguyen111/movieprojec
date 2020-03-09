import React, { Component } from 'react';
import Swal from 'sweetalert2';

export default class HomeNews extends Component {
    handleClick = () => {
        Swal.fire(
            'Bạn muốn đọc thêm tin tức ư?',
            'Rất tiếc chúng tôi chỉ có nấy tin thôi!',
            'error'
        )
    }

    render() {
        return (
            <section className="homeNews" id="homeNews">
                <div className="homeNewsTop">
                    <img src={require('../../../assets/img/icons/back-news.png')} alt="back-new" />
                </div>
                <div className="tabControl">
                    <ul className="nav navCenter">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#dienAnh">Điện Ảnh 24h</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#review">Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#khuyenMai">Khuyến Mãi</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="dienAnh">
                        <div className="row newsTop">
                            <div className="col-12 col-sm-6 newsTopImg">
                                <img src={require('../../../assets/img/icons/thong-bao-doi-ten-thuong-hieu-123phim-15771601850188.jpg')} alt="..." />
                                <p className="newTitle">[Thông báo] Đổi tên thương hiệu 123Phim</p>
                                <p>123Phim thông báo đổi tên thương hiệu.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 newsTopImg">
                                <img src={require('../../../assets/img/icons/cum-rap-cgv-chinh-thuc-co-mat-tren-123phim-15761453956040.jpg')} alt="..." />
                                <p className="newTitle">Cụm rạp CGV chính thức có mặt trên 123Phim</p>
                                <p>Chào đón cụm rạp CGV trên hệ thống đặt vé trực tuyến 123Phim.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                        <div className="newsBot newsTop row">
                            <div className="newsBotLeft newsBotItem newsTopImg">
                                <img src={require('../../../assets/img/icons/tong-hop-tat-ca-nhan-vat-trong-thuong-hieu-dinh-dam-star-wars-p1-15776842659094.jpg')} alt="..." />
                                <p className="newTitle">Tổng hợp nhân vật trong thương hiệu đình đám Star Wars (P1)</p>
                                <p>Danh sách này sẽ giúp các bạn 'phổ cập' kiến thức Star Wars một cách nhanh nhất.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="newsBotMid newsBotItem newsTopImg">
                                <img src={require('../../../assets/img/icons/09adbe8e1eff4efa227c6e41bfd5b893.jpg')} alt="..." />
                                <p className="newTitle">Bạn đã sẵn sàng nắm tất tần tật kiến thức trong One Piece: Stampede?</p>
                                <p>TIX sẽ giúp bạn trở thành "fan cứng" One Piece chỉ trong tíc tắc nhé.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="newsBotRight newsBotItem newsTopImg">
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/muon-hinh-van-trang-kieu-doc-than-trong-chong-cu-tinh-moi-15773512253745.jpg')} alt="..." />
                                    <p>Muôn hình vạn trạng kiểu độc thân trong Chồng Cũ, Tình Mới</p>
                                </div>
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/rambo-hoi-ket-dam-mau-hoi-ket-xung-tam-thuong-hieu-hanh-dong-duoc-yeu-thich-hang-dau-hollywood-15772691049778.jpg')} alt="..." />
                                    <p>Rambo: Hồi Kết Đẫm Máu - Hồi kết xứng tầm thương hiệu hành động được yêu thích hàng đầu
                Hollywood</p>
                                </div>
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/thong-bao-chao-don-rap-bhd-star-the-garden-ha-noi-tren-tix-15772726310715.jpg')} alt="..." />
                                    <p>[Thông báo] Chào đón rạp BHD Star The Garden - Hà Nội trên TIX</p>
                                </div>
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/73eb26f02cf1f09fdca7f0ad2ff4d7b6.jpg')} alt="..." />
                                    <p>Những vở nhạc kịch nổi tiếng chuyển thể thành công sang phiên bản điện ảnh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="review">
                        <div className="row newsTop">
                            <div className="col-12 col-sm-6 newsTopImg">
                                <img src={require('../../../assets/img/icons/thong-bao-doi-ten-thuong-hieu-123phim-15771601850188.jpg')} alt="..." />
                                <p className="newTitle">[Thông báo] Đổi tên thương hiệu 123Phim</p>
                                <p>123Phim thông báo đổi tên thương hiệu.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 newsTopImg">
                                <img src={require('../../../assets/img/icons/cum-rap-cgv-chinh-thuc-co-mat-tren-123phim-15761453956040.jpg')} alt="..." />
                                <p className="newTitle">Cụm rạp CGV chính thức có mặt trên 123Phim</p>
                                <p>Chào đón cụm rạp CGV trên hệ thống đặt vé trực tuyến 123Phim.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                        <div className="newsBot newsTop row">
                            <div className="newsBotLeft newsBotItem newsTopImg">
                                <img src={require('../../../assets/img/icons/tong-hop-tat-ca-nhan-vat-trong-thuong-hieu-dinh-dam-star-wars-p1-15776842659094.jpg')} alt="..." />
                                <p className="newTitle">Tổng hợp nhân vật trong thương hiệu đình đám Star Wars (P1)</p>
                                <p>Danh sách này sẽ giúp các bạn 'phổ cập' kiến thức Star Wars một cách nhanh nhất.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="newsBotMid newsBotItem newsTopImg">
                                <img src={require('../../../assets/img/icons/09adbe8e1eff4efa227c6e41bfd5b893.jpg')} alt="..." />
                                <p className="newTitle">Bạn đã sẵn sàng nắm tất tần tật kiến thức trong One Piece: Stampede?</p>
                                <p>TIX sẽ giúp bạn trở thành "fan cứng" One Piece chỉ trong tíc tắc nhé.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="newsBotRight newsBotItem newsTopImg">
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/muon-hinh-van-trang-kieu-doc-than-trong-chong-cu-tinh-moi-15773512253745.jpg')} alt="..." />
                                    <p>Muôn hình vạn trạng kiểu độc thân trong Chồng Cũ, Tình Mới</p>
                                </div>
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/rambo-hoi-ket-dam-mau-hoi-ket-xung-tam-thuong-hieu-hanh-dong-duoc-yeu-thich-hang-dau-hollywood-15772691049778.jpg')} alt="..." />
                                    <p>Rambo: Hồi Kết Đẫm Máu - Hồi kết xứng tầm thương hiệu hành động được yêu thích hàng đầu
                Hollywood</p>
                                </div>
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/thong-bao-chao-don-rap-bhd-star-the-garden-ha-noi-tren-tix-15772726310715.jpg')} alt="..." />
                                    <p>[Thông báo] Chào đón rạp BHD Star The Garden - Hà Nội trên TIX</p>
                                </div>
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/73eb26f02cf1f09fdca7f0ad2ff4d7b6.jpg')} alt="..." />
                                    <p>Những vở nhạc kịch nổi tiếng chuyển thể thành công sang phiên bản điện ảnh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="khuyenMai">
                        <div className="row newsTop">
                            <div className="col-12 col-sm-6 newsTopImg">
                                <img src={require('../../../assets/img/icons/thong-bao-doi-ten-thuong-hieu-123phim-15771601850188.jpg')} alt="..." />
                                <p className="newTitle">[Thông báo] Đổi tên thương hiệu 123Phim</p>
                                <p>123Phim thông báo đổi tên thương hiệu.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 newsTopImg">
                                <img src={require('../../../assets/img/icons/cum-rap-cgv-chinh-thuc-co-mat-tren-123phim-15761453956040.jpg')} alt="..." />
                                <p className="newTitle">Cụm rạp CGV chính thức có mặt trên 123Phim</p>
                                <p>Chào đón cụm rạp CGV trên hệ thống đặt vé trực tuyến 123Phim.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                        <div className="newsBot newsTop row">
                            <div className="newsBotLeft newsBotItem newsTopImg">
                                <img src={require('../../../assets/img/icons/tong-hop-tat-ca-nhan-vat-trong-thuong-hieu-dinh-dam-star-wars-p1-15776842659094.jpg')} alt="..." />
                                <p className="newTitle">Tổng hợp nhân vật trong thương hiệu đình đám Star Wars (P1)</p>
                                <p>Danh sách này sẽ giúp các bạn 'phổ cập' kiến thức Star Wars một cách nhanh nhất.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="newsBotMid newsBotItem newsTopImg">
                                <img src={require('../../../assets/img/icons/09adbe8e1eff4efa227c6e41bfd5b893.jpg')} alt="..." />
                                <p className="newTitle">Bạn đã sẵn sàng nắm tất tần tật kiến thức trong One Piece: Stampede?</p>
                                <p>TIX sẽ giúp bạn trở thành "fan cứng" One Piece chỉ trong tíc tắc nhé.</p>
                                <div className="social row">
                                    <img src={require('../../../assets/img/icons/like.png')} alt="like" />
                                    <p>0</p>
                                    <img src={require('../../../assets/img/icons/comment.png')} alt="comment" />
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="newsBotRight newsBotItem newsTopImg">
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/muon-hinh-van-trang-kieu-doc-than-trong-chong-cu-tinh-moi-15773512253745.jpg')} alt="..." />
                                    <p>Muôn hình vạn trạng kiểu độc thân trong Chồng Cũ, Tình Mới</p>
                                </div>
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/rambo-hoi-ket-dam-mau-hoi-ket-xung-tam-thuong-hieu-hanh-dong-duoc-yeu-thich-hang-dau-hollywood-15772691049778.jpg')} alt="..." />
                                    <p>Rambo: Hồi Kết Đẫm Máu - Hồi kết xứng tầm thương hiệu hành động được yêu thích hàng đầu
                Hollywood</p>
                                </div>
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/thong-bao-chao-don-rap-bhd-star-the-garden-ha-noi-tren-tix-15772726310715.jpg')} alt="..." />
                                    <p>[Thông báo] Chào đón rạp BHD Star The Garden - Hà Nội trên TIX</p>
                                </div>
                                <div className="botRightItems">
                                    <img src={require('../../../assets/img/icons/73eb26f02cf1f09fdca7f0ad2ff4d7b6.jpg')} alt="..." />
                                    <p>Những vở nhạc kịch nổi tiếng chuyển thể thành công sang phiên bản điện ảnh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn" onClick={this.handleClick}>Xem Thêm</button>
            </section>
        )
    }
}

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as action from '../../../Redux/Actions';
import * as actionsMovie from '../../../Redux/Actions/movieAction';
import { RingLoader } from 'react-spinners';
import Header from '../../../Layouts/Header';
import Swal from 'sweetalert2';


const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 18%;
`;

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            renderSeat: false,
            listSeatBooking: [],
            listSeatBooking2: [],
            trangThaiGhe: false,
            tongTien: '',
            booking: {
                maLichChieu: '',
                danhSachVe: [],
                taiKhoanNguoiDung: ''
            },
            bookedMovie: false
        }
    }

    componentDidMount() {
        this.props.getListSeat(this.props.match.params.maLichChieu);
        this.props.setNoMenu();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isListSeat) {
            this.setState({
                loading: false
            })
        }

    }
    handleBooking = (ghe) => {
        // console.log(ghe);
        let index = this.state.listSeatBooking.findIndex(item => (item.maGhe === ghe.maGhe))
        let index2 = this.state.listSeatBooking2.findIndex(item => (item.maGhe === ghe.maGhe))
        // console.log(index);
        // console.log(ghe.tenGhe);

        if (index !== -1 && !ghe.daDat) {
            this.state.listSeatBooking.splice(index, 1)
            this.state.listSeatBooking2.splice(index2, 1)
            this.setState({
                listSeatBooking: [...this.state.listSeatBooking],
                listSeatBooking2: [...this.state.listSeatBooking2]
            })
        }
        else if(!ghe.daDat){
            this.setState({
                listSeatBooking: [...this.state.listSeatBooking, { maGhe: ghe.maGhe, giaVe: ghe.giaVe }],
                listSeatBooking2: [...this.state.listSeatBooking2, ghe]
            })

        }


    }

    // componentWillUpdate() {

    //     console.log('will update');

    // }
    // componentDidUpdate() {
    //     console.log('did update');
    //     this.props.bookedMovie();

    // }
    renderSeat = () => {
        if (this.props.isListSeat) {
            return this.props.listSeat.danhSachGhe.map((ghe, index) => {
                let gheDangChon = this.state.listSeatBooking.find(item => (item.maGhe === ghe.maGhe))
                // let trangThaiGhe = false;
                // console.log(gheDangChon);
                // console.log(ghe);

                return (
                    <span onClick={() => { this.handleBooking(ghe) }} className={`seat ${ghe.loaiGhe === 'Vip' && !ghe.daDat ? 'seatVip' : ''} ${gheDangChon && !ghe.daDat ? 'seatBooking' : ''} ${ghe.daDat ? 'seatBooked disabled' : ''}`} key={index}>
                        {/* {ghe.tenGhe} */}
                        {/* {ghe.loaiGhe} */}
                    </span>
                )
            })
        }
    }

    booking = (tongTien) => {
        // console.log(tongTien);
        // console.log(this.state.listSeatBooking);
        Swal.fire({
            title: `Tổng tiền: ${tongTien}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đặt vé!',
            cancelButtonText: 'Hủy'
        }).then((result) => {
            if (result.value) {
                let user = JSON.parse(localStorage.getItem('UserGuest'));
                let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
                this.setState({
                    booking: {
                        maLichChieu: this.props.match.params.maLichChieu,
                        danhSachVe: this.state.listSeatBooking,
                        taiKhoanNguoiDung: user ? user.taiKhoan : userAdmin.taiKhoan
                    }
                }, () => {
                    console.log(this.state.booking);
                    this.props.bookingMovie(this.state.booking);
                    this.props.getListSeat(this.props.match.params.maLichChieu);
                    // this.setState({
                    //     bookedMovie: true
                    // })
                    
                    // setTimeout(() => {
                    //     window.location.reload();
                    // }, 2000);
                })
                Swal.fire(
                    'Đặt vé thành công!',
                    'Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.',
                    'success'
                )
            }
        })
    }
    render() {
        let { listSeat, isListSeat } = this.props;
        console.log(listSeat);

        // console.log(this.state.listSeatBooking);
        // console.log(listSeat);
        // if (this.props.isListSeat) {
        //     // console.log(listSeat.thongTinPhim.gioChieu);
        // }
        // console.log(this.state.numberBooking);
        let tongTien = 0;
        this.state.listSeatBooking.map((gheDangChon, index) => {
            return tongTien += gheDangChon.giaVe;
        })
        let elmGhe = '';
        elmGhe = this.state.listSeatBooking2.map((gheDangChon, index) => {
            // console.log(gheDangChon);
            // console.log(listSeat);
            
            
            return (
                <span key={index}>{gheDangChon.tenGhe}  </span>
            )
        })


        return (
            <>
                <RingLoader
                    css={override}
                    // css={!this.state.loading? `display: none`: override}
                    size={80}
                    //size={"150px"} this also works
                    color={"#fb4226"}
                    loading={this.state.loading}
                />
                <Header />
                <div className={`checkOut row ${this.state.loading ? 'loadingDisplay' : ''}`} >
                    <div className="col-8 checkout__left">
                        {/* <h4>Chọn ghế</h4> */}
                        <div className="checkout__title row">
                            <div>
                                <p>{this.props.isListSeat ? listSeat.thongTinPhim.tenCumRap : ''}</p>
                                <p>Giờ chiếu: Hôm nay - {this.props.isListSeat ? listSeat.thongTinPhim.gioChieu : ''}</p>
                            </div>
                        </div>
                        <div className="screen">
                            <img src={require('../../../assets/img/icons/screen.png')} />
                        </div>
                        <div className="listseat row">
                            {this.renderSeat()}
                        </div>
                        <div className="typeseats row">
                            <div className="typeseats__item">
                                <span className="typeseats__span"></span><br />
                                <span>Ghế thường</span>
                            </div>
                            <div className="typeseats__item">
                                <span className="typeseats__span typeseats__vip"></span><br />
                                <span>Ghế vip</span>
                            </div>
                            <div className="typeseats__item">
                                <span className="typeseats__span typeseats__booking"></span><br />
                                <span>Ghế đang chọn</span>
                            </div>
                            <div className="typeseats__item">
                                <span className="typeseats__span typeseats__nobook"></span><br />
                                <span>Ghế không thể chọn</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 checkout__right">
                        {/* <h4>Thông tin đặt vé</h4> */}
                        <div className="right__items">
                            {/* <h5>Tổng tiền</h5> */}
                            <h4>{tongTien} VNĐ</h4>
                        </div>
                        <div className="right__items">
                            {/* <h5>Thông tin phim</h5> */}
                            <h5>{this.props.isListSeat ? listSeat.thongTinPhim.tenPhim : ''}</h5>
                            <span>{this.props.isListSeat ? listSeat.thongTinPhim.tenCumRap : ''}</span><br />
                            <span>Ngày chiếu: {this.props.isListSeat ? listSeat.thongTinPhim.ngayChieu : ''}</span><br />
                        </div>
                        <div className="right__items right__item__seat">
                            <h5>Ghế đang chọn</h5>
                            <p>{elmGhe}</p>
                        </div>
                        {/* <div className="right__items">
                            <h5>Chọn bắp, nước</h5>
                            <a data-toggle="modal" data-target="#modalDrink"><i className="fa fa-link"></i></a>
                        </div> */}
                        <div className="alert alert-danger my-4"> Vé đã mua không thể đổi hoặc hoàn tiền
                                Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.</div>
                        <button className="btn btn-success" onClick={() => { this.booking(tongTien) }}>Đặt Vé</button>
                    </div>
                    {/* Modal  */}
                    <div className="modal fade checkout__drink" id="modalDrink" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Chọn bắp nước</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="drink__items row">
                                        <div className="drink__title">
                                            <img src={require('../../../assets/img/icons/combo1.jpg')} />
                                            <span> 1 bắp và 1 nước 90.000 VNĐ</span>
                                        </div>
                                        <div className="row drink__count">
                                            <button className="btn">-</button>
                                            <span>0</span>
                                            <button className="btn">+</button>
                                        </div>
                                    </div>
                                    <div className="drink__items row">
                                        <div className="drink__title">
                                            <img src={require('../../../assets/img/icons/combo2.jpg')} />
                                            <span> 1 bắp, 1 nước và 1 snack 110.000 VNĐ</span>
                                        </div>
                                        <div className="row drink__count">
                                            <button className="btn">-</button>
                                            <span>0</span>
                                            <button className="btn">+</button>
                                        </div>
                                    </div>
                                    <div className="drink__items row">
                                        <div className="drink__title">
                                            <img src={require('../../../assets/img/icons/combo3.jpg')} />
                                            <span> 1 bắp và 2 nước 120.000 VNĐ</span>
                                        </div>
                                        <div className="row drink__count">
                                            <button className="btn">-</button>
                                            <span>0</span>
                                            <button className="btn">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                                    <button type="button" className="btn btn-primary">Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End modal  */}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        listSeat: state.movieReducer.listSeat,
        isListSeat: state.movieReducer.isListSeat,
        bookedMovie: state.movieReducer.bookedMovie
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListSeat: (maLichChieu) => {
            dispatch(action.getListSeat(maLichChieu))
        },
        setNoMenu: () => {
            dispatch(action.setNoDisplayMenu())
        },
        bookingMovie: (booking) => {
            dispatch(actionsMovie.bookingMovie(booking))
        },
        bookedMovie: () => {
            dispatch(actionsMovie.actBooking());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
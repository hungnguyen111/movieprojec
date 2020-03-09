import React, { Component } from 'react';
import Header from '../../../Layouts/Header/index';
import { connect } from 'react-redux';
import * as actions from '../../../Redux/Actions/userAction';
import * as actionUser from '../../../Redux/Actions/index';
// import { FadeLoader } from 'react-spinners';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('* Field is required!'),
    matKhau: yup.string().required('* Field is required!'),
    hoTen: yup.string().required('* Field is required!'),
    email: yup.string().required('* Field is required!').email('* Email không hợp lệ'),
    soDt: yup.string().required('* Field is required!').matches(/^[0-9]+$/, '* Số điện thoại không hợp lệ'),
    maNhom: yup.string().required('* Field is required!')
})

// const override = `
//   display: block;
//   margin: 0 auto;
//   border-color: red;
//   margin-top: 15%;
// `;

class Profile extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loading: true
    //     };
    // }
    renderProfile = () => {
        let user = JSON.parse(localStorage.getItem('UserGuest'));
        let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
        if (userAdmin) {
            let taiKhoanAdmin = {
                taiKhoan: userAdmin.taiKhoan
            }
            this.props.getProfileUser(taiKhoanAdmin)
        } else if (user) {
            let taiKhoanUser = {
                taiKhoan: user.taiKhoan
            }
            this.props.getProfileUser(taiKhoanUser)
        }
    }
    componentDidMount() {
        this.renderProfile();
        this.props.setNoMenu();
    }
    handleSubmit = (values) => {
        console.log(values);
        this.props.editProfile(values)
    }
    renderModal = () => {
        console.log();
        if(this.props.profileUser){
            let {profileUser} = this.props;
            return (
                <div className="modal fade" id="modalProfile">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Chỉnh sửa thông tin</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <Formik
                                    initialValues={{
                                        taiKhoan: `${profileUser.taiKhoan}`,
                                        matKhau: `${profileUser.matKhau}`,
                                        email: `${profileUser.email}`,
                                        soDt: `${profileUser.soDT}`,
                                        hoTen: `${profileUser.hoTen}`,
                                        maLoaiNguoiDung: 'KhachHang',
                                        maNhom: `${profileUser.maNhom}`
                                    }}
                                    onSubmit={this.handleSubmit}
                                    validationSchema={signupUserSchema}
                                    render={(formikProps) => (
                                        <Form>
                                            <div className="form-group">
                                                <label>Tài khoản</label>
                                                <Field type="text" className="form-control" name='taiKhoan' onChange={formikProps.handleChange} disabled />
                                                <ErrorMessage name="taiKhoan" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Họ tên</label>
                                                <Field type="text" className="form-control" name='hoTen' onChange={formikProps.handleChange} />
                                                <ErrorMessage name="hoTen" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <Field type="email" className="form-control" name='email' onChange={formikProps.handleChange} />
                                                <ErrorMessage name="email" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Số điện thoại</label>
                                                <Field type="text" className="form-control" name='soDt' onChange={formikProps.handleChange} />
                                                <ErrorMessage name="soDt" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Mật khẩu</label>
                                                <Field type="text" className="form-control" name='matKhau' onChange={formikProps.handleChange} />
                                                <ErrorMessage name="matKhau" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Mã nhóm</label>
                                                <Field component="select" className="form-control" name='maNhom' onChange={formikProps.handleChange}>
                                                    <option>GP01</option>
                                                    <option>GP02</option>
                                                    <option>GP03</option>
                                                    <option>GP04</option>
                                                    <option>GP05</option>
                                                    <option>GP06</option>
                                                    <option>GP07</option>
                                                    <option>GP08</option>
                                                    <option>GP09</option>
                                                    <option>GP10</option>
                                                </Field>
                                                <ErrorMessage name="maNhom" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <button type="button" className="float-right btn btn-danger ml-2" data-dismiss="modal">Hủy</button>
                                            <button type="submit" className="float-right btn btn-success">
                                                Chỉnh sửa
                                                </button>
                                        </Form>
                                    )}
                                />
    
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        let { profileUser } = this.props;
        console.log(profileUser);
        

        return (
            <div>
                {/* <FadeLoader
                    css={override}
                    size={80}
                    color={"#fb4226"}
                    loading={this.state.loading}
                /> */}
                <Header />
                <div id="profile">
                    <div className="profile__left">
                        <div className="left__top">
                            <img className="avatar" src={require('../../../assets/img/avatar.png')} alt="logo" />
                        </div>
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#userControl">THÔNG TIN CÁ NHÂN</a>
                                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#movieControl">QUẢN LÝ ĐẶT PHIM</a>
                            </div>
                        </div>
                    </div>
                    <div className="profile__right">
                        <div className="right__bot">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="userControl">
                                    <button className="btn btn-success mb-2" data-toggle="modal" data-target="#modalProfile">Chỉnh sửa thông tin</button>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Tài khoản</th>
                                                <td>{profileUser.taiKhoan}</td>
                                            </tr>
                                            <tr>
                                                <th>Họ tên</th>
                                                <td>{profileUser.hoTen}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>{profileUser.email}</td>
                                            </tr>
                                            <tr>
                                                <th>Số điện thoại</th>
                                                <td>{profileUser.soDT}</td>
                                            </tr>
                                            <tr>
                                                <th>Mật khẩu</th>
                                                <td>{profileUser.matKhau}</td>
                                            </tr>
                                            {/* {this.renderProfile()} */}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane fade" id="movieControl">
                                    <input type="text" className="form-control profileSearch mb-3" placeholder="Tìm kiếm phim đã đặt" />
                                    {/* <button className="btn btn-success mb-2" data-toggle="modal" data-target="#modalProfile">Chỉnh sửa thông tin</button> */}
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="">Tên Phim</th>
                                                <th className="">Rạp Chiếu</th>
                                                <th className="">Số Ghế</th>
                                                <th className="">Tổng Tiền</th>
                                                <th className="">Ngày Đặt</th>
                                                <th className="">Thời Gian</th>
                                                {/* <th className="thSetting"><i className="fa fa-cog" /> Chỉnh sửa</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {profileUser && profileUser.thongTinDatVe.length > 0 ?
                                                profileUser.thongTinDatVe.map((ghe, index) => {
                                                    // console.log(ghe);
                                                    return ghe.danhSachGhe.map((gheDaBook, index2) => {
                                                        return (
                                                            <tr key={index2}>
                                                                <td>{ghe.tenPhim}</td>
                                                                <td>{gheDaBook.tenHeThongRap}</td>
                                                                <td>{gheDaBook.tenGhe}</td>
                                                                <td>{ghe.giaVe}</td>
                                                                <td>{new Date(ghe.ngayDat).toLocaleDateString()}</td>
                                                                <td>{ghe.thoiLuongPhim} phút</td>
                                                                {/* <td><button className="btn btn-danger ml-2">Xóa</button></td> */}
                                                            </tr>
                                                        )
                                                    })
                                                })
                                                :
                                                <></>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderModal()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfileUser: (taiKhoan) => {
            dispatch(actions.getProfileUser(taiKhoan))
        },
        setNoMenu: () => {
            dispatch(actionUser.setNoDisplayMenu())
        },
        editProfile: (profile)=>{
            dispatch(actions.editProfile(profile))
        }
    }
}

const mapStateToProps = state => {
    return {
        profileUser: state.userReducer.profileUser,
        getProfileSuccess: state.userReducer.getProfileSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
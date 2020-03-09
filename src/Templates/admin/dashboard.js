import React, { Component } from 'react';
import Modal from './modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionsUser from '../../Redux/Actions/userAction';
import * as actions from '../../Redux/Actions/index';
import * as actionsMovie from '../../Redux/Actions/movieAction';
import Swal from 'sweetalert2';
import ModalMovie from './modalMovie';
import UserList from './user';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

// const signupUserSchema = yup.object().shape({
//     taiKhoan: yup.string().required('* Field is required!'),
//     matKhau: yup.string().required('* Field is required!'),
//     hoTen: yup.string().required('* Field is required!'),
//     email: yup.string().required('* Field is required!').email('* Email không hợp lệ'),
//     soDt: yup.string().required('* Field is required!').matches(/^[0-9]+$/, '* Số điện thoại không hợp lệ'),
//     maNhom: yup.string().required('* Field is required!')
// })

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            addUser: true,
            addMovie: false,
            editUser: false,
            editMovie: false,
            logout: false,
            keyword: '',
            keywordMovie: '',
            filter: '',
            sort: '',
            movieEditing: null
        })
    }
    handleLogout = () => {
        localStorage.removeItem('UserAdmin');
        this.setState({
            logout: true
        })
    }
    componentDidMount() {
        this.props.getListUser();
        this.props.getListMovie();
        this.props.getListMovieAll();
    }
    deleteUser = (taiKhoan) => {
        // this.props.getListUser()
        Swal.fire({
            // title: 'Bạn có chắc muốn xóa tài khoản này?',
            title: "Xóa tài khoản này?",
            text: "Không thể khôi phục tài khoản khi đã xóa!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.value) {
                // nếu xóa thành công thực hiện ở đây
                this.props.deleteUser(taiKhoan);
                Swal.fire({
                    text: 'Xóa thành công!',
                    // 'Your file has been deleted.',
                    icon: 'success'
                })
            }
        })
    }

    deleteMovie = (maPhim) => {
        Swal.fire({
            // title: 'Bạn có chắc muốn xóa tài khoản này?',
            title: "Xóa phim này?",
            text: "Không thể khôi phục phim khi đã xóa!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.value) {
                // nếu xóa thành công thực hiện ở đây
                this.props.deleteMovie(maPhim);
                this.props.getListMovieAll();
                Swal.fire({
                    text: 'Xóa thành công!',
                    icon: 'success'
                })
            }
        })
    }

    addUser = () => {
        this.props.setAddUserDefault()
        this.setState({
            addUser: true,
            addMovie: false,
            editUser: false,
            editMovie: false
        })
    }

    addMovie = () => {
        this.setState({
            addUser: false,
            addMovie: true,
            editUser: false,
            editMovie: false
        })
    }

    editUser = (user) => {
        this.props.editUser(user)
        this.setState({
            addUser: false,
            addMovie: false,
            editUser: true,
            editMovie: false,
            taiKhoan: user.taiKhoan,
            email: user.email,
            soDt: user.soDt,
            hoTen: user.hoTen,
            matKhau: user.matKhau,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
            maNhom: user.maNhom
        })
    }

    editMovie = (phim) => {
        this.props.editMovie(phim);
        console.log(phim);
        
        this.setState({
            addUser: false,
            addMovie: false,
            editUser: false,
            editMovie: true,
            movieEditing: phim
        })
    }

    handleSort = (event) => {
        // console.log(event.target.value);
        this.setState({
            sort: event.target.value
        }, () => {
            this.props.sortUser(this.state.sort)
            // console.log(this.state.sort);

        })
    }
    handleFilter = (event) => {
        // console.log(event.target.value);
        this.setState({
            filter: event.target.value
        }, () => {
            this.props.filterUser(this.state.filter)
        })
    }

    renderUser = () => {
        let { listUser, listUserSearch, listUserFilter, listUserSort, updatedUser } = this.props;
        // console.log(listUserFilter);
        // console.log(listUser);
        // console.log(listUserSort);
        // console.log(updatedUser);


        if (this.state.keyword !== '') {
            return listUserSearch.map((user, index) => {
                return (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{user.taiKhoan}</td>
                        <td>{user.hoTen}</td>
                        <td>{user.email}</td>
                        <td>{user.soDt}</td>
                        <td>{user.maLoaiNguoiDung}</td>
                        <td>{user.matKhau}</td>
                        <td>
                            <button className="btn btn-primary" data-toggle="modal" data-target="#modalUser" onClick={this.props.editUser(user) }>Sửa</button>
                            <button className="btn btn-danger ml-2" onClick={() => { this.deleteUser(user.taiKhoan) }}>Xóa</button>
                        </td>
                    </tr>
                )
            })

        } else if (this.state.filter !== '' && this.state.filter !== 'Lọc') {
            return listUserFilter.map((user, index) => {
                return (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{user.taiKhoan}</td>
                        <td>{user.hoTen}</td>
                        <td>{user.email}</td>
                        <td>{user.soDt}</td>
                        <td>{user.maLoaiNguoiDung}</td>
                        <td>{user.matKhau}</td>
                        <td>
                            <button className="btn btn-primary" data-toggle="modal" data-target="#modalUser" onClick={() => { this.editUser(user) }}>Sửa</button>
                            <button className="btn btn-danger ml-2" onClick={() => { this.deleteUser(user.taiKhoan) }}>Xóa</button>
                        </td>
                    </tr>
                )
            })
        } else if (this.state.sort !== '' && this.state.sort !== 'Sắp xếp tài khoản') {
            return listUserSort.map((user, index) => {
                return (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{user.taiKhoan}</td>
                        <td>{user.hoTen}</td>
                        <td>{user.email}</td>
                        <td>{user.soDt}</td>
                        <td>{user.maLoaiNguoiDung}</td>
                        <td>{user.matKhau}</td>
                        <td>
                            <button className="btn btn-primary" data-toggle="modal" data-target="#modalUser" onClick={() => { this.editUser(user) }}>Sửa</button>
                            <button className="btn btn-danger ml-2" onClick={() => { this.deleteUser(user.taiKhoan) }}>Xóa</button>
                        </td>
                    </tr>
                )
            })
        } else {
            return listUser.map((user, index) => {
                return (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{user.taiKhoan}</td>
                        <td>{user.hoTen}</td>
                        <td>{user.email}</td>
                        <td>{user.soDt}</td>
                        <td>{user.maLoaiNguoiDung}</td>
                        <td>{user.matKhau}</td>
                        <td>
                            <button className="btn btn-primary" data-toggle="modal" data-target="#modalUser" onClick={() => { this.editUser(user) }}>Sửa</button>
                            <button className="btn btn-danger ml-2" onClick={() => { this.deleteUser(user.taiKhoan) }}>Xóa</button>
                        </td>
                    </tr>
                )
            })
        }
    }


    handleChange = (event) => {
        // console.log(event);
        console.log(event.target.value);
        let [name] = event.target
        console.log([name]);
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderMovie = () => {
        let { listMovieAll, listMovie, listMovieSearch } = this.props;
        // console.log(listMovieAll);
        
        if (this.state.keywordMovie !== '') {
            return listMovieSearch.map((phim, index) => {
                return (
                    <tr key={index}>
                        <td>{phim.maPhim}</td>
                        <td>{phim.tenPhim}</td>
                        <td>{new Date(phim.ngayKhoiChieu).toLocaleDateString()}</td>
                        <td>{phim.danhGia}</td>
                        <td>{phim.maNhom}</td>
                        <td className="movieImg"><img src={phim.hinhAnh} /></td>
                        <td>
                            <button className="btn btn-primary" data-toggle="modal" data-target="#modalMovie" onClick={()=>{this.editMovie(phim)}}>Sửa</button>
                            <button className="btn btn-danger ml-2" onClick={() => { this.deleteMovie(phim.maPhim) }}>Xóa Phim</button>
                        </td>
                    </tr>
                )
            })
        } else if(listMovieAll) {
            return listMovieAll.map((phim, index) => {
                return (
                    <tr key={index}>
                        <td>{phim.maPhim}</td>
                        <td>{phim.tenPhim}</td>
                        <td>{new Date(phim.ngayKhoiChieu).toLocaleDateString()}</td>
                        <td>{phim.danhGia}</td>
                        <td>{phim.maNhom}</td>
                        <td className="movieImg"><img src={phim.hinhAnh} /></td>
                        <td>
                            <button className="btn btn-primary" data-toggle="modal" data-target="#modalMovie" onClick={()=>{this.editMovie(phim)}}>Sửa</button>
                            <button className="btn btn-danger ml-2" onClick={() => { this.deleteMovie(phim.maPhim) }}>Xóa Phim</button>
                        </td>
                    </tr>
                )
            })
        }
    }

    handleSearch = (event) => {
        this.props.searchUser(event.target.value)
        this.setState({
            keyword: event.target.value
        })
    }
    handleSearchMovie = (event) => {
        this.setState({
            keywordMovie: event.target.value
        }, () => {
            this.props.searchMovie(this.state.keywordMovie)
        })
    }

    render() {
        // console.log(this.props.listUser);
        // console.log(this.props.listMovie);
        return (
            <div id="dashboard">
                <div className="dashboard__left">
                    <div className="left__top">
                        <Link to='/'><img className="logo" src={require('../../assets/img/icons/web-logo.png')} alt="logo" /></Link>
                        <p>123Phim Admin</p>
                    </div>
                    <div className="left__bot tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#userControl">QUẢN LÝ NGƯỜI DÙNG</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#movieControl">QUẢN LÝ PHIM</a>
                        </div>
                    </div>
                </div>
                <div className="dashboard__right">
                    <div className="right__top row">
                        <div className="col-md-5">
                            <div className=" d-flex justify-content-between">
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group text-left my-0">
                            </div>
                        </div>
                        <button className="btn btn-danger" onClick={this.handleLogout}><Link to='/' className="text-white text-decoration-none">Đăng xuất</Link></button>
                    </div>
                    <div className="right__bot">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="userControl">
                                <div className="row">
                                    <input type="text" className="form-control searchUser mr-3" onChange={this.handleSearch} placeholder="Tìm kiếm tài khoản người dùng" />
                                    <select className="form-control sort mr-3"
                                        onChange={this.handleSort}
                                    >
                                        <option>Sắp xếp tài khoản</option>
                                        <option>A to Z</option>
                                        <option>Z to A</option>
                                    </select>
                                    <select className="form-control filter mr-3" onChange={this.handleFilter}>
                                        <option>Lọc</option>
                                        <option>KhachHang</option>
                                        <option>QuanTri</option>
                                    </select>
                                    <button className="float-right btn btn-success mb-2" data-toggle="modal" data-target="#modalUser" onClick={this.addUser}>Thêm người dùng</button>
                                </div>
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="thStt">Stt</th>
                                            <th className="thTaiKhoan">Tài khoản</th>
                                            <th className="thHoTen">Họ tên</th>
                                            <th className="thEmail">Email</th>
                                            <th className="thSdt">Số điện thoại</th>
                                            <th className="thMaLoai">Loại người dùng</th>
                                            <th className="thPass">Mật khẩu</th>
                                            <th className="thSetting"><i className="fa fa-cog" /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderUser()}
                                    </tbody>
                                </table>

                            </div>
                            <div className="tab-pane fade" id="movieControl">
                                <div className="row">
                                    <input type="text" className="form-control movieSearch mb-3" placeholder="Tìm kiếm phim" onChange={this.handleSearchMovie} />
                                    <button className="float-right btn btn-success ml-3 mb-3" data-toggle="modal" data-target="#modalMovie" onClick={this.addMovie}>Thêm phim</button>
                                </div>
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="">Mã Phim</th>
                                            <th className="thTenPhim">Tên Phim</th>
                                            <th className="">Ngày Chiếu</th>
                                            <th className="">Đánh Giá</th>
                                            <th className="">Mã Nhóm</th>
                                            <th className="">Hình Ảnh</th>
                                            <th className=""><i className="fa fa-cog" /> Chỉnh sửa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderMovie()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Modal infoModal={this.state} /> */}
                {/* {this.renderModalUser()} */}
                <Modal infoModal={this.state}/>
                <ModalMovie infoModal={this.state} />
                {/* <UserList /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listUser: state.userReducer.listUser,
        statusDelete: state.userReducer.statusDelete,
        listMovie: state.movieReducer.listMovie,
        listMovieAll: state.movieReducer.listMovieAll,
        listUserSearch: state.userReducer.listUserSearch,
        listMovieSearch: state.movieReducer.listMovieSearch,
        listUserFilter: state.userReducer.listUserFilter,
        listUserSort: state.userReducer.listUserSort,
        userEditing: state.userEdit,
        updatedUser: state.userReducer.updated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListUser: () => {
            dispatch(actionsUser.actGetListUser());
        },
        deleteUser: (taiKhoan) => {
            dispatch(actionsUser.deleteUser(taiKhoan))
        },
        getListMovie: () => {
            dispatch(actions.actGetListMovieAPI())
        },
        getListMovieAll: () => {
            dispatch(actions.actGetListMovie())
        },
        deleteMovie: (maPhim) => {
            dispatch(actionsMovie.deleteMovie(maPhim))
        },
        searchUser: (keyword) => {
            dispatch(actionsUser.searchUser(keyword));
        },
        editUser: (userEditing) => {
            dispatch(actionsUser.userEdit(userEditing))
        },
        setAddUserDefault: () => {
            dispatch(actionsUser.setAddUserDefault())
        },
        searchMovie: (keyword) => {
            dispatch(actionsMovie.searchMovie(keyword))
        },
        sortUser: (keywordSort) => {
            dispatch(actionsUser.sortUser(keywordSort));
        },
        filterUser: (keywordFilter) => {
            dispatch(actionsUser.filterUser(keywordFilter));
        },
        setEditDefault: () => {
            dispatch(actionsUser.setEditDefault());
        },
        editMovie: (movieEditing) => {
            dispatch(actionsMovie.editMovie(movieEditing))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
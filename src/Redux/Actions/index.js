import * as ActionType from '../Constants/actionType';
import Axios from 'axios';
import Swal from 'sweetalert2';


//MOVIE
export const actGetListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP07&soTrang=1&soPhanTuTrenTrang=12`
        }).then((res) => {
            // localStorage.setItem('homeMovie', JSON.stringify(res.data.items));
            dispatch({
                type: ActionType.GET_LIST_MOVIE,
                listMovie: res.data.items
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const actGetListMovie = ()=>{
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07`
        }).then((res) => {
            // localStorage.setItem('homeMovie', JSON.stringify(res.data.items));
            // console.log(res.data);
            
            dispatch({
                type: ActionType.GET_LIST_MOVIE_ALL,
                listMovieAll: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const actGetListMovieAPIComming = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP07&soTrang=2&soPhanTuTrenTrang=6`
        }).then((res) => {
            dispatch({
                type: ActionType.GET_LIST_MOVIE_COMMING,
                listMovieComing: res.data.items
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}
export const getShowtimes = (maPhim) => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
        }).then((res) => {
            // console.log(res.data);
            dispatch({
                type: ActionType.GET_SHOWTIMES,
                showtimesMovie: res.data
            })
        }).catch((err) => {
            console.log(err);

        })
    }
}

export const getDetailMovie = (maPhim) => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
        }).then((res) => {
            // console.log(res.data);

            dispatch({
                type: ActionType.GET_DETAIL_MOVIE,
                detailMovie: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}
export const setIsLoading = () => {
    return dispatch => {
        dispatch({
            type: ActionType.SET_ISLOADING
        })
    }
}

//CINEMA
export const actGetListCinema = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`
        }).then((res) => {
            dispatch({
                type: ActionType.GET_LIST_CINEMA,
                listCinema: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}
export const actGetCinePlexBHD = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=GP07`
        }).then((res) => {
            dispatch({
                type: ActionType.GET_CINE_PLEX_BHD,
                cinePlexBHD: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}
export const actGetCinePlex = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP07`
        }).then((res) => {
            dispatch({
                type: ActionType.GET_CINE_PLEX,
                cinePlex: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

//BOOKING TICKET
export const getListSeat = (maLichChieu) => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
        }).then((res) => {
            // console.log(res.data);

            dispatch({
                type: ActionType.GET_LIST_SEAT,
                listSeat: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}
export const setIsListSeat = () => {
    return dispatch => {
        dispatch({
            type: ActionType.SET_IS_LIST_SEAT
        })
    }
}
export const setNoDisplayMenu = () => {
    return dispatch => {
        dispatch({
            type: ActionType.SET_NO_MENU
        })
    }
}
export const setDisplayMenu = () => {
    return dispatch => {
        dispatch({
            type: ActionType.SET_MENU
        })
    }
}

//User Login
export const actLogin = (user, history) => {
    return dispatch => {
        Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: user
        }).then((res) => {
            // console.log(res.data);
            if (res.data.maLoaiNguoiDung === 'KhachHang') {
                localStorage.setItem('UserGuest', JSON.stringify(res.data))
                history.go(-1)
            } else if (res.data.maLoaiNguoiDung === 'QuanTri') {
                localStorage.setItem('UserAdmin', JSON.stringify(res.data))
                history.go(-1)
            }
            else {
                Swal.fire(
                    'Không có quyền truy cập!'
                )
            }
        }).catch((err) => {
            Swal.fire(
                'Tài khoản hoặc mật khẩu không đúng!'
            )
            // console.log(err);
        })
    }
}
export const actLoginDetail = (user, history) => {
    return dispatch => {
        Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: user
        }).then((res) => {
            // console.log(res.data);
            if (res.data.maLoaiNguoiDung === 'KhachHang') {
                localStorage.setItem('UserGuest', JSON.stringify(res.data))
                history.go(-1)
            } else if (res.data.maLoaiNguoiDung === 'QuanTri') {
                localStorage.setItem('UserAdmin', JSON.stringify(res.data))
                history.push('goForward')
            }
            else {
                Swal.fire(
                    'Không có quyền truy cập!'
                )
                // alert('Không có quyền truy cập')
            }
        }).catch((err) => {
            Swal.fire(
                'Tài khoản hoặc mật khẩu không đúng!'
            )
            // console.log(err);
        })
    }
}
export const actLoginAdmin = (user, history) => {
    return dispatch => {
        Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: user
        }).then((res) => {
            console.log(res.data);
            if (res.data.maLoaiNguoiDung === 'QuanTri') {
                localStorage.setItem('UserAdmin', JSON.stringify(res.data))
                history.push('/dashboard')
            } else {
                Swal.fire(
                    'Không có quyền truy cập!'
                )
                // alert('Không có quyền truy cập')
            }
        }).catch((err) => {
            Swal.fire(
                'Tài khoản hoặc mật khẩu không đúng!'
            )
            console.log(err);
        })
    }
}
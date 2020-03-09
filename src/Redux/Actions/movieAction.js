import * as ActionType from '../Constants/actionType';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const deleteMovie = (maPhim) => {
    let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
    return dispatch => {
        // console.log(user);
        Axios({
            method: 'DELETE',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            headers: { "Authorization": "Bearer " + `${userAdmin.accessToken}` }
        }).then((res) => {
            // console.log(res.data);
            console.log('xoa thanh cong');
            // window.location.reload();
            dispatch({
                type: ActionType.DELETE_USER,
                maPhim: maPhim
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const addMovie = (movie) => {
    let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
    console.log(movie);

    return dispatch => {
        Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim',
            data: movie,
            headers: { "Authorization": "Bearer " + `${userAdmin.accessToken}` }
        }).then((res) => {
            // console.log(res);
            dispatch({
                type: ActionType.ADD_MOVIE,
                movie: res.data
            })
            Swal.fire(
                'Thêm thành công!',
                'success'
            )
            // window.location.reload();
        }).catch((err) => {
            console.log(err);
            Swal.fire(
                'Mã phim trùng!',
                'error'
            )
        })
    }
}

export const bookingMovie = (booking) => {
    let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
    let user = JSON.parse(localStorage.getItem('UserGuest'));
    return dispatch => {
        Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
            data: booking,
            headers: { "Authorization": "Bearer " + `${userAdmin ? userAdmin.accessToken : user.accessToken}` }
        }).then((res) => {
            console.log(res);
            console.log(booking);
            
            dispatch({
                type: ActionType.BOOKING_MOVIE
            })
        }).catch((err) => {
            console.log(err);

        })
    }
}
export const actBooking = () => {
    return dispatch => {
        dispatch({
            type: ActionType.ACTION_BOOKING
        })
    }
}

export const searchMovie = (keywordMovie) => {
    // console.log(keyword);
    return dispatch =>
        dispatch({
            type: ActionType.SEARCH_MOVIE,
            keywordMovie
        })
}

export const updateMovie = (movie) => {
    let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
    console.log(movie);
    var frm = new FormData();
    frm.append('file', movie.hinhAnh, movie.hinhAnh.name);
    frm.append('tenphim', movie.tenPhim);
    frm.append('manhom', 'GP07')
    console.log(frm);
    
    return dispatch => {
        Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim',
            data: movie,
            headers: { "Authorization": "Bearer " + `${userAdmin.accessToken}` }
        }).then((res) => {
            // console.log(res);
            dispatch({
                type: ActionType.UPDATE_MOVIE,
                movie
            })
            Swal.fire(
                'Sửa thành công!',
                'success'
            )
            // window.location.reload();
        }).catch((err) => {
            console.log(err);
            // Swal.fire(
            //     'Mã phim trùng!',
            //     'error'
            // )
        })
    }
}

export const editMovie = (movieEditing)=>{
    return {
        type: ActionType.EDIT_MOVIE,
        movieEditing
    }
}

export const uploadImg = (data)=>{
    let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
    let frm = new FormData();
    frm.append('file', data.hinhAnh, data.hinhAnh.name);
    frm.append('tenphim', data.tenPhim);
    frm.append('manhom', 'GP07')
    return dispatch =>{
        Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim',
            data: frm,
            headers: { "Authorization": "Bearer " + `${userAdmin.accessToken}` }
        }).then((res)=>{
            console.log(res.data);
            dispatch({
                type: ActionType.UPLOAD_IMG
            })
        }).catch((err)=>{
            console.log(err);
            
        })
    }
}
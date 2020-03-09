import * as ActionType from '../Constants/actionType';
import Axios from 'axios';
import Swal from 'sweetalert2';

//user
export const actGetListUser = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP07'
        }).then((res) => {
            dispatch({
                type: ActionType.GET_LIST_USER,
                listUser: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const deleteUser = (taiKhoan) => {
    let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
    return dispatch => {
        // console.log(user);
        Axios({
            method: 'DELETE',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            headers: { "Authorization": "Bearer " + `${userAdmin.accessToken}` }
        }).then((res) => {
            // console.log(res.data);
            console.log('xoa thanh cong');
            // window.location.reload();
            dispatch({
                type: ActionType.DELETE_USER,
                taiKhoan: taiKhoan
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const getProfileUser = (taiKhoan) => {
    return dispatch => {
        Axios({
            method: 'POST',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
            data: taiKhoan
        }).then((res) => {
            // console.log(res.data);
            dispatch({
                type: ActionType.GET_PROFILE_USER,
                profileUser: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const signupUser = (user) => {
    return dispatch => {
        Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data: user
        }).then((res) => {
            console.log(res);
            Swal.fire(
                'Đăng ký thành công!',
                'success'
            )
            // window.location.reload();
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const editProfile = (user) => {
    let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
    let userGuest = JSON.parse(localStorage.getItem('UserGuest'));
    return dispatch => {
        Axios({
            method: 'PUT',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            data: user,
            headers: { "Authorization": "Bearer " + `${userAdmin ? userAdmin.accessToken : userGuest.accessToken}` }
        }).then((res) => {
            // console.log(res);
            // console.log('thay doi thong tin thanh cong');
            dispatch({
                type: ActionType.EDIT_PROFILE,
                newProfile: user
            })
            Swal.fire(
                'Thay đổi thông tin thành công!',
                'success'
            )
        }).catch((err) => {
            console.log(err);

        })
    }
}

export const addUser = (user) => {
    let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
    return dispatch => {
        Axios({
            method: 'POST',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
            data: user,
            headers: { "Authorization": "Bearer " + `${userAdmin.accessToken}` }
        }).then((res) => {
            // console.log(res);
            dispatch({
                type: ActionType.ADD_USER,
                user: res.data
            })
            Swal.fire(
                'Thêm thành công!',
                'success'
            )
            // window.location.reload();
        }).catch((err) => {
            console.log(user);

            console.log(err);
            Swal.fire(
                'Tài khoản hoặc email trùng!',
                'error'
            )
        })
    }
}

export const searchUser = (keyword) => {
    // console.log(keyword);
    return dispatch =>
        dispatch({
            type: ActionType.SEARCH_USER,
            keyword
        })
}

export const userEdit = (user) => {
    return dispatch => {
        dispatch({
            type: ActionType.USER_EDIT,
            userEditing: user
        })
    }
}

export const updateUser = (userUpdate)=>{
    let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
    return dispatch =>{
        Axios({
            method: 'PUT',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            data: userUpdate,
            headers: { "Authorization": "Bearer " + userAdmin.accessToken }
        }).then((res)=>{
            dispatch({
                type: ActionType.UPDATE_USER,
                userUpdate
            })
        }).catch((error)=>{
            // console.log(error.response.data);
            
        })
    }
}

export const setAddUserDefault = () => {
    return dispatch => {
        dispatch({
            type: ActionType.SET_ADD_USER_DEFAULT
        })
    }
}

export const sortUser = (valueSort) => {
    // console.log(valueSort);
    return dispatch => {

        dispatch({
            type: ActionType.SORT_USER,
            valueSort
        })
    }
}

export const filterUser = (valueFilter) => {
    return dispatch => {
        dispatch({
            type: ActionType.FILTER_USER,
            valueFilter
        })
    }
}

export const setEditDefault = () => {
    return dispatch => {
        dispatch({
            type: ActionType.SET_EDIT_DEFAULT
        })
    }
}
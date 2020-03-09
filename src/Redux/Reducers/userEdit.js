import * as ActionType from '../Constants/actionType';

let initialState = {
    taiKhoan: '',
    hoTen: '',
    email: '',
    soDt: '',
    matKhau: '',
    maLoaiNguoiDung: 'KhachHang',
    maNhom: 'GP07',
    updated: false,

}

// const userEdit = (state = initialState, action) => {
//     switch (action.type) {
//         case ActionType.USER_EDIT:
//             // console.log(action.userEditing);
//             state = {
//                 taiKhoan: action.userEditing.taiKhoan,
//                 hoTen: action.userEditing.hoTen,
//                 email: action.userEditing.email,
//                 soDt: action.userEditing.soDt,
//                 matKhau: action.userEditing.matKhau,
//                 maLoaiNguoiDung: action.userEditing.maLoaiNguoiDung,
//                 maNhom: 'GP07',
//             }
//             console.log(state);
            
//             return { ...state }
//         case ActionType.UPDATE_USER:
//             console.log(action.userUpdate);
//             state.taiKhoan = action.userUpdate.taiKhoan
//             state.matKhau = action.userUpdate.matKhau
//             state.hoTen = action.userUpdate.hoTen
//             state.email = action.userUpdate.email
//             state.soDt = action.userUpdate.soDt
//             state.maNhom = action.userUpdate.maNhom
//             state.maLoaiNguoiDung = action.userUpdate.maLoaiNguoiDung
//             state.updated = true
//             console.log(state);
            
//             return state;
//         default:
//             return { ...state }
//     }
// }

// export default userEdit;
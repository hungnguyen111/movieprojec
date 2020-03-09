import * as ActionType from '../Constants/actionType';

let initialState = {
    listUser: [],
    statusDelete: false,
    profileUser: '',
    getProfileSuccess: 1,
    listUserSearch: [],
    listUserSort: [],
    listUserFilter: [],
    userEditing: {
        taiKhoan: '',
        hoTen: '',
        email: '',
        soDt: '',
        matKhau: '',
        maLoaiNguoiDung: 'KhachHang',
        maNhom: 'GP07',
    },
    updated: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_USER:
            state.listUser = action.listUser;
            state.updated = true;
            return { ...state }
        case ActionType.DELETE_USER:
            state.statusDelete = 2;
            // console.log(action.newListUser);
            console.log(action.taiKhoan);
            let index = state.listUser.findIndex(item => item.taiKhoan === action.taiKhoan);
            state.listUser.splice(index, 1);
            state.listUser = [...state.listUser];
            // state.listUser = action.newListUser;
            return { ...state }
        case ActionType.GET_PROFILE_USER:
            state.profileUser = action.profileUser;
            state.getProfileSuccess = true;
            return { ...state }
        case ActionType.ADD_USER:
            state.listUser = [action.user, ...state.listUser];
            return { ...state }
        case ActionType.EDIT_PROFILE:
            state.profileUser = {
                ...state.profileUser,
                matKhau: action.newProfile.matKhau,
                hoTen: action.newProfile.hoTen,
                email: action.newProfile.email,
                soDt: action.newProfile.soDt,
                maNhom: action.newProfile.maNhom
            }
            return { ...state }
        case ActionType.SEARCH_USER:
            state.listUserSearch = [...state.listUser];
            if (action.keyword) {
                state.listUserSearch = state.listUserSearch.filter((user) => {
                    return user.taiKhoan.toLowerCase().indexOf(action.keyword.toLowerCase()) !== -1
                })
            }
            return { ...state }
        case ActionType.SET_ADD_USER_DEFAULT:
            state.userEditing = '';
            return { ...state }
        case ActionType.SORT_USER:
            // console.log(action.valueSort);
            state.listUserSort = [...state.listUser];
            if (action.valueSort === 'A to Z') {
                state.listUserSort.sort((a, b) => {
                    let x = a.taiKhoan.toLowerCase();
                    let y = b.taiKhoan.toLowerCase();
                    if (x < y) {
                        return -1;
                    } else if (x > y) {
                        return 1;
                    }
                    return 0;
                })

            } else if (action.valueSort === 'Z to A') {
                state.listUserSort.sort((a, b) => {
                    let x = a.taiKhoan.toLowerCase();
                    let y = b.taiKhoan.toLowerCase();
                    if (x > y) {
                        return -1;
                    } else if (x < y) {
                        return 1;
                    }
                    return 0;
                })
            }
            return { ...state }
        case ActionType.FILTER_USER:
            state.listUserFilter = [...state.listUser]
            if (action.valueFilter === 'QuanTri') {
                state.listUserFilter = state.listUserFilter.filter(user => user.maLoaiNguoiDung === 'QuanTri')
            } else if (action.valueFilter === 'KhachHang') {
                state.listUserFilter = state.listUserFilter.filter(user => user.maLoaiNguoiDung === 'KhachHang')
            }
            return { ...state }
        case ActionType.USER_EDIT:
            // console.log(action.userEditing);
            state.userEditing = {
                taiKhoan: action.userEditing.taiKhoan,
                hoTen: action.userEditing.hoTen,
                email: action.userEditing.email,
                soDt: action.userEditing.soDt,
                matKhau: action.userEditing.matKhau,
                maLoaiNguoiDung: action.userEditing.maLoaiNguoiDung,
                maNhom: 'GP07',
            }
            return { ...state }
        case ActionType.UPDATE_USER:
            console.log(action.userUpdate);
            
            state.userEditing = {
                taiKhoan: action.userUpdate.taiKhoan,
                matKhau: action.userUpdate.matKhau,
                hoTen: action.userUpdate.hoTen,
                email: action.userUpdate.email,
                soDt: action.userUpdate.soDt,
                maNhom: action.userUpdate.maNhom,
                maLoaiNguoiDung: action.userUpdate.maLoaiNguoiDung
            }
            for(let index in state.listUser){
                if(state.listUser[index].taiKhoan === action.userUpdate.taiKhoan ){
                    state.listUser[index] = action.userUpdate;
                    break;
                }
            }
            state.updated = false;
            return { ...state };
        default:
            return { ...state }
    }
}

export default userReducer;
import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import * as actionsUser from '../../Redux/Actions/userAction';


const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('* Field is required!'),
    matKhau: yup.string().required('* Field is required!'),
    hoTen: yup.string().required('* Field is required!'),
    email: yup.string().required('* Field is required!').email('* Email không hợp lệ'),
    soDt: yup.string().required('* Field is required!').matches(/^[0-9]+$/, '* Số điện thoại không hợp lệ'),
    maNhom: yup.string().required('* Field is required!')
})

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            taiKhoan: '',
            hoTen: '',
            email: '',
            soDt: '',
            matKhau: '',
            maLoaiNguoiDung: 'KhachHang',
            maNhom: 'GP07'
        })
    }

    // componentDidMount(){
    //     this.setState({
    //         editUser: true
    //     })
    // }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        if (nextProps && nextProps.infoModal.editUser) {
            let { taiKhoan, hoTen, email, soDt, matKhau, maLoaiNguoiDung, maNhom } = nextProps.userEdit;
            this.setState({
                taiKhoan,
                hoTen,
                email,
                soDt,
                matKhau,
                maLoaiNguoiDung,
                maNhom
            }, () => {
                // console.log(this.state);
            })
        } else if(nextProps && nextProps.infoModal.addUser){
            this.setState({
                taiKhoan:'',
                hoTen:'',
                email:'',
                soDt:'',
                matKhau:'',
                maLoaiNguoiDung:'KhachHang',
                maNhom: 'GP07'
            })
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            // console.log(this.state);

        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        // console.log(this.props.infoModal);
        if(this.props.infoModal.editUser){
            this.props.updateUser(this.state)
        }else if(this.props.infoModal.addUser){
            this.props.addUser(this.state);
        }
        this.props.getListUser();
    }

    render() {
        let { infoModal, userEdit } = this.props;
        // console.log(userEdit);
        // console.log(infoModal.userEditing);
        // console.log(this.state);
        // console.log(infoModal);
        


        return (
            <div className="modal fade" id="modalUser" data-backdrop="static" tabIndex={-1} role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{infoModal.addUser? 'Thêm Người Dùng': 'Sửa Người Dùng'}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Tài Khoản</label>
                                    <input type="text" className="form-control" value={this.state.taiKhoan} name="taiKhoan" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Họ Tên</label>
                                    <input type="text" className="form-control" value={this.state.hoTen} name="hoTen" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Số Điện Thoại</label>
                                    <input type="text" className="form-control" name="soDt" value={this.state.soDt} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Mật Khẩu</label>
                                    <input type="text" className="form-control" name="matKhau" value={this.state.matKhau} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Mã Loại Người Dùng</label>
                                    <select className="form-control" name="maLoaiNguoiDung" value={this.state.maLoaiNguoiDung} onChange={this.handleChange}>
                                        <option>KhachHang</option>
                                        <option>QuanTri</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Mã Nhóm</label>
                                    <select className="form-control" name="maNhom" value={this.state.maNhom} onChange={this.handleChange}>
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
                                    </select>
                                </div>
                                <button type="button" className="btn btn-secondary float-right" data-dismiss="modal">Hủy</button>
                                <button type="submit" className="btn btn-success float-right mr-2">
                                    {infoModal.addUser? 'Thêm người dùng': 'Sửa'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}

const mapStateToProps = state => {
    return {
        userEdit: state.userReducer.userEditing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (user) => {
            dispatch(actionsUser.addUser(user));
        },
        // getUserEditing = () =>{
        //     dispatch(actionsUser.)
        // }
        setAddUserDefault: () => {
            dispatch(actionsUser.setAddUserDefault())
        },
        updateUser: (user)=>{
            dispatch(actionsUser.updateUser(user))
        },
        getListUser: ()=>{
            dispatch(actionsUser.actGetListUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
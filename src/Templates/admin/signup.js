import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/userAction';


const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('* Field is required!'),
    matKhau: yup.string().required('* Field is required!'),
    hoTen: yup.string().required('* Field is required!'),
    email: yup.string().required('* Field is required!').email('* Email không hợp lệ'),
    soDt: yup.string().required('* Field is required!').matches(/^[0-9]+$/, '* Số điện thoại không hợp lệ'),
    maNhom: yup.string().required('* Field is required!')
})

class SignUp extends Component {
    _handleSubmit = (values) => {
        // console.log(values);
        this.props.signup(values)
    }
    render() {
        return (
            <div className="container my-5" id="signup">
                <div className="col-sm-6 mx-auto">
                    <Formik
                        initialValues={{
                            taiKhoan: '',
                            email: '',
                            soDt: '',
                            hoTen: '',
                            matKhau: '',
                            maLoaiNguoiDung: 'KhachHang',
                            maNhom: 'GP01'
                        }}
                        validationSchema={signupUserSchema}
                        onSubmit={this._handleSubmit}
                        render={(formikProps) => (
                            <Form>
                                <div className="form-group">
                                    <label>Tài khoản</label>
                                    <Field type="text" className="form-control" name='taiKhoan' onChange={formikProps.handleChange} />
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
                                    <Field type="password" className="form-control" name='matKhau' onChange={formikProps.handleChange} />
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
                                {/* <div className="form-group">
                                    <label>Loại người dùng</label>
                                    <Field type="text" className="form-control" name='maLoaiNguoiDung' onChange={formikProps.handleChange} />
                                </div> */}
                                <button className="btn btn-success">
                                    Đăng Ký
                                </button>
                                <button className="btn btn-danger ml-3 comeHome">
                                    <Link to="/">Quay lại</Link>
                                </button>
                            </Form>
                        )}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (user)=>{
            dispatch(actions.signupUser(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(SignUp)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../../../Redux/Actions';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('* Field is required!'),
    matKhau: yup.string().required('* Field is required!')
})


class Login extends Component {
    handleSubmit = (values) => {
        this.props.login(values, this.props.history)
    }
    render() {
        return (
            <div className="container my-5" id="admin">
                <div className="col-sm-6 mx-auto">
                    <Formik
                        initialValues={{
                            taiKhoan: '',
                            matKhau: ''
                        }}
                        validationSchema={signupUserSchema}
                        onSubmit={this.handleSubmit}
                        render={(formikProps) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="">Username</label>
                                    <Field type="text" className="form-control" name='taiKhoan' onChange={formikProps.handleChange} />
                                    <ErrorMessage name="taiKhoan" >
                                        {msg => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <Field type="text" className="form-control" name='matKhau' onChange={formikProps.handleChange} />
                                    <ErrorMessage name="matKhau" >
                                        {msg => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <button type="submit" className="btn btn-success">
                                    Đăng Nhập
                                </button>
                                <Link to="/signup">
                                    <button className="btn btn-success mx-3 comeHome">Đăng Ký</button>
                                </Link>
                                <Link to="/">
                                    <button className="btn btn-danger comeHome">Quay lại</button>
                                </Link>
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
        login: (user, history) => {
            dispatch(action.actLogin(user, history));
        }
    }
}

export default connect(null, mapDispatchToProps)(Login);
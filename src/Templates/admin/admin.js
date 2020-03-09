import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../../Redux/Actions';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('* Field is required!'),
    matKhau: yup.string().required('* Field is required!')
})

class Admin extends Component {
    handleSubmit = (values) => {
        this.props.login(values, this.props.history)
    }
    componentDidMount() {
        let userAdmin = JSON.parse(localStorage.getItem('UserAdmin'));
        if (userAdmin) {
            this.props.history.push('/dashboard')
        }
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
                                <button className="ml-2 btn btn-danger comeHome">
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
        login: (user, history) => {
            dispatch(action.actLoginAdmin(user, history));
        }
    }
}

export default connect(null, mapDispatchToProps)(Admin);
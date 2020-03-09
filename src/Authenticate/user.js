import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthUser = ({ Component, path }) => {
    return (
        <Route
            path={path}
            render={(routeProps) => {
                if (localStorage.getItem('UserGuest') || localStorage.getItem('UserAdmin')) {
                    return <Component {...routeProps} />
                } else {
                    Swal.fire(
                        'Bạn chưa đăng nhập, vui lòng đăng nhập!'
                    )
                    return <Redirect to='/login' />;
                }
            }}
        />
    )
}

const AuthAdmin = ({ Component, path }) => {
    return (
        <Route
            path={path}
            render={(routeProps) => {
                if (localStorage.getItem('UserAdmin')) {
                    return <Component {...routeProps} />
                } else {
                    Swal.fire(
                        'Không có quyền truy cập!'
                    )
                    return <Redirect to='/admin' />;
                }
            }}
        />
    )
}

export {AuthUser, AuthAdmin};

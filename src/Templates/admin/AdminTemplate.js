import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Admin from './admin';
import Dashboard from './dashboard';

const AdminLayout = (props) => {
    return <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>

                </ul>

            </div>
        </nav>
        {props.children}
    </Fragment>
}

export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => {
                if (localStorage.getItem('UserAdmin')) {
                    return (
                        <AdminLayout>
                            <Component {...propsComponent} />
                        </AdminLayout>
                    )
                } else {
                    return <Redirect to='/admin' />
                }
            }}
        />
    )
}

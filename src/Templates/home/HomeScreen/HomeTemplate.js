import React, { Component, Fragment } from 'react';
import Home from './index';
import {Route} from 'react-router-dom';


const HomeLayout = (props)=>{
    return <Fragment>
        <Home/>
        {props.children}
    </Fragment>
}

export default function HomeTemplate ({Component, ...props}) {
    return (
        <Route
            {...props}
            render={(propsComponent)=>(
                <HomeLayout>
                    <Component {...propsComponent} />
                </HomeLayout>
            )}
        />
    )
}

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import component 
import Home from './Templates/home/HomeScreen';
import Header from './Layouts/Header';
import DetailMovie from './Templates/home/Detail';
import PageNotFound from './Components/PageNotFound';
import CheckOut from './Templates/home/Checkout/CheckOut';
import HomeTemplate from './Templates/home/HomeScreen/HomeTemplate';
import AdminTemplate from './Templates/admin/AdminTemplate';
import {AuthUser, AuthAdmin} from './Authenticate/user';
import Dashboard from './Templates/admin/dashboard';
// import Dashboard from './Templates/admin/Dashboard1';

import {routesHome, routesAdmin, routesUser} from './routes';
import Admin from './Templates/admin/admin';
import Login from './Templates/home/Login/login';
import Profile from './Templates/home/Profile/profile';


const showMenuHome = (routes)=>{
  if(routes && routes.length > 0){
    return routes.map((item, index)=>{
      return <HomeTemplate key={index} path={item.path} exact={item.exact} component={item.component} />
    })
  }
}

// const showMenuUser = (routes)=>{
//   if(routes && routes.length > 0){
//     return routes.map((item, index)=>{
//       return <CheckOutTemplate key={index} path={item.path} exact={item.exact} component={item.component} />
//     })
//   }
// }

// const showMenuAdmin = (routes)=>{
//   if(routes && routes.length >0 ){
//     return routes.map((item, index)=>{
//       return <AdminTemplate key={index} path={item.path} exact={item.exact} component={item.component} />
//     })
//   }
// }

function App() {
  return (
    <BrowserRouter>

      <Switch>
        {showMenuHome(routesHome)}
        {/* {showMenuUser(routesUser)} */}
        {/* {showMenuAdmin(routesAdmin)} */}
        
        <AuthAdmin path='/dashboard' Component={Dashboard} />

        <AuthUser path='/checkout/:maLichChieu' Component={CheckOut} />
        <AuthUser path='/profile' Component={Profile} />


        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        {/* //page note found  */}
        <Route path='' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

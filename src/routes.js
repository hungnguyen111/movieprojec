// import component 
import Home from './Templates/home/HomeScreen';
import Header from './Layouts/Header';
import DetailMovie from './Templates/home/Detail';
import PageNotFound from './Components/PageNotFound';
import CheckOut from './Templates/home/Checkout/CheckOut';

//admin
import Admin from './Templates/admin/admin'
import SignUp from './Templates/admin/signup';
import Dashboard from './Templates/admin/dashboard';

const routesHome = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/detail/:maPhim',
        exact: false,
        component: DetailMovie
    },
    {
        path: '/signup',
        exact: false,
        component: SignUp
    }
]

const routesUser = [
    {
        path: '/checkout/:maLichChieu',
        exact: false,
        component: CheckOut
    }
]

const routesAdmin = [
    {
        path:'/dashboard',
        exact: false,
        component: Dashboard
    }
]

export {routesHome, routesUser, routesAdmin};
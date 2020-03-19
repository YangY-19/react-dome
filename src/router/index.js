import { lazy } from 'react'
const Home = lazy(() => import ('../contianer/home'))
const Login = lazy(() => import ('../contianer/login'))
const User = lazy(() => import ('../contianer/user'))
const Userinfo = lazy(() => import ( '../contianer/user/userComponent/user-info'))
const Userdetail = lazy(() => import ('../contianer/user/userComponent/user-details'))
const Notfound = lazy(() => import ('../contianer/abnormalPage/404'))
// v20200317154737-alpine-nginx-1142-hotfix
const routers = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        exact: true,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        exact: true,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        meta: {
            title: '人物'
        },
        routers: [
            {
                path: '/userinfo',
                name: 'userinfo',
                component: Userinfo,
                meta: {
                    title: '用户信息'
                }
            },
            {
                path: '/userdetails/:id',
                name: 'userdetails',
                component: Userdetail,
                meta: {
                    title: '用户详情'
                }
            }
        ]
    },
    {
        path: '*',
        name: '404',
        component: Notfound,
        meta: {
            title: '404'
        }
    },
]

export default routers
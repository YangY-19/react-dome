import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
class User extends Component {
    constructor() {
        super()
        this.state = {
            info: [
                {
                    key: 1,
                    name: '我是1'
                },
                {
                    key: 2,
                    name: '我是2'
                },
                {
                    key: 3,
                    name: '我是3'
                },
                {
                    key: 4,
                    name: '我是4'
                },
            ]
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { info } = this.state
        const { routers } = this.props
        return (
            <Router>
               <div>
                <Link to='/userinfo'>用户信息</Link>
                {
                    info.map(item => {
                        return (
                            <Link key={item.key} to={`/userdetails/${item.key}`}>{item.name}</Link>
                        )
                    })
                }
                </div>
               
                {
                    routers.map(router => {
                        return (
                            <Route exact path={router.path} component={router.component}></Route>
                        )
                    })
                }
            </Router>
        )
    }
}

export default User

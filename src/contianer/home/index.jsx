import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getHotNews } from '../../service/login'
class Home extends Component {
    constructor() {
        super()
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        getHotNews().then(res => {
            const result = res.data
            if (result.code === 200) {
                this.setState({
                    news: result.data
                })
            }
        })
    }

    render() {
        const { news } = this.state
        return (
            <div>
                <Link to='/home'>首页</Link>
                <br/>
                <br/>
                <br/>
                <Link to='/user'>人物</Link>
                <br/>
                <br/>
                <br/>

                {
                    news.map(item => {
                        return (
                            <div key={item.key}>{item.title}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home

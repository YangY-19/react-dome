import React, { Component } from 'react'
class Userinfo extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
               userInfo
            </div>
        )
    }
}

export default Userinfo

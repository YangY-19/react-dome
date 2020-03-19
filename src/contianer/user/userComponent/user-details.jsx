import React, { Component } from 'react'
class Userdetail extends Component {
    constructor() {
        super()
        this.state = {
            id: null
        }
    }

    componentDidMount() {
        this.setState({
            id: this.props.match.params.id
        })
    }

    render() {
        const { id } = this.state
        debugger
        return (
            <div>
              {id}
            </div>
        )
    }
}

export default Userdetail

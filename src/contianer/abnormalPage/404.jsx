import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Result, Button } from "antd"
class Notfound extends Component {
    render() {
        return (
            <Result
                status="404"
                title="404"
                className="mt100"
                subTitle="不好意思, 该页面不存在,请查看路径."
                extra={
                    <Button type="primary">
                        <Link to="/home">去首页</Link>
                    </Button>
                }
            />
        )
    }
}

export default Notfound

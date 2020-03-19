import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd'
import { login } from '../../service/login'
import './index.scss'
class Login extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    onFinish = (values) => {
        login({
            account: values.username,
            secret: values.password,
            type: 101
        }).then(res => {
            debugger
            if (res.status === 200) {
                const token = res.data.token
                localStorage.setItem('token', token)
                message.success('登录成功！')
                this.props.history.push('/home')
            }
        })
        console.log('1')
        const a = 1

        if (a === '1') return 1
    }

    render() {
        const layout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 16 },
        }
        const tailLayout = {
            wrapperCol: { offset: 3, span: 16 },
        }
        return (
            <div className='login'>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" className="btn">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Login

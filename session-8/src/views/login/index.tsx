/**
 *Created by 夜雪暮歌 on 2021/3/28
 **/
import React, {Component} from 'react'
import {Form, Input, Button, message} from 'antd';
import {LockOutlined} from '@ant-design/icons';
import {Redirect} from 'react-router-dom'
import axios from "axios"
import qs from 'qs'
import './style.css'

interface FormValues {
    password: string
}

export default class Login extends Component {

    state = {
        isLogin: false
    }

    onFinish = async (values: FormValues) => {
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
        const data = qs.stringify({ password: values.password })
        const { data: res } = await axios.post('/api/login', data, { headers })
        if (res.success) {
            this.setState({ isLogin: res?.data })
        } else {
            message.error(res.errMsg)
        }
    }

    async componentDidMount() {
        const { data: res } = await axios.get('/api/isLogin')
        if (res?.data) {
            this.setState({ isLogin: res?.data })
        }
    }

    render() {
        const { isLogin } = this.state
        return (isLogin
                ? <Redirect to="/"/>
                : <div className="page-login">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
        )
    }
}


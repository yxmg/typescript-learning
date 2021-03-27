import React from 'react';
import './login.css'

import {Form, Input, Button} from 'antd';
import {LockOutlined} from '@ant-design/icons';

const NormalLoginForm = () => {
    const onFinish = (values: string) => {
        console.log('Received values of form: ', values);
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
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
    )
}

function App() {
    return (
        <div className="login-page">
            <NormalLoginForm/>
        </div>
    );
}

export default App;

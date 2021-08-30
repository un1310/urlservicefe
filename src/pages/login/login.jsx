import React, {useState, useEffect} from 'react'
import "antd/dist/antd.css";
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';
import { authenticationService } from '../../_services/authentication.service';
import { notify } from '../../utils/util';

const login = (props) => {
    const [form] = Form.useForm();
    const [userDetails, setUserDetails] = useState({
        userName: "",
        password: ""
    })

    const onSubmit = () => {
        form.validateFields().then((values) => {
            setUserDetails(values);
            authenticationService.login(values).then(response => {
                if (response && response.jwtToken) {
                    sessionStorage.setItem('currentUserToken', response.jwtToken);
                    notify({
                        message: "logged in successfully"
                    });
                    setTimeout(() => props.history.push("/input"), 1000);
                }
            })
        })
    }

    return (
        <div id="login-container">
        <Form form={form} name="normal_login"
            className="login-form" initialValues={userDetails} onFinish={()=> onSubmit()}>
            <Typography className='login-form-title'>Login to continue</Typography>
            <Form.Item
                name="userName"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
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

export default login

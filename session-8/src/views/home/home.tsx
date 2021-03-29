import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Button} from 'antd'
import './style.css'


export default class Home extends Component {
    state = {
        isLogin: false
    }

    async componentDidMount() {
        const { data: res } = await axios.get('/api/isLogin')
        if (res?.data) {
            this.setState({ isLogin: res?.data })
        }
    }

    render() {
        const { isLogin } = this.state
        if (isLogin) {
            return (
                <div className="page-home">
                    <Button type="primary">爬取</Button>
                    <Button type="primary">展示</Button>
                    <Button>退出</Button>
                </div>
            )
        } else {
            return <Redirect to="/login"/>
        }
    }
}

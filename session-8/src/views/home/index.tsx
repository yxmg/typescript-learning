import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Button} from 'antd'
import './style.css'


export default class Home extends Component {
    state = {
        isLogin: true,
        loaded: false
    }

    handleLogout = async () => {
        const { data: res } = await axios.get('/api/logout')
        this.setState({ isLogin: !res?.data })
    }

    async componentDidMount() {
        const { data: res } = await axios.get('/api/isLogin')
        this.setState({ isLogin: res?.data, loaded: true })
    }

    render() {
        const { isLogin, loaded } = this.state
        if (isLogin) {
            // 这个设计.....，感觉应该编程式调用重定向的
            if (loaded) {
                return (
                    <div className="page-home">
                        <Button type="primary">爬取</Button>
                        <Button type="primary">展示</Button>
                        <Button onClick={this.handleLogout}>退出</Button>
                    </div>
                )
            } else {
                return (<div/>)
            }
        } else {
            return <Redirect to="/login"/>
        }
    }
}

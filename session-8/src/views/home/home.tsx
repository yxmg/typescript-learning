import React, {Component} from 'react'
import {Button} from 'antd'
import './style.css'

export default class Home extends Component {
    render() {
        return (
            <div className="page-home">
                <Button type="primary">爬取</Button>
                <Button type="primary">展示</Button>
                <Button>退出</Button>
            </div>
        )
    }
}

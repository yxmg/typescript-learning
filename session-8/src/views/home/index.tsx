import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Button, message} from 'antd'
import echarts from 'echarts'
import ReactECharts from 'echarts-for-react'
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

    handleSpider = async () => {
        const { data: res } = await axios.get('/api/spider')
        if (res.success) {
            message.success('爬取成功')
        } else {
            message.error(res.errMsg)
        }
    }

    getOption = (): echarts.EChartsOption => {
        return {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
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
                        <div className="button-group">
                            <Button type="primary" onClick={this.handleSpider}>爬取</Button>
                            <Button onClick={this.handleLogout}>退出</Button>
                        </div>
                        <div className="chart">
                            <ReactECharts option={this.getOption()}/>
                        </div>
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

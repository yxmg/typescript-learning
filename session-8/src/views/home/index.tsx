import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Button, message} from 'antd'
import echarts from 'echarts'
import ReactECharts from 'echarts-for-react'
import './style.css'

interface GoodsItem {
    title: string,
    imgUrl?: string,
    url?: string,
    price: string,
    desc: string,
    platform: string
}

interface Data {
    [key: string]: GoodsItem[]
}

interface State {
    isLogin: boolean,
    loaded: boolean,
    data: Data
}

export default class Home extends Component {
    state: State = {
        isLogin: true,
        loaded: false,
        data: {}
    }

    handleLogout = async () => {
        const { data: res } = await axios.get('/api/logout')
        this.setState({ isLogin: !res?.data })
    }

    handleSpider = async () => {
        const { data: res } = await axios.get('/api/spider')
        if (res.success) {
            message.success('爬取成功')
            // FIXME: 写入文件需要时间
            setTimeout(async () => {
                const { data: res } = await axios.get('/api/showData')
                res.success ? this.setState({ data: res.data }) : message.error(res.errMsg)
            }, 1000)
        } else {
            message.error(res.errMsg)
        }
    }

    getOption = (): echarts.EChartsOption => {
        const { data } = this.state
        const platforms: string[] = []
        const times: string[] = []
        const tempData: { [key: string]: number[] } = {}
        const series: echarts.SeriesOption[] = []
        let index = 0
        for (let time in data) {
            times.push(time)
            const goodsList = data[time]
            goodsList.forEach((innerItem) => {
                if (!innerItem.platform) {
                    return
                }
                if (!platforms.includes(innerItem.platform)) {
                    platforms.push(innerItem.platform)
                    tempData[innerItem.platform] = [1]
                }

                tempData[innerItem.platform][index]
                    ? tempData[innerItem.platform][index]++
                    : (tempData[innerItem.platform][index] = 1)

            })
            index++
        }
        for (let key in tempData) {
            series.push({ name: key, type: 'line', data: tempData[key].filter(Boolean) })
        }
        return {
            title: { text: '什么值得买首页平台统计' },
            tooltip: { trigger: 'axis' },
            legend: { data: platforms },
            grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
            toolbox: { feature: { saveAsImage: {} } },
            xAxis: { type: 'category', boundaryGap: false, data: times },
            yAxis: { type: 'value' },
            series: series
        }
    }

    async componentDidMount() {
        const { data: res } = await axios.get('/api/isLogin')
        this.setState({ isLogin: res?.data })
        const { data: dataRes } = await axios.get('/api/showData')
        res.success ? this.setState({ data: dataRes.data, loaded: true }) : message.error(dataRes.errMsg)
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

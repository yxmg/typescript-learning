/**
 *Created by 夜雪暮歌 on 2021/3/22
 **/
import express from 'express'
// import router from "./router";
import bodyParser from 'body-parser'
import {Request, Response, NextFunction} from 'express'
import cookieSession from 'cookie-session'
import './controller/LoginController'
import './controller/SpiderController'
import {router} from './controller/decorator'

// 无法通过extends给Request新增属性
// interface customRequest extends Request {
//     author: string
// }

// 初始化
const app = express()
// 使用bodyParser处理表单提交
app.use(bodyParser.urlencoded({ extended: false }))
// 自定义中间件，给request添加属性
app.use((req: Request, res: Response, next: NextFunction) => {
    req.author = 'yxmg'
    next()
})
// 处理cookie
app.use(cookieSession({ name: 'session', keys: ['yxmg'], maxAge: 24 * 60 * 60 * 1000 /* 24 hours*/ }))
// 封装接口router
app.use(router)
// 服务监听
app.listen(7001, () => {
    console.log('server is running')
})

/**
 *Created by 夜雪暮歌 on 2021/3/22
 **/
import fs from 'fs'
import path from 'path'
import {Router, Request, Response, NextFunction} from 'express'
import SmzdmAnalyzer from "./SmzdmAnalyzer";
import Spider from './spider'
import {getJsonResponse} from "./utils";

const router = Router()
const DATA_PATH = path.resolve(__dirname, '../data/smzdm.json')

// 只能重写外部定义的类型属性，不能新增(这里body已存在)
interface bodyRequest extends Request {
    body: {
        [key: string]: string | undefined
    }
}

// 鉴权中间件
const checkLogin = (req: Request, res: Response, next: NextFunction) => {
    const isLogin = req.session ? req.session.login : false
    if (isLogin) {
        next()
    } else {
        res.json(getJsonResponse(false, '未授权，请先登录'))
    }
}

router.get('/', (req: Request, res: Response) => {
    const isLogin = req.session ? req.session.login : false
    if (isLogin) {
        res.send(`<html><body><a href="/spider">爬取数据</a><br/><a href="/showData">已爬取数据</a><br/><a href="/logout">退出登录</a></body></html>`)
    } else {
        res.send(`<html><body><form action="/login" method="post"><input type="password" name="password"><button>登录</button></form></body></html>`)
    }
})

router.post('/login', (req: bodyRequest, res: Response) => {
    const isLogin = req.session ? req.session.login : false
    if (isLogin) {
        res.redirect('/')
    } else {
        const password = req.body.password
        if (password === '123' && req.session) {
            req.session.login = true
            res.json(getJsonResponse(true))
        } else {
            res.json(getJsonResponse(false, `Wrong password by ${req.author}`))
        }
    }

})

router.get('/logout', (req: Request, res: Response) => {
    if (req.session) {
        req.session.login = false
    }
    res.json(getJsonResponse(true))
})

router.get('/spider', checkLogin, (req: Request, res: Response) => {
    new Spider('https://www.smzdm.com/', new SmzdmAnalyzer(), DATA_PATH)
    res.json(getJsonResponse(true))
})

router.get('/showData', checkLogin, (req: Request, res: Response) => {
    try {
        const result = fs.readFileSync(DATA_PATH, 'utf8')
        res.json(getJsonResponse(JSON.parse(result)))
    } catch (e) {
        res.json(getJsonResponse(false, '获取数据异常，请先爬取数据'))
    }
})

export default router

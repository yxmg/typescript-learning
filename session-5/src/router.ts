/**
 *Created by 夜雪暮歌 on 2021/3/22
 **/
import {Router, Request, Response} from 'express'
import SmzdmAnalyzer from "./SmzdmAnalyzer";
import Spider from './spider'
import fs from 'fs'
import path from 'path'

const DATA_PATH = path.resolve(__dirname, '../data/smzdm.json')

const router = Router()

// 只能重写外部定义的类型属性，不能新增(这里body已存在)
interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined
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

router.post('/login', (req: RequestWithBody, res: Response) => {
    const isLogin = req.session ? req.session.login : false
    if (isLogin) {
        res.redirect('/')
    } else {
        const password = req.body.password
        if (password === '123' && req.session) {
            req.session.login = true
            res.redirect('/')
        } else {
            res.send(`<html><body><h1>Wrong password by ${req.author}!</h1><a href="/">重新登录</a></body></html>`)
        }
    }

})

router.get('/logout', (req: Request, res: Response) => {
    if (req.session) {
        req.session.login = false
    }
    res.redirect('/')
})

router.get('/spider', (req: Request, res: Response) => {
    const isLogin = req.session ? req.session.login : false
    if (isLogin) {
        new Spider('https://www.smzdm.com/', new SmzdmAnalyzer(), DATA_PATH)
        res.send(`<html><body><h1>${new Date().toLocaleString()}，爬取成功！</h1><a href="/">返回首页</a></body></html>`)
    } else {
        res.send(`<html><body><a href="/">请先登录</a></body></html>`)
    }
})

router.get('/showData', (req: Request, res: Response) => {
    try {
        const isLogin = req.session ? req.session.login : false
        if (isLogin) {
            const result = fs.readFileSync(DATA_PATH, 'utf8')
            res.send(JSON.parse(result))
        } else {
            res.send(`<html><body><a href="/">请先登录</a></body></html>`)
        }
    } catch (e) {
        res.send('获取数据异常，请先爬取数据')
    }
})

export default router

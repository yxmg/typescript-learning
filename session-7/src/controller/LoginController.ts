/**
 *Created by 夜雪暮歌 on 2021/3/26
 **/
import 'reflect-metadata'
import {Request, Response} from 'express'
import {getJsonResponse} from "../utils"
import {controller, get} from './decorator'


interface BodyRequest extends Request {
    body: { [key: string]: string | undefined }
}


@controller
class LoginController {
    @get('/login')
    login(req: BodyRequest, res: Response) {
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
    }

    @get('/')
    home(req: Request, res: Response) {
        const isLogin = req.session ? req.session.login : false
        if (isLogin) {
            res.send(`<html><body><a href="/spider">爬取数据</a><br/><a href="/showData">已爬取数据</a><br/><a href="/logout">退出登录</a></body></html>`)
        } else {
            res.send(`<html><body><form action="/login" method="post"><input type="password" name="password"><button>登录</button></form></body></html>`)
        }
    }
}

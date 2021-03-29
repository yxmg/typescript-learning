/**
 *Created by 夜雪暮歌 on 2021/3/26
 **/
import {Request, Response} from 'express'
import {getJsonResponse} from "../utils"
import {controller, get, post} from '../decorator'


interface BodyRequest extends Request {
    body: { [key: string]: string | undefined }
}


@controller('/api')
class LoginController {
    static isLogin(req: Request) {
        return !!(req.session ? req.session.login : false)
    }

    @get('/isLogin')
    isLogin(req: Request, res: Response) {
        const isLogin = LoginController.isLogin(req)
        res.json(getJsonResponse(isLogin))
    }

    @post('/login')
    login(req: BodyRequest, res: Response) {
        const isLogin = LoginController.isLogin(req)
        const password = req.body.password
        if (isLogin) {
            res.json(getJsonResponse(true))
        } else if (password === '123' && req.session) {
            req.session.login = true
            res.json(getJsonResponse(true))
        } else {
            res.json(getJsonResponse(false, `Wrong password by ${req.author}`))
        }
    }

    @get('/logout')
    logout(req: Request, res: Response) {
        if (req.session) {
            req.session.login = false
        }
        res.json(getJsonResponse(true))
    }
}

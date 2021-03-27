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

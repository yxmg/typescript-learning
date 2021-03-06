/**
 *Created by 夜雪暮歌 on 2021/3/27
 **/
import fs from "fs";
import path from 'path'
import Spider from '../spider';
import SmzdmAnalyzer from '../SmzdmAnalyzer';
import {NextFunction, Request, Response} from 'express'
import {getJsonResponse} from '../utils'
import {get, use, controller} from '../decorator'


const DATA_PATH = path.resolve(__dirname, '../../data/smzdm.json')

// 鉴权中间件
const checkLogin = (req: Request, res: Response, next: NextFunction) => {
    const isLogin = req.session ? req.session.login : false
    console.log('checkLogin')
    if (isLogin) {
        next()
    } else {
        res.json(getJsonResponse(false, '未授权，请先登录'))
    }
}
const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('test middleware')
    next()
}

@controller('/api')
class SpiderController {
    @get('/spider')
    @use(checkLogin) // 先收集的后执行
    @use(testMiddleware)
    spider(req: Request, res: Response) {
        new Spider('https://www.smzdm.com/', new SmzdmAnalyzer(), DATA_PATH)
        res.json(getJsonResponse(true))
    }

    @get('/showData')
    @use([checkLogin, testMiddleware])  // 按数组顺序执行
    showData(req: Request, res: Response) {
        try {
            const result = fs.readFileSync(DATA_PATH, 'utf8')
            res.json(getJsonResponse(JSON.parse(result)))
        } catch (e) {
            res.json(getJsonResponse(false, '获取数据异常，请先爬取数据'))
        }
    }
}

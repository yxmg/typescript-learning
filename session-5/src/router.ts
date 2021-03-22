/**
 *Created by 夜雪暮歌 on 2021/3/22
 **/
import {Router, Request, Response} from 'express'

const router = Router()

// 只能重写外部定义的类型属性，不能新增(这里body已存在)
interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined
    }
}

router.get('/', (req: Request, res: Response) => {
    res.send(`<html><body><form action="/spider" method="post"><input type="password" name="password"><button>提交</button></form></body></html>`)
})

router.post('/spider', (req: RequestWithBody, res: Response) => {
    const password = req.body.password
    if (password === '123') {
        res.send(`Correct password by ${req.author}!`)
    } else {
        res.send(`Wrong password by ${req.author}!`)
    }
})

export default router

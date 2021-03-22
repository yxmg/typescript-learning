/**
 *Created by 夜雪暮歌 on 2021/3/22
 **/
import {Router, Request, Response} from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send(`<html><body><form action="/spider" method="post"><input type="password" name="password"><button>提交</button></form></body></html>`)
})

router.post('/spider', (req: Request, res: Response) => {
    const password = req.body.password
    if (password === '123') {
        res.send('Correct password!')
    } else {
        res.send('Wrong password!')
    }
})

export default router

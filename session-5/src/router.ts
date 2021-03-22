/**
 *Created by 夜雪暮歌 on 2021/3/22
 **/
import {Router, Request, Response} from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

router.get('/spider', (req: Request, res: Response) => {
    res.send('Goodbye World!')
})

export default router

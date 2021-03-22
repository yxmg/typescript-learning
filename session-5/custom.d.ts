/**
 *Created by 夜雪暮歌 on 2021/3/22
 **/
// 中间件增加属性
declare namespace Express {
    interface Request {
        author: string
    }
}

/**
 *Created by 夜雪暮歌 on 2021/3/22
 **/
import express from 'express'
import router from "./router";

const app = express()
app.use(router)
app.listen(7001, () => {
    console.log('server is running')
})

/**
 *Created by 夜雪暮歌 on 2021/3/22
 **/
import express from 'express'
import router from "./router";
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)
app.listen(7001, () => {
    console.log('server is running')
})

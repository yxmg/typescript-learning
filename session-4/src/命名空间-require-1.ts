/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/
import {Header, Content, Footer} from './命名空间-require-2'

export default class Page {
    constructor() {
        new Header()
        new Content()
        new Footer()
    }
}
// parcel打包
new Page()

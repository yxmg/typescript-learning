/*
 * @Description: 爬虫
 * @Author: 管铭钊
 * @Date: 2021/3/17
 */
import superAgent from 'superagent'

class Spider {
    private rawHtml = ''

    private async getRawHtml() {
        const result = await superAgent.get(url)
        this.rawHtml = result.text
        console.log(this.rawHtml, "this.rawHtml")
    }

    constructor(url: string) {
        this.getRawHtml()
    }
}

const url = 'https://www.imooc.com/'
const moocSpider = new Spider(url)

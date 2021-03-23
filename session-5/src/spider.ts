/*
 * @Description: 爬虫
 * @Author: 管铭钊
 * @Date: 2021/3/17
 */
import fs from 'fs'
import superAgent from 'superagent'
import path from 'path'
import {dateFormat} from './utils'

export interface Analyzer {
    analysis: (html: string, filePath?: string) => string
}

export default class Spider {
    private filePath = path.resolve(__dirname, `./${dateFormat(new Date(), 'yyyyMMdd_hhmmss')}.json`)

    private async getRawHtml() {
        // FIXME: 什么值得买请求时需要带上上一次cookie，否则永远会返回相同内容
        const smzdmCookie = '__ckguid=OGPkK9S8rqrgPtW7V9fP; device_id=213070643316163235225355428b9aa0f9a7900e2931bc9fec99bdb737; homepage_sug=e; r_sort_type=score; __jsluid_s=792b1f3dce9c0c472dadbaca677d14f3'
        const result = await superAgent.get(this.url)
            .set({ cookie: smzdmCookie })
        return result.text
    }

    private writeFile(fileContent: string) {
        fs.writeFileSync(this.filePath, fileContent)
    }

    private async initSpiderProcess() {
        const html = await this.getRawHtml()
        const fileContent = this.analyzer.analysis(html, this.filePath)
        this.writeFile(fileContent)
    }

    constructor(private url: string, private analyzer: Analyzer, filePath?: string) {
        if (filePath) {
            this.filePath = filePath
        }
        this.initSpiderProcess()
    }
}



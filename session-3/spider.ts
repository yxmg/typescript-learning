/*
 * @Description: 爬虫
 * @Author: 管铭钊
 * @Date: 2021/3/17
 */
import fs from 'fs'
import superAgent from 'superagent'
import path from 'path'
import ImoocAnalyzer from "./ImoocAnalyzer"
import JuejinAnalyzer from './JuejinAnalyzer'
import {dateFormat} from './utils'

export interface Analyzer {
    analysis: (html: string, filePath?: string) => string
}


class Spider {
    private filePath = path.resolve(__dirname, `./${dateFormat(new Date(), 'yyyyMMdd_hhmmss')}.json`)

    private async getRawHtml() {
        const result = await superAgent.get(this.url)
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

const filePath = path.resolve(__dirname, './spider.json')
const url = 'https://www.imooc.com/'
const analyzer = new ImoocAnalyzer()
new Spider(url, analyzer, filePath)

// 动态网页需要执行JS或爬取接口，分析接口数据
new Spider('https://juejin.cn/', new JuejinAnalyzer())

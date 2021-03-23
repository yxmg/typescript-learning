/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/

import fs from "fs";
import cheerio from "cheerio";
import {Analyzer} from "./spider"

interface Sale {
    title: string,
    imgUrl?: string,
    url?: string,
    price: string,
    desc: string
}

interface SpiderData {
    [prop: string]: Sale[]
}


export default class SmzdmAnalyzer implements Analyzer {
    private spiderData: SpiderData = {}

    private generateFileContent(saleInfo: Sale[], filePath?: string) {
        if (filePath && fs.existsSync(filePath)) {
            this.spiderData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        }
        this.spiderData[new Date().toLocaleString()] = saleInfo
        return JSON.stringify(this.spiderData, null, 2)
    }

    // 获取值得买精选
    private getSaleInfo(html: string): Sale[] {
        const $ = cheerio.load(html);
        const saleInfoList = $('#feed-main-list .feed-haojia')
        const result: Sale[] = []
        saleInfoList.each((index, ele) => {
            const imgUrl = $(ele).find('.z-feed-img img').eq(0).attr('src')
            const url = $(ele).find('.z-feed-img a').eq(0).attr('href')
            const title = $(ele).find('.feed-block-title').eq(0).text().trim()
            const price = $(ele).find('.z-highlight a').eq(0).text().trim()
            const desc = $(ele).find('.feed-block-descripe').eq(0).text().trim()
            result.push({ title, imgUrl, url, price, desc })
        })
        return result
    }

    public analysis(html: string, filePath?: string) {
        const saleInfo = this.getSaleInfo(html)
        return this.generateFileContent(saleInfo, filePath)
    }
}

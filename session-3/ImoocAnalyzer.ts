/**
 *Created by 夜雪暮歌 on 2021/3/18
 **/

import fs from "fs";
import cheerio from "cheerio";
import {Analyzer} from "./spider"

interface Course {
    title: string,
    difficulty: string,
    signUpCount: string,
    price: string,
    originPrice: string
}

interface CourseResult {
    type: string,
    list: Course[]
}

interface SpiderData {
    [propName: string]: CourseResult[]
}

export default class ImoocAnalyzer implements Analyzer {
    private spiderData: SpiderData = {}

    private generateFileContent(courseInfo: CourseResult[], filePath?: string) {
        if (filePath && fs.existsSync(filePath)) {
            this.spiderData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        }
        this.spiderData[new Date().toLocaleString()] = courseInfo
        return JSON.stringify(this.spiderData, null, 2)
    }

    private getCourseInfo(html: string) {
        const $ = cheerio.load(html);
        const typeElList = $('.new-course .list')
        const result: CourseResult[] = []
        typeElList.each((index, type) => {
            const courseElList = $(type).find('.item')
            const courseList: Course[] = []
            courseElList.each((index, course) => {
                const title = $(course).find('.title').eq(0).text()
                const [difficulty, signUpText] =
                    $(course).find('.difficulty').eq(0).text().split(' · ')
                const price = $(course).find('.price').eq(0).text()
                const originPrice = $(course).find('.origin-price').eq(0).text()
                const signUpCount = signUpText.replace(/[^\d]+/g, '')
                courseList.push({ title, difficulty, price, originPrice, signUpCount })
            })
            result.push({ type: $(type).data('type'), list: courseList })
        })
        return result
    }

    public analysis(html: string, filePath?: string) {
        const courseInfo = this.getCourseInfo(html)
        return this.generateFileContent(courseInfo, filePath)
    }
}

/*
 * @Description: 爬虫
 * @Author: 管铭钊
 * @Date: 2021/3/17
 */
import fs from 'fs'
import path from 'path'
import superAgent from 'superagent'
import cheerio from 'cheerio'

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

class Spider {
    private spiderData: SpiderData = {}
    private DATA_PATH = path.resolve(__dirname, './spider.json')
    private URL = 'https://www.imooc.com/'

    getCourseInfo(html: string) {
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

    async getRawHtml() {
        const result = await superAgent.get(this.URL)
        return result.text
    }

    generateFileContent(courseInfo: CourseResult[]) {
        if (fs.existsSync(this.DATA_PATH)) {
            this.spiderData = JSON.parse(fs.readFileSync(this.DATA_PATH, 'utf-8'))
        }
        this.spiderData[new Date().toLocaleString()] = courseInfo
        return this.spiderData
    }

    writeFile(spiderData: SpiderData) {
        fs.writeFileSync(this.DATA_PATH, JSON.stringify(spiderData, null, 2))
    }

    async initSpiderProcess() {
        const html = await this.getRawHtml()
        const courseInfo = this.getCourseInfo(html)
        const spiderData = this.generateFileContent(courseInfo)
        this.writeFile(spiderData)
    }

    constructor() {
        this.initSpiderProcess()
    }
}


const moocSpider = new Spider()

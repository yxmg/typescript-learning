/*
 * @Description: 爬虫
 * @Author: 管铭钊
 * @Date: 2021/3/17
 */
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

class Spider {
    private async getCourseInfo() {
        const { text: html } = await this.getRawHtml()
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
        console.log(JSON.stringify(result), "JSON.stringify(result)")
    }

    private getRawHtml() {
        return superAgent.get(url)
    }

    constructor(url: string) {
        this.getCourseInfo()
    }
}

const url = 'https://www.imooc.com/'
const moocSpider = new Spider(url)

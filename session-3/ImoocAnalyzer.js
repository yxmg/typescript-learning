"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/18
 **/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var cheerio_1 = __importDefault(require("cheerio"));
var ImoocAnalyzer = /** @class */ (function () {
    function ImoocAnalyzer() {
        this.spiderData = {};
    }
    ImoocAnalyzer.prototype.generateFileContent = function (courseInfo, filePath) {
        if (filePath && fs_1.default.existsSync(filePath)) {
            this.spiderData = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        this.spiderData[new Date().toLocaleString()] = courseInfo;
        return JSON.stringify(this.spiderData, null, 2);
    };
    ImoocAnalyzer.prototype.getCourseInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var typeElList = $('.new-course .list');
        var result = [];
        typeElList.each(function (index, type) {
            var courseElList = $(type).find('.item');
            var courseList = [];
            courseElList.each(function (index, course) {
                var title = $(course).find('.title').eq(0).text();
                var _a = $(course).find('.difficulty').eq(0).text().split(' · '), difficulty = _a[0], signUpText = _a[1];
                var price = $(course).find('.price').eq(0).text();
                var originPrice = $(course).find('.origin-price').eq(0).text();
                var signUpCount = signUpText.replace(/[^\d]+/g, '');
                courseList.push({ title: title, difficulty: difficulty, price: price, originPrice: originPrice, signUpCount: signUpCount });
            });
            result.push({ type: $(type).data('type'), list: courseList });
        });
        return result;
    };
    ImoocAnalyzer.prototype.analysis = function (html, filePath) {
        var courseInfo = this.getCourseInfo(html);
        return this.generateFileContent(courseInfo, filePath);
    };
    return ImoocAnalyzer;
}());
exports.default = ImoocAnalyzer;

"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var cheerio_1 = __importDefault(require("cheerio"));
var SmzdmAnalyzer = /** @class */ (function () {
    function SmzdmAnalyzer() {
        this.spiderData = {};
    }
    SmzdmAnalyzer.prototype.generateFileContent = function (saleInfo, filePath) {
        if (filePath && fs_1.default.existsSync(filePath)) {
            this.spiderData = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        this.spiderData[new Date().toLocaleString()] = saleInfo;
        return JSON.stringify(this.spiderData, null, 2);
    };
    // 获取值得买精选
    SmzdmAnalyzer.prototype.getSaleInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var saleInfoList = $('#feed-main-list .feed-haojia');
        var result = [];
        saleInfoList.each(function (index, ele) {
            var imgUrl = $(ele).find('.z-feed-img img').eq(0).attr('src');
            var url = $(ele).find('.z-feed-img a').eq(0).attr('href');
            var title = $(ele).find('.feed-block-title').eq(0).text().trim();
            var price = $(ele).find('.z-highlight a').eq(0).text().trim();
            var desc = $(ele).find('.feed-block-descripe').eq(0).text().trim();
            result.push({ title: title, imgUrl: imgUrl, url: url, price: price, desc: desc });
        });
        return result;
    };
    SmzdmAnalyzer.prototype.analysis = function (html, filePath) {
        var saleInfo = this.getSaleInfo(html);
        return this.generateFileContent(saleInfo, filePath);
    };
    return SmzdmAnalyzer;
}());
exports.default = SmzdmAnalyzer;

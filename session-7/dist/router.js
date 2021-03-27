"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *Created by 夜雪暮歌 on 2021/3/22
 **/
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var express_1 = require("express");
var SmzdmAnalyzer_1 = __importDefault(require("./SmzdmAnalyzer"));
var spider_1 = __importDefault(require("./spider"));
var utils_1 = require("./utils");
var router = express_1.Router();
var DATA_PATH = path_1.default.resolve(__dirname, '../data/smzdm.json');
// 鉴权中间件
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        next();
    }
    else {
        res.json(utils_1.getJsonResponse(false, '未授权，请先登录'));
    }
};
router.get('/spider', checkLogin, function (req, res) {
    new spider_1.default('https://www.smzdm.com/', new SmzdmAnalyzer_1.default(), DATA_PATH);
    res.json(utils_1.getJsonResponse(true));
});
router.get('/showData', checkLogin, function (req, res) {
    try {
        var result = fs_1.default.readFileSync(DATA_PATH, 'utf8');
        res.json(utils_1.getJsonResponse(JSON.parse(result)));
    }
    catch (e) {
        res.json(utils_1.getJsonResponse(false, '获取数据异常，请先爬取数据'));
    }
});
exports.default = router;

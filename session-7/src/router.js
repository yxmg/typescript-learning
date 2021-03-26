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
router.get('/', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send("<html><body><a href=\"/spider\">\u722C\u53D6\u6570\u636E</a><br/><a href=\"/showData\">\u5DF2\u722C\u53D6\u6570\u636E</a><br/><a href=\"/logout\">\u9000\u51FA\u767B\u5F55</a></body></html>");
    }
    else {
        res.send("<html><body><form action=\"/login\" method=\"post\"><input type=\"password\" name=\"password\"><button>\u767B\u5F55</button></form></body></html>");
    }
});
router.post('/login', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.redirect('/');
    }
    else {
        var password = req.body.password;
        if (password === '123' && req.session) {
            req.session.login = true;
            res.json(utils_1.getJsonResponse(true));
        }
        else {
            res.json(utils_1.getJsonResponse(false, "Wrong password by " + req.author));
        }
    }
});
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.login = false;
    }
    res.json(utils_1.getJsonResponse(true));
});
router.get('/spider', checkLogin, function (req, res) {
    new spider_1.default('https://www.smzdm.com/', new SmzdmAnalyzer_1.default(), DATA_PATH);
    res.json(utils_1.getJsonResponse(true));
});
router.get('/showData', checkLogin, function (req, res) {
    try {
        var result_1 = fs_1.default.readFileSync(DATA_PATH, 'utf8');
        res.json(utils_1.getJsonResponse(JSON.parse(result_1)));
    }
    catch (e) {
        res.json(utils_1.getJsonResponse(false, '获取数据异常，请先爬取数据'));
    }
});
exports.default = router;

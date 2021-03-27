"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *Created by 夜雪暮歌 on 2021/3/27
 **/
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
require("reflect-metadata");
var utils_1 = require("../utils");
var spider_1 = __importDefault(require("../spider"));
var SmzdmAnalyzer_1 = __importDefault(require("../SmzdmAnalyzer"));
var decorator_1 = require("./decorator");
var DATA_PATH = path_1.default.resolve(__dirname, '../../data/smzdm.json');
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
var SpiderController = /** @class */ (function () {
    function SpiderController() {
    }
    SpiderController.prototype.spider = function (req, res) {
        new spider_1.default('https://www.smzdm.com/', new SmzdmAnalyzer_1.default(), DATA_PATH);
        res.json(utils_1.getJsonResponse(true));
    };
    SpiderController.prototype.showData = function (req, res) {
        try {
            var result = fs_1.default.readFileSync(DATA_PATH, 'utf8');
            res.json(utils_1.getJsonResponse(JSON.parse(result)));
        }
        catch (e) {
            res.json(utils_1.getJsonResponse(false, '获取数据异常，请先爬取数据'));
        }
    };
    __decorate([
        decorator_1.get('/spider'),
        decorator_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], SpiderController.prototype, "spider", null);
    __decorate([
        decorator_1.get('/showData'),
        decorator_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], SpiderController.prototype, "showData", null);
    SpiderController = __decorate([
        decorator_1.controller
    ], SpiderController);
    return SpiderController;
}());

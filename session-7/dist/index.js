"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *Created by 夜雪暮歌 on 2021/3/22
 **/
var express_1 = __importDefault(require("express"));
// import router from "./router";
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controller/LoginController");
require("./controller/SpiderController");
var decorator_1 = require("./controller/decorator");
// 无法通过extends给Request新增属性
// interface customRequest extends Request {
//     author: string
// }
// 初始化
var app = express_1.default();
// 使用bodyParser处理表单提交
app.use(body_parser_1.default.urlencoded({ extended: false }));
// 自定义中间件，给request添加属性
app.use(function (req, res, next) {
    req.author = 'yxmg';
    next();
});
// 处理cookie
app.use(cookie_session_1.default({ name: 'session', keys: ['yxmg'], maxAge: 24 * 60 * 60 * 1000 /* 24 hours*/ }));
// 封装接口router
app.use(decorator_1.router);
// 服务监听
app.listen(7001, function () {
    console.log('server is running');
});

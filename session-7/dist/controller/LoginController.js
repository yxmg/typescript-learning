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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *Created by 夜雪暮歌 on 2021/3/26
 **/
require("reflect-metadata");
var utils_1 = require("../utils");
var decorator_1 = require("./decorator");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.login = function (req, res) {
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
    };
    LoginController.prototype.logout = function (req, res) {
        if (req.session) {
            req.session.login = false;
        }
        res.json(utils_1.getJsonResponse(true));
    };
    LoginController.prototype.home = function (req, res) {
        var isLogin = req.session ? req.session.login : false;
        if (isLogin) {
            res.send("<html><body><a href=\"/spider\">\u722C\u53D6\u6570\u636E</a><br/><a href=\"/showData\">\u5DF2\u722C\u53D6\u6570\u636E</a><br/><a href=\"/logout\">\u9000\u51FA\u767B\u5F55</a></body></html>");
        }
        else {
            res.send("<html><body><form action=\"/login\" method=\"post\"><input type=\"password\" name=\"password\"><button>\u767B\u5F55</button></form></body></html>");
        }
    };
    __decorate([
        decorator_1.post('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "login", null);
    __decorate([
        decorator_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "logout", null);
    __decorate([
        decorator_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "home", null);
    LoginController = __decorate([
        decorator_1.controller
    ], LoginController);
    return LoginController;
}());

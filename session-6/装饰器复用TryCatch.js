"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 *Created by 夜雪暮歌 on 2021/3/25
 **/
// simple
function catchError(target, key, descriptor) {
    var fn = descriptor.value;
    descriptor.value = function () {
        try {
            // 程序报错但会继续运行
            fn();
        }
        catch (e) {
            console.log(e, "e");
        }
    };
}
// factory：自定义错误提示
function genCatchError(tip) {
    return function (target, key, descriptor) {
        var fn = descriptor.value;
        descriptor.value = function () {
            try {
                fn();
            }
            catch (e) {
                console.log(tip, "tip");
            }
        };
    };
}
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getName = function () {
        return this.userInfo.name;
    };
    User.prototype.getAge = function () {
        return this.userInfo.age;
    };
    User.prototype.getGender = function () {
        return this.userInfo.gender;
    };
    __decorate([
        genCatchError('无名氏')
    ], User.prototype, "getName", null);
    __decorate([
        genCatchError('年龄未知')
    ], User.prototype, "getAge", null);
    __decorate([
        catchError
    ], User.prototype, "getGender", null);
    return User;
}());
var yxmg = new User();
yxmg.getName();
yxmg.getAge();
yxmg.getGender();

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 *Created by 夜雪暮歌 on 2021/3/25
 **/
function paramDecorator(target, method, paramIndex) {
    console.log(target, "target");
    console.log(method, "method");
    console.log(paramIndex, "paramIndex");
}
var Programmer7 = /** @class */ (function () {
    function Programmer7() {
    }
    Programmer7.prototype.printInfo = function (name, age) {
        console.log(name, "name");
        console.log(age, "age");
    };
    __decorate([
        __param(0, paramDecorator), __param(1, paramDecorator)
    ], Programmer7.prototype, "printInfo", null);
    return Programmer7;
}());
var p7 = new Programmer7();
p7.printInfo('yxmg', 24);

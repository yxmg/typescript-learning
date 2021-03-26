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
function visitorDecorator(target, key, descriptor) {
    console.log(target, "target");
    console.log(key, "key");
    console.log(descriptor, "descriptor");
    descriptor.writable = false; // 禁止属性重写
}
var Programmer5 = /** @class */ (function () {
    function Programmer5(name) {
        this._name = name;
    }
    Object.defineProperty(Programmer5.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        visitorDecorator
    ], Programmer5.prototype, "name", null);
    return Programmer5;
}());
var p5 = new Programmer5('yxmg');
p5.name = 'hehe';
console.log(p5.name, "p5.name");

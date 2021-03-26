"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/25
 **/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function printNameDecorator(target, key, descriptor) {
    console.log(target, "target"); // 普通方法时是类的prototype
    console.log(key, "key"); // 方法名
    // 重写方法
    descriptor.value = function () {
        console.log(target.printName, "target.printName");
    };
    // 禁止重写方法
    descriptor.writable = false;
}
function getNameDecorator(target, key, descriptor) {
    console.log(target, "target"); // 静态方法时是类的构造器
    console.log(key, "key"); // 方法名
}
var Programmer4 = /** @class */ (function () {
    function Programmer4(name) {
        this.name = name;
    }
    Programmer4.getName = function () {
        return this.name;
    };
    Programmer4.prototype.printName = function () {
        console.log(this.name, "this.name");
    };
    __decorate([
        printNameDecorator
    ], Programmer4.prototype, "printName", null);
    __decorate([
        getNameDecorator
    ], Programmer4, "getName", null);
    return Programmer4;
}());
var p4 = new Programmer4('yxmg');
p4.printName();
p4.printName = function () { }; // Wrong!

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
function nameDecorator(target, key) {
    console.log(target, "target"); // target, 类的原型，通过实例的__proto__可以访问到
    console.log(key, "key"); // key，属性名
    target[key] = 'modify name'; // 修改的是原型上的name，无法影响实例的name
    // const descriptor: PropertyDescriptor = { writable: false }
    return { writable: false };
}
var Programmer6 = /** @class */ (function () {
    function Programmer6() {
    }
    __decorate([
        nameDecorator
    ], Programmer6.prototype, "name", void 0);
    return Programmer6;
}());
var p6 = new Programmer6();
console.log(p6.name, "p6.name");
console.log(p6.__proto__.name, "(p6 as any).__proto__.name");

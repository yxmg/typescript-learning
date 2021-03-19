"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *Created by 夜雪暮歌 on 2021/3/16
 **/
// 类
// 1、类的属性和方法定义
var Person5 = /** @class */ (function () {
    function Person5() {
        this.name = 'yxmg';
    }
    Person5.prototype.introduceSelf = function () {
        console.log('My name is ' + this.name);
    };
    return Person5;
}());
var p5 = new Person5();
p5.introduceSelf();
// 2、类的继承：子类可以重写父类的属性和方法，重写后可以使用super访问父类的原属性和方法
var Programmer5 = /** @class */ (function (_super) {
    __extends(Programmer5, _super);
    function Programmer5() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.job = 'programmer';
        return _this;
    }
    Programmer5.prototype.introduceSelf = function () {
        _super.prototype.introduceSelf.call(this);
        console.log('My job is ' + this.job);
    };
    return Programmer5;
}(Person5));
var programmer5 = new Programmer5();
programmer5.introduceSelf();
// 3、访问类型：用于限制外部访问
// public：无限制，允许内外部访问
// private: 仅允许内部访问
// protected: 仅允许内部和继承的子类访问
var Person6 = /** @class */ (function () {
    function Person6() {
        this.publicName = 'yxmg';
        this.privateName = 'gmz';
        this.protectedName = 'baba';
    }
    return Person6;
}());
var Author = /** @class */ (function (_super) {
    __extends(Author, _super);
    function Author() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Author.prototype.introduceSelf = function () {
        // 不允许访问，Property 'privateName' is private and only accessible within class 'Person6'.
        // console.log(`Listen, my privateName is ${this.privateName}`)
        // 可以访问到publicName、protectName
        console.log("My publicName is " + this.publicName + ", you can call me " + this.protectedName);
    };
    return Author;
}(Person6));
var yxmg6 = new Author();
console.log(yxmg6.publicName, "yxmg6.publicName");
// console.log(yxmg6.privateName, "yxmg6.privateName") // 不允许访问
// console.log(yxmg6.protectedName, "yxmg6.privateName") // 不允许访问，Property 'protectedName' is protected and only accessible within class 'Person6' and its subclasses.
// 4、构造器：实例化时执行，可以用于外部决定怎么初始化类（属性赋值）
// 传统写法
// class Person7 {
//     public name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// 简化写法（语法糖）
var Person7 = /** @class */ (function () {
    function Person7(name) {
        this.name = name;
    }
    return Person7;
}());
var yxmg7 = new Person7('yxmg');
console.log(yxmg7.name, "yxmg7.name");
// 5、子类构造器必须按要求调用父类构造器
var Programmer7 = /** @class */ (function (_super) {
    __extends(Programmer7, _super);
    function Programmer7(coding) {
        var _this = _super.call(this, 'yxmg') // 不调用会报错，Constructors for derived classes must contain a 'super' call.
         || this;
        _this.coding = coding;
        return _this;
    }
    return Programmer7;
}(Person7));
// TODO：这里明明限制了coding为没有返回值的函数，但字面量传 () => '' 竟然不报错=-=
var p7 = new Programmer7(function () { return console.log('Hello World!'); });
console.log(p7.name, "p7.name");
p7.coding();

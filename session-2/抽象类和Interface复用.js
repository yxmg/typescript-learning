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
 *Created by 夜雪暮歌 on 2021/3/17
 **/
// 类的只读属性readonly
var Person9 = /** @class */ (function () {
    function Person9() {
        this.name = 'yxmg';
    }
    return Person9;
}());
var yxmg9 = new Person9();
// yxmg9.name = 'xxx' // wrong! Attempt to assign to const or readonly variable
// 抽象类，用于规定子类必须实现的接口
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 8;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.pow(this.width, 2) * Math.PI;
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Square.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Square;
}(Shape));
var s = new Square(8, 8);
var c = new Circle();
console.log(s.getArea(), "s.getArea()");
console.log(c.getArea(), "s.getArea()");
var getWorkingYears = function (job) {
    return job.workingYears;
};
var t9 = {
    workingYears: 1,
    teach: function () {
        console.log('teach...');
    }
};
var p9 = {
    workingYears: 3,
    coding: function () {
        console.log('coding...');
    }
};
console.log(getWorkingYears(t9), "getWorkingYears(t9)");
console.log(getWorkingYears(p9), "getWorkingYears(p9)");

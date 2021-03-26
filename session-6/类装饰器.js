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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 *Created by 夜雪暮歌 on 2021/3/24
 **/
// 请在tsconfig.json中启用「experimentalDecorators」
function simpleDecorator1(constructor) {
    console.log('simple decorator1');
}
function simpleDecorator2(constructor) {
    console.log('simple decorator2');
}
function modifyDecorator(constructor) {
    console.log('modify');
    constructor.prototype.cname = '夜雪暮歌';
    constructor.prototype.name = 'modify name'; // 无效，修改的是原型链上的name，不影响实例上的name，仅在实例上没有name时会被查找
}
var Programmer1 = /** @class */ (function () {
    function Programmer1(name) {
        this.name = name;
        console.log(this.cname, "this.cname");
        console.log(this.name, "Programmer1");
    }
    Programmer1 = __decorate([
        simpleDecorator1 // 基本用法，使用@，在constructor之后执行
        ,
        simpleDecorator2 // 后收集的装饰器先执行
        ,
        modifyDecorator // 修改name（在constructor之前）
    ], Programmer1);
    return Programmer1;
}());
var p1 = new Programmer1('yxmg');
var unknownP1 = new Programmer1();
// 高级用法1：装饰前处理
var typeDecorator = function (type) {
    if (type === 'A') {
        return function (constructor) {
            console.log('A decorator');
        };
    }
    else if (type === 'B') {
        return function (constructor) {
            console.log('B decorator');
        };
    }
    else {
        return function (constructor) {
            console.log('unknown decorator');
        };
    }
};
var Programmer2 = /** @class */ (function () {
    function Programmer2(name) {
        this.name = name;
        console.log(this.name, "Programmer2");
    }
    Programmer2 = __decorate([
        typeDecorator('A')
    ], Programmer2);
    return Programmer2;
}());
// 高级用法2：重载构造函数
function completeDecorator(constructor) {
    return /** @class */ (function () {
        function class_1() {
            // extends constructor 执行旧类constructor
            this.name = 'decorator name';
            console.log(this.name, "decorator constructor"); // 旧类constructor 会被覆盖
        }
        return class_1;
    }());
}
var Programmer3 = /** @class */ (function () {
    function Programmer3(name) {
        this.name = name;
        console.log(this.name, "Programmer3");
    }
    Programmer3 = __decorate([
        completeDecorator
    ], Programmer3);
    return Programmer3;
}());
new Programmer3('yxmg');
// 高级用法3：更友好的类型推断（不使用装饰器@）
function friendlyDecorator() {
    return function extraPropDecorator(constructor) {
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = 'extra name';
                return _this;
            }
            class_2.prototype.getName = function () {
                return this.name;
            };
            return class_2;
        }(constructor));
    };
}
var Friendly = friendlyDecorator()(/** @class */ (function () {
    function class_3(name) {
        this.name = name;
    }
    return class_3;
}()));
var f = new Friendly('yxmg');
console.log(f.getName(), "f.getName()"); // getName可以被推断出来

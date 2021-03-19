"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/16
 **/
// getter 和 setter
var Person8 = /** @class */ (function () {
    function Person8() {
        this._phone = '12345678910';
    }
    Object.defineProperty(Person8.prototype, "phone", {
        get: function () {
            return this._phone.replace(/(?<=\d{4}).*(?=\d{4})/, '***');
        },
        set: function (value) {
            if (value.length !== 11) {
                return;
            }
            this._phone = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person8;
}());
var yxmg8 = new Person8();
console.log(yxmg8.phone, "yxmg8.phone");
yxmg8.phone = '10987654321';
yxmg8.phone = '123';
console.log(yxmg8.phone, "yxmg8.phone");
// 用访问类型和静态属性实现单例模式（不透明）
var SingleInstance = /** @class */ (function () {
    function SingleInstance(name) {
        this.name = name;
    }
    SingleInstance.getInstance = function () {
        if (!this.instance) {
            this.instance = new SingleInstance('programmer');
        }
        return this.instance;
    };
    return SingleInstance;
}());
var i1 = SingleInstance.getInstance();
var i2 = SingleInstance.getInstance();
console.log(i1.name, "i1.name");
console.log(i2.name, "i2.name");
console.log(i1 === i2, "i1 === i2");

"use strict";
var teacher = {
    name: 'yxmg',
    age: 24
};
var student = {
    name: 'yxmg',
    age: 24
};
var dimension = '10px';
dimension = 10;
// 3、TS校验对字面量是强校验，变量则是弱校验
// 没加[propName: string]: any前：
// wrong! Type '{ name: string; gender: string; }' is not assignable to type 'Person
// const man: Person = { name: 'yxmg', gender: 'male' }
// 声明变量并赋值给Person类型，不报错
var obj = { name: 'yxmg', gender: 'male' };
var man = obj;
// 4、可选属性，在属性后冒号前使用?表示该属性/参数不是必须的
var onlyName = { name: 'yxmg' };
// 5、只读属性，readonly
var readOnlyName = { name: 'yxmg' };
// wrong! Attempt to assign to const or readonly variable
// readOnlyName.name = 'change'
// 6、允许其他任何属性，[propName: string]: any
var otherProps = { name: 'yxmg', isProgrammer: true };
var fisher = /** @class */ (function () {
    function fisher() {
        this.name = 'yxmg';
    }
    fisher.prototype.say = function () {
        return 'I am a fisher';
    };
    return fisher;
}());
var sayHi = function (message) {
    console.log(message, "message");
};
sayHi('Hello World!');

"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/15
 **/
// 数组相关类型
// 1、多类型数组声明，用「()」包裹，用「|」隔开
var arr = ['1', 1, 2];
var objArr = [{ name: 'yxmg', age: 24 }];
// 3、TS对类的判断不限于instanceof，数据结构一致也视为同类型
var Person2 = /** @class */ (function () {
    function Person2() {
        this.name = '';
        this.age = 0;
    }
    return Person2;
}());
var classArr = [new Person2(), { name: 'yxmg', age: 24 }];
// 元组
// 规定数组每一项元素的类型，用于更强力的约束数组
// 常用于解析外部数据来源，比如csv数据
var tupleArr = ['yxmg', 'male', 24];

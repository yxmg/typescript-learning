"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/15
 **/
// 基本类型
// JS：number、string、boolean、undefined、symbol、bigint
// TS：void、never
var age = 24;
var username = 'yxmg';
var isProgrammer = true;
// 对象类型
// 对象
var info = {
    age: 24,
    username: '123',
    isProgrammer: true
};
// 类
var Programmer = /** @class */ (function () {
    function Programmer() {
    }
    return Programmer;
}());
var yxmg = new Programmer();
// 数组
var hobby = ['game', 'code'];
// 函数
var coding = function () {
    return 'Hello world';
};

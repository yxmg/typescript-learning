"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/20
 **/
var test = 'yxmg';
var test1 = { a: '1', b: 1 };
// 测试noImplicitAny 不允许隐式any
var test2 = function (testAny) {
    return testAny;
};
// 测试strictNullChecks 赋值null给任意类型
var test3 = null;
var test4 = null;

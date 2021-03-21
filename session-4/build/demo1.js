"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/20
 **/
var test = 'yxmg';
var test1 = { a: '1', b: 1 };
// 测试noImplicitAny 不允许隐式any（红线是因为根目录的tsconfig.json）
var test2 = function (testAny) {
};
// 测试strictNullChecks 赋值null给任意类型 （红线是因为根目录的tsconfig.json）
var test3 = null;
var test4 = null;
var test5 = '';

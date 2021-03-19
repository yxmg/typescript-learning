"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/15
 **/
// 函数相关类型注解
// 1、函数返回值注解视情况而定，能推断则可以省略
function getTotal(num1, num2) {
    // return num1 + num2 + '' // 推断出是string，但不符合预期
    return num1 + num2;
}
// 2、void表示空，没有返回值
function print(message) {
    console.log(message, "message");
}
// 3、never表示从不返回，常见于跳出函数
function errorEmitter() {
    throw new Error('不会往下执行');
    console.log(1, "1");
}
// 4、函数参数解构时请在对象上注解
// function add({ num1: number, num2:number }): number { // 没有这种写法！
function add(_a) {
    var num1 = _a.num1, num2 = _a.num2;
    return num1 + num2;
}
var total = getTotal(1, 2);
print('Hello World!');
var addResult = add({ num1: 1, num2: 2 });

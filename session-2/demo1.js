/**
 *Created by 夜雪暮歌 on 2021/3/15
 **/
// 一般静态类型
var a = 123;
// a = '123'   // Type 'string' is not assignable to type 'number'
a = 234;
var programmer = { name: 'GMZ' }; // 必须有name
function calcHypotenuse(rightTriangle) {
    // return Math.sqrt(rightTriangle.x ** 2 + rightTriangle.y ** 2) // 写错了提示
    return Math.sqrt(Math.pow(rightTriangle.a, 2) + Math.pow(rightTriangle.b, 2)); // 编辑器自动提示 a、b
}
// TS环境搭建

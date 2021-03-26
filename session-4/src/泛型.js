"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/
// 泛型，generic，泛指的类型
// 使用泛型可以将注解抽取成参数，在使用时传递
// const join = (a, b) => {
//     return `${a}${b}`
// }
// 要求a、b必须同类型
var join = function (a, b) {
    return "" + a + b;
};
join('1', '2');
join(1, 2);
join([1], [2]);
// 也可以让TS自行推断
join('1', '2');
join(1, 2);
// 定义多个泛型
var join1 = function (a, b) {
    return "" + a + b;
};
// 定义泛型，比如使用泛型变量约定数组
var join2 = function (arr) {
    return arr.join('');
};
join1('1', 1);
join2([1, '2']);
// 用extends限定泛型
// 要求a，b必须同类型且为字符串或数字
var join3 = function (a, b) {
    return "" + a + b;
};
// join3([1], [2]) // wrong!
join3(1, 1);
// 类中的泛型
var Test = /** @class */ (function () {
    function Test(obj) {
        this.obj = obj;
    }
    Test.prototype.getName = function () {
        return this.obj.name;
    };
    return Test;
}());
var t = new Test({ name: 'yxmg' });
console.log(t.getName(), "t.getName()");

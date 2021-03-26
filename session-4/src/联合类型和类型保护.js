"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/20
 **/
// 联合类型
var stringOrNumber = 1;
stringOrNumber = '1';
function trainAnimal(animal) {
    console.log(animal.hairy, "animal.hairy");
    animal.fly && animal.fly();
    animal.bark && animal.bark();
    // 使用标识
    if (animal.name === 'bird') {
        animal.fly();
    }
    else {
        animal.bark();
    }
    // 使用in
    if ('fly' in animal) {
        animal.fly();
    }
    else {
        animal.bark();
    }
}
var NumberObj = /** @class */ (function () {
    function NumberObj() {
    }
    return NumberObj;
}());
// 使用instanceof
function add(a, b) {
    // wrong！
    // if (a.count && b.count) {
    //     return a.count + b.count
    // }
    var countA = a instanceof NumberObj ? a.count : a;
    var countB = b instanceof NumberObj ? b.count : b;
    return countA + countB;
}

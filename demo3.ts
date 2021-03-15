/**
 *Created by 夜雪暮歌 on 2021/3/15
 **/
// 类型注解和类型推断
// 类型注解指的是开发者手动去声明变量类型
// 类型推断指的是TS自动推断出变量类型
const height: number = 176 // 类型注解
const weight = 60 // 类型推断

// 原则上仅在类型无法推断的情况为变量注解
function sum(num1: number, num2: number) {  // num1和num2无法推断类型，必须注解
    return num1 + num2
}

const result = sum(1, 2)    // 加上注解后，result的类型也能被推断出来
console.log(result, "result")

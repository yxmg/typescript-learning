/**
 *Created by 夜雪暮歌 on 2021/3/15
 **/
// 一般静态类型
let a: number = 123
// a = '123'   // Type 'string' is not assignable to type 'number'
a = 234

// 自定义静态类型
interface Person {
    name: string
}

const programmer: Person = { name: 'GMZ' } // 必须有name

// TS优势演示
interface rightTriangle {
    a: number,
    b: number
} // 清晰直观

function calcHypotenuse(rightTriangle: rightTriangle) {
    // return Math.sqrt(rightTriangle.x ** 2 + rightTriangle.y ** 2) // 写错了提示
    return Math.sqrt(rightTriangle.a ** 2 + rightTriangle.b ** 2) // 编辑器自动提示 a、b
}

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

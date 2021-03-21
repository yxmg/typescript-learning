/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/

// 泛型，generic，泛指的类型

// 使用泛型可以将注解抽取成参数，在使用时传递

// const join = (a, b) => {
//     return `${a}${b}`
// }
// 要求a、b必须同类型
const join = <T>(a: T, b: T) => {
    return `${a}${b}`
}
join<string>('1', '2')
join<number>(1, 2)
join<number[]>([1], [2])
// 也可以让TS自行推断
join('1', '2')
join(1, 2)

// 定义多个泛型
const join1 = <T, P>(a: T, b: P) => {
    return `${a}${b}`
}

// 定义泛型，比如使用泛型变量约定数组
const join2 = <T>(arr: Array<T>) => {
    return arr.join('')
}
join1('1', 1)
join2([1, '2'])

// 用extends限定泛型

// 要求a，b必须同类型且为字符串或数字
const join3 = <T extends (string | number)>(a: T, b: T) => {
    return `${a}${b}`
}
// join3([1], [2]) // wrong!
join3(1, 1)

interface A {
    name: string
}

// 类中的泛型
class Test<T extends A> {
    constructor(private obj: T) {
    }

    getName() {
        return this.obj.name
    }
}

const t = new Test({ name: 'yxmg' })
console.log(t.getName(), "t.getName()")

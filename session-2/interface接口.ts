/**
 *Created by 夜雪暮歌 on 2021/3/16
 **/
// interface
// 1、常用于提取复用类型
interface Person3 {
    readonly name: string,
    age?: number,

    [propName: string]: any
}

const teacher: Person3 = {
    name: 'yxmg',
    age: 24
}
const student: Person3 = {
    name: 'yxmg',
    age: 24
}

// 2、与Type alias不同，interface只能定义对象类型，实际开发中优先使用interface
type strOrNum = (string | number)
let dimension: strOrNum = '10px'
dimension = 10

// 3、TS校验对字面量是强校验，变量则是弱校验
// 没加[propName: string]: any前：
// wrong! Type '{ name: string; gender: string; }' is not assignable to type 'Person
// const man: Person = { name: 'yxmg', gender: 'male' }
// 声明变量并赋值给Person类型，不报错
const obj = { name: 'yxmg', gender: 'male' }
const man: Person3 = obj

// 4、可选属性，在属性后冒号前使用?表示该属性/参数不是必须的
const onlyName: Person3 = { name: 'yxmg' }

// 5、只读属性，readonly
const readOnlyName: Person3 = { name: 'yxmg' }
// wrong! Attempt to assign to const or readonly variable
// readOnlyName.name = 'change'

// 6、允许其他任何属性，[propName: string]: any
const otherProps: Person3 = { name: 'yxmg', isProgrammer: true }

// 7、通过implements为类做注解，通过extends将属性继承给其他接口
// 8、接口中函数类型注解
interface Person4 extends Person3 {
    say(): string
}

class fisher implements Person4 {
    name = 'yxmg';

    say() {
        return 'I am a fisher'
    }
}

// 9、interface定义函数接口
interface say {
    (message: string): void
}

const sayHi: say = (message: string) => {
    console.log(message, "message")
}
sayHi('Hello World!')


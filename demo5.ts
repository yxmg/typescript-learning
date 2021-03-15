/**
 *Created by 夜雪暮歌 on 2021/3/15
 **/
// 数组相关类型
// 1、多类型数组声明，用「()」包裹，用「|」隔开
const arr: (string | number)[] = ['1', 1, 2]
// 2、使用类型别名简化对象注解
// const objArr: { name: string, age: number }[] = [{ name: 'yxmg', age: 24 }]
type Person1 = {
    name: string,
    age: number
}
const objArr: Person1[] = [{ name: 'yxmg', age: 24 }]

// 3、TS对类的判断不限于instanceof，数据结构一致也视为同类型
class Person2 {
    name: string
    age: number

    constructor() {
        this.name = ''
        this.age = 0
    }
}

const classArr: Person2[] = [new Person2(), { name: 'yxmg', age: 24 }]

// 元组
// 规定数组每一项元素的类型，用于更强力的约束数组
// 常用于解析外部数据来源，比如csv数据
const tupleArr: [string, string, number] = ['yxmg', 'male', 24]


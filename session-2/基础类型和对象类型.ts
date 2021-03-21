/**
 *Created by 夜雪暮歌 on 2021/3/15
 **/

// 基本类型
// JS：number、string、boolean、undefined、symbol、bigint
// TS：void、never
const age: number = 24
const username: string = 'yxmg'
const isProgrammer: boolean = true

// 对象类型
// 对象
const info: {
    age: number,
    username: string,
    isProgrammer: boolean
} = {
    age: 24,
    username: '123',
    isProgrammer: true
}

// 类
class Programmer {
}

const yxmg: Programmer = new Programmer()

// 数组
const hobby: string[] = ['game', 'code']

// 函数
const coding: () => string = () => {
    return 'Hello world'
}


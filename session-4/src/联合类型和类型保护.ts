/**
 *Created by 夜雪暮歌 on 2021/3/20
 **/
// 联合类型
let stringOrNumber: string | number = 1
stringOrNumber = '1'

// 联合类型不能保证每个类型特性一样，在使用变量特性时，TS认为这不安全会报错
// 需要类型保护

interface Bird {
    name: 'bird',
    hairy: true,
    fly: () => {}
}

interface Dog {
    name: 'dog',
    hairy: true,
    bark: () => {}
}

function trainAnimal(animal: Bird | Dog) {
    console.log(animal.hairy, "animal.hairy")
    // animal.bark && animal.bark() // wrong
    // animal.fly && animal.fly() // wrong
    // 使用as强行使用
    ;(animal as Bird).fly && (animal as Bird).fly()
    ;(animal as Dog).bark && (animal as Dog).bark()
    // 使用标识
    if (animal.name === 'bird') {
        animal.fly()
    } else {
        animal.bark()
    }
    // 使用in
    if ('fly' in animal) {
        animal.fly()
    } else {
        animal.bark()
    }
}

class NumberObj {
    count: number
}

// 使用instanceof
function add(a: number | NumberObj, b: number | NumberObj) {
    // wrong！
    // if (a.count && b.count) {
    //     return a.count + b.count
    // }
    const countA = a instanceof NumberObj ? a.count : a
    const countB = b instanceof NumberObj ? b.count : b
    return countA + countB
}

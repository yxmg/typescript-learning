/**
 *Created by 夜雪暮歌 on 2021/3/25
 **/
function nameDecorator(target: any, key: string): any {
    console.log(target, "target") // target, 类的原型，通过实例的__proto__可以访问到
    console.log(key, "key") // key，属性名
    target[key] = 'modify name' // 修改的是原型上的name，无法影响实例的name
    // const descriptor: PropertyDescriptor = { writable: false }
    return { writable: false }
}

class Programmer6 {
    @nameDecorator
    // name = 'yxmg' // writable: false，这里便不允许变更了
    name: undefined
}

const p6 = new Programmer6()
console.log(p6.name, "p6.name")
console.log((p6 as any).__proto__.name, "(p6 as any).__proto__.name")

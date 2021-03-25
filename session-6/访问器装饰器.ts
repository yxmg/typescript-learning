/**
 *Created by 夜雪暮歌 on 2021/3/25
 **/
function visitorDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target, "target")
    console.log(key, "key")
    console.log(descriptor, "descriptor")
    descriptor.writable = false // 禁止属性重写
}

class Programmer5 {
    private _name: string

    constructor(name: string) {
        this._name = name
    }

    get name() {
        return this._name
    }

    @visitorDecorator
    set name(name: string) {
        this._name = name
    }
}

const p5 = new Programmer5('yxmg')
p5.name = 'hehe'
console.log(p5.name, "p5.name")

/**
 *Created by 夜雪暮歌 on 2021/3/25
 **/

function printNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target, "target") // 普通方法时是类的prototype
    console.log(key, "key") // 方法名
    // 重写方法
    descriptor.value = () => {
        console.log(target.printName, "target.printName")
    }
    // 禁止重写方法
    descriptor.writable = false
}

function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target, "target") // 静态方法时是类的构造器
    console.log(key, "key") // 方法名
}

class Programmer4 {
    name: string

    constructor(name: string) {
        this.name = name
    }

    @getNameDecorator
    static getName() {
        return this.name
    }

    @printNameDecorator
    printName() {
        console.log(this.name, "this.name")
    }
}

const p4 = new Programmer4('yxmg')
p4.printName()
p4.printName = () => {} // Wrong!

/**
 *Created by 夜雪暮歌 on 2021/3/24
 **/
// 请在tsconfig.json中启用「experimentalDecorators」
function simpleDecorator1(constructor: any) {
    console.log('simple decorator1')
}

function simpleDecorator2(constructor: any) {
    console.log('simple decorator2')
}

function modifyDecorator(constructor: any) {
    console.log('modify')
    constructor.prototype.cname = '夜雪暮歌'
    constructor.prototype.name = 'modify name'  // 无效，会被重置
}

@simpleDecorator1 // 基本用法，使用@，在constructor之后执行
@simpleDecorator2 // 后收集的装饰器先执行
@modifyDecorator // 修改name（在constructor之前）
class Programmer1 {
    constructor(public name?: string) {
        console.log((this as any).cname, "this.cname")
        console.log(this.name, "Programmer1")
    }
}

const p1 = new Programmer1('yxmg')
const unknownP1 = new Programmer1()

// 高级用法1：装饰前处理
const typeDecorator = (type: string) => {
    if (type === 'A') {
        return (constructor: any) => {
            console.log('A decorator')
        }
    } else if (type === 'B') {
        return (constructor: any) => {
            console.log('B decorator')
        }
    } else {
        return (constructor: any) => {
            console.log('unknown decorator')
        }
    }
}

@typeDecorator('A')
class Programmer2 {
    constructor(public name: string) {
        console.log(this.name, "Programmer2")
    }
}

// 高级用法2：构造函数注解
function completeDecorator<T extends new (...args: any[]) => any>(constructor: T) {
    return class {
        // extends constructor 执行旧类constructor
        name = 'decorator name'

        constructor() {
            console.log(this.name, "decorator constructor") // 旧类constructor 会被覆盖
        }
    }
}

@completeDecorator
class Programmer3 {
    constructor(public name: string) {
        console.log(this.name, "Programmer3")
    }
}

new Programmer3('yxmg')

// 高级用法3：更友好的类型推断（不使用装饰器@）
function friendlyDecorator() {
    return function extraPropDecorator<T extends new (...args: any[]) => any>(constructor: T) {
        return class extends constructor {
            name = 'extra name'

            getName() {
                return this.name
            }
        }
    }
}

const Friendly = friendlyDecorator()(class {
    name: string;

    constructor(name: string) {
        this.name = name
    }
})
const f = new Friendly('yxmg')
console.log(f.getName(), "f.getName()") // getName可以被推断出来

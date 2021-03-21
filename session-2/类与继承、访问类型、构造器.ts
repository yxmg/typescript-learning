/**
 *Created by 夜雪暮歌 on 2021/3/16
 **/
// 类
// 1、类的属性和方法定义
class Person5 {
    name = 'yxmg'

    introduceSelf() {
        console.log('My name is ' + this.name)
    }
}

const p5 = new Person5()
p5.introduceSelf()

// 2、类的继承：子类可以重写父类的属性和方法，重写后可以使用super访问父类的原属性和方法
class Programmer5 extends Person5 {
    job = 'programmer'

    introduceSelf() {
        super.introduceSelf()
        console.log('My job is ' + this.job)
    }
}

const programmer5 = new Programmer5()
programmer5.introduceSelf()

// 3、访问类型：用于限制外部访问
// public：无限制，允许内外部访问
// private: 仅允许内部访问
// protected: 仅允许内部和继承的子类访问
class Person6 {
    public publicName = 'yxmg'
    private privateName = 'gmz'
    protected protectedName = 'baba'
}

class Author extends Person6 {
    introduceSelf() {
        // 不允许访问，Property 'privateName' is private and only accessible within class 'Person6'.
        // console.log(`Listen, my privateName is ${this.privateName}`)
        // 可以访问到publicName、protectName
        console.log(`My publicName is ${this.publicName}, you can call me ${this.protectedName}`)
    }
}

const yxmg6 = new Author()
console.log(yxmg6.publicName, "yxmg6.publicName")
// console.log(yxmg6.privateName, "yxmg6.privateName") // 不允许访问
// console.log(yxmg6.protectedName, "yxmg6.privateName") // 不允许访问，Property 'protectedName' is protected and only accessible within class 'Person6' and its subclasses.

// 4、构造器：实例化时执行，可以用于外部决定怎么初始化类（属性赋值）
// 传统写法
// class Person7 {
//     public name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// 简化写法（语法糖）
class Person7 {
    constructor(public name: string) {
    }
}

const yxmg7 = new Person7('yxmg')
console.log(yxmg7.name, "yxmg7.name")

// 5、子类构造器必须按要求调用父类构造器
class Programmer7 extends Person7 {
    constructor(public coding: () => void) {
        super('yxmg') // 不调用会报错，Constructors for derived classes must contain a 'super' call.
    }
}

// TODO：这里明明限制了coding为没有返回值的函数，但字面量传 () => '' 竟然不报错=-=
const p7 = new Programmer7(() => console.log('Hello World!'))
console.log(p7.name, "p7.name")
p7.coding()


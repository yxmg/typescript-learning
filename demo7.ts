/**
 *Created by 夜雪暮歌 on 2021/3/16
 **/
// 类
// 1、类的属性和方法定义
class Person7 {
    name = 'yxmg'

    introduceSelf() {
        console.log('My name is ' + this.name)
    }
}

const p7 = new Person7()
p7.introduceSelf()

// 2、类的继承：子类可以重写父类的属性和方法
class Programmer7 extends Person7 {
    job = 'programmer'

    introduceSelf() {
        super.introduceSelf()
        console.log('My job is ' + this.job)
    }
}

const programmer7 = new Programmer7()
programmer7.introduceSelf()

/**
 *Created by 夜雪暮歌 on 2021/3/17
 **/
// 类的只读属性readonly
class Person9 {
    public readonly name = 'yxmg'
}

const yxmg9 = new Person9()
// yxmg9.name = 'xxx' // wrong! Attempt to assign to const or readonly variable

// 抽象类，用于规定子类必须实现的接口
abstract class Shape {
    abstract width: number // 继承Shape抽象类的子类必须声明width
    abstract getArea(): number // 继承Shape抽象类的子类必须实现getArea
}

class Circle extends Shape {
    public width = 8

    getArea() {
        return this.width ** 2 * Math.PI
    }
}

class Square extends Shape {
    getArea() {
        return this.width * this.height
    }

    constructor(public width: number, public height: number) {
        super()
    }
}

const s = new Square(8, 8)
const c = new Circle()
console.log(s.getArea(), "s.getArea()")
console.log(c.getArea(), "s.getArea()")

// Interface复用
interface Job {
    workingYears: number
}

interface Teacher extends Job {
    teach(): void
}

interface Programmer extends Job {
    coding(): void
}

const getWorkingYears = (job: Job): number => {
    return job.workingYears
}
const t9: Teacher = {
    workingYears: 1,
    teach() {
        console.log('teach...')
    }
}
const p9: Programmer = {
    workingYears: 3,
    coding() {
        console.log('coding...')
    }
}
console.log(getWorkingYears(t9), "getWorkingYears(t9)")
console.log(getWorkingYears(p9), "getWorkingYears(p9)")

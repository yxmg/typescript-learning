/**
 *Created by 夜雪暮歌 on 2021/3/16
 **/
// getter 和 setter
class Person8 {
    _phone = '12345678910'
    get phone() {
        return this._phone.replace(/(?<=\d{4}).*(?=\d{4})/, '***')
    }

    set phone(value: string) {
        if (value.length !== 11) {
            return
        }
        this._phone = value
    }
}

const yxmg8 = new Person8()
console.log(yxmg8.phone, "yxmg8.phone")
yxmg8.phone = '10987654321'
yxmg8.phone = '123'
console.log(yxmg8.phone, "yxmg8.phone")

// 用访问类型和静态属性实现单例模式（不透明）
class SingleInstance {
    private static instance: SingleInstance
    private constructor(public name: string) {}

    public static getInstance() {
        if (!this.instance) {
            this.instance = new SingleInstance('programmer')
        }
        return this.instance
    }
}

const i1 = SingleInstance.getInstance()
const i2 = SingleInstance.getInstance()
console.log(i1.name, "i1.name")
console.log(i2.name, "i2.name")
console.log(i1 === i2, "i1 === i2")

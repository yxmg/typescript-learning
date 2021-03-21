/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/

interface Person {
    name: string,
    age: number,
    gender: string
}

class Programmer {
    constructor(private info: Person) {
    }

    getInfoByKey<T extends keyof Person>(key: T): Person[T] {
        return this.info[key]
    }
}

const yxmg = new Programmer({
    name: 'yxmg',
    age: 24,
    gender: 'male'
})
const pName = yxmg.getInfoByKey('name')
const age = yxmg.getInfoByKey('age')
const gender = yxmg.getInfoByKey('gender')




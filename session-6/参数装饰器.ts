/**
 *Created by 夜雪暮歌 on 2021/3/25
 **/
function paramDecorator(target: any, method: string, paramIndex: number) {
    console.log(target, "target")
    console.log(method, "method")
    console.log(paramIndex, "paramIndex")
}

class Programmer7 {
    printInfo(@paramDecorator name: string, @paramDecorator age: number) {
        console.log(name, "name")
        console.log(age, "age")
    }
}

const p7 = new Programmer7()
p7.printInfo('yxmg', 24)

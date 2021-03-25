/**
 *Created by 夜雪暮歌 on 2021/3/25
 **/
// simple
function catchError(target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value
    descriptor.value = function () {
        try {
            // 程序报错但会继续运行
            fn()
        } catch (e) {
            console.log(e, "e")
        }
    }
}

// factory：自定义错误提示
function genCatchError(tip: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value
        descriptor.value = function () {
            try {
                fn()
            } catch (e) {
               console.log(tip, "tip")
            }
        }
    }
}

class User {
    private userInfo: undefined;

    @genCatchError('无名氏')
    getName() {
        return (this.userInfo as any).name
    }

    @genCatchError('年龄未知')
    getAge() {
        return (this.userInfo as any).age
    }

    @catchError
    getGender() {
        return (this.userInfo as any).gender
    }
}

const yxmg = new User()
yxmg.getName()
yxmg.getAge()
yxmg.getGender()

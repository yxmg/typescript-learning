/**
 *Created by 夜雪暮歌 on 2021/3/20
 **/

// 测试include
// 测试exclude，与includes相同时会报错
// 测试ts-node读取tsconfig.json
// 测试rootDir和outDir （rootDir必须包含执行命令目录下所有TS文件，allowJs的话也包括JS）
// 测试incremental增量编译
//

interface Obj {
    a: string
    b: number
}

const test: string = 'yxmg'
const test1: Obj = { a: '1', b: 1 }
// 测试noImplicitAny 不允许隐式any（红线是因为根目录的tsconfig.json）
const test2 = (testAny) => {
}
// 测试strictNullChecks 赋值null给任意类型 （红线是因为根目录的tsconfig.json）
const test3:object = null
const test4:string = null
const test5:string = ''

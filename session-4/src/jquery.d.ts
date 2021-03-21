/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/
// 定义变量
// declare var $: (readFn: () => void) => void
// 定义函数
interface JqueryInstance {
    html: (html: string) => JqueryInstance
}

// declare 函数重载
declare function $(readFn: () => void): void
declare function $(selector: string): JqueryInstance

// interface 函数重载
// interface Jquery {
//     (readFn: () => void): void
//     (selector: string): JqueryInstance
// }
//
// declare var $: Jquery

// 声明对象
declare namespace $ {
    namespace fn {
        class init {}
    }
}

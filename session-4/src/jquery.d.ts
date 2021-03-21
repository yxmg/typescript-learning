/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/
// 定义变量
// declare var $: (readFn: () => void) => void
// 定义函数
interface JqueryInstance {
    html: (html: string) => {}
}

declare function $(readFn: () => void): void
declare function $(selector: string): JqueryInstance

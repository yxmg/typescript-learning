/*
 * @Description: 工具函数
 * @Author: 管铭钊
 * @Date: 2021/3/18
 */

// export
interface DateMap {
    [prop: string]: number
}

export const dateFormat = (date: (Date | number) = new Date(), format: string = 'yyyy-MM-dd hh:mm:ss') => {
    if (!date) {
        return
    }
    date = new Date(date)
    // 获取当前年月日时分秒
    const dateMap: DateMap = {
        y: date.getFullYear(),
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
    }
    // 解析format并组装数据
    Object.keys(dateMap).forEach(key => {
        const datePartStr = padZero(String(dateMap[key]), key === 'y' ? 4 : 2)
        for (let i = 0; i < datePartStr.length; i++) {
            format = format.replace(key, datePartStr[i])
        }
    })
    return format
}

const padZero = (str: string, length = 2) => {
    if (!str) {
        return str
    }
    const zero = new Array(length).fill('0').join('')
    return (zero + str).substr(str.length)
}

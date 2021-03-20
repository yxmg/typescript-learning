/**
 *Created by 夜雪暮歌 on 2021/3/20
 **/
// 场景：后端枚举值对应状态渲染
function getTagTitle(status: number) {
    if (status === 1) {
        return 'online'
    } else if (status === 2) {
        return 'offline'
    } else if (status === 3) {
        return 'deleted'
    }
}

console.log(getTagTitle(1), "getTagTitle(1)")

// 使用enum优化
enum Status {
    online = 1,
    offline = 2,
    deleted = 3
}

function getTagTitleByEnum(status: number) {
    return Status[status]
}

console.log(getTagTitleByEnum(1), "getTagTitleByEnum(1)")


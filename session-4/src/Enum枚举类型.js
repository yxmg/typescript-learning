"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/20
 **/
// 场景：后端枚举值对应状态渲染
function getTagTitle(status) {
    if (status === 1) {
        return 'online';
    }
    else if (status === 2) {
        return 'offline';
    }
    else if (status === 3) {
        return 'deleted';
    }
}
console.log(getTagTitle(1), "getTagTitle(1)");
// 使用enum优化
var Status;
(function (Status) {
    Status[Status["online"] = 1] = "online";
    Status[Status["offline"] = 2] = "offline";
    Status[Status["deleted"] = 3] = "deleted";
})(Status || (Status = {}));
function getTagTitleByEnum(status) {
    return Status[status];
}
console.log(getTagTitleByEnum(1), "getTagTitleByEnum(1)");

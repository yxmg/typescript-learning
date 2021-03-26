"use strict";
/*
 * @Description: 工具函数
 * @Author: 管铭钊
 * @Date: 2021/3/18
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonResponse = exports.dateFormat = void 0;
var dateFormat = function (date, format) {
    if (date === void 0) { date = new Date(); }
    if (format === void 0) { format = 'yyyy-MM-dd hh:mm:ss'; }
    if (!date) {
        return;
    }
    date = new Date(date);
    // 获取当前年月日时分秒
    var dateMap = {
        y: date.getFullYear(),
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
    };
    // 解析format并组装数据
    Object.keys(dateMap).forEach(function (key) {
        var datePartStr = padZero(String(dateMap[key]), key === 'y' ? 4 : 2);
        for (var i = 0; i < datePartStr.length; i++) {
            format = format.replace(key, datePartStr[i]);
        }
    });
    return format;
};
exports.dateFormat = dateFormat;
var padZero = function (str, length) {
    if (length === void 0) { length = 2; }
    if (!str) {
        return str;
    }
    var zero = new Array(length).fill('0').join('');
    return (zero + str).substr(str.length);
};
var getJsonResponse = function (data, errMsg) {
    if (errMsg) {
        return { success: false, errMsg: errMsg, data: data };
    }
    return { success: true, data: data };
};
exports.getJsonResponse = getJsonResponse;

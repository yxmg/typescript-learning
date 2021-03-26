"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/
var Programmer = /** @class */ (function () {
    function Programmer(info) {
        this.info = info;
    }
    Programmer.prototype.getInfoByKey = function (key) {
        return this.info[key];
    };
    return Programmer;
}());
var yxmg = new Programmer({
    name: 'yxmg',
    age: 24,
    gender: 'male'
});
var pName = yxmg.getInfoByKey('name');
var age = yxmg.getInfoByKey('age');
var gender = yxmg.getInfoByKey('gender');

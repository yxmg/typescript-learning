"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/
var jquery_1 = __importDefault(require("jquery"));
jquery_1.default(function () {
    jquery_1.default('body').html('<div>Hello World!</div>');
    new jquery_1.default.fn.init();
});

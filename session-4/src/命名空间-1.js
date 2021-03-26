"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/
/// <reference path="./命名空间-2.ts">
var HomePage;
(function (HomePage) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    HomePage.Page = Page;
})(HomePage || (HomePage = {}));

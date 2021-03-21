"use strict";
/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/
var HomePage;
(function (HomePage) {
    var Page = /** @class */ (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    HomePage.Page = Page;
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerText = 'This is a Header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = 'This is a Content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerText = 'This is a Footer';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
})(HomePage || (HomePage = {}));

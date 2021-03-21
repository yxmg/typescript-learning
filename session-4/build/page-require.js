define("\u547D\u540D\u7A7A\u95F4-require-2", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Footer = exports.Content = exports.Header = void 0;
    /**
     *Created by 夜雪暮歌 on 2021/3/21
     **/
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerText = 'This is a Header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = 'This is a Content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerText = 'This is a Footer';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("\u547D\u540D\u7A7A\u95F4-require-1", ["require", "exports", "\u547D\u540D\u7A7A\u95F4-require-2"], function (require, exports, _____require_2_1) {
    "use strict";
    exports.__esModule = true;
    var Page = /** @class */ (function () {
        function Page() {
            new _____require_2_1.Header();
            new _____require_2_1.Content();
            new _____require_2_1.Footer();
        }
        return Page;
    }());
    exports["default"] = Page;
});

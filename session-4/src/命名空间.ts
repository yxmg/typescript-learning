/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/
namespace HomePage {
    export class Page {
        constructor() {
            new Header()
            new Content()
            new Footer()
        }
    }

    class Header {
        constructor() {
            const ele = document.createElement('div')
            ele.innerText = 'This is a Header'
            document.body.appendChild(ele)
        }
    }

    class Content {
        constructor() {
            const ele = document.createElement('div')
            ele.innerText = 'This is a Content'
            document.body.appendChild(ele)
        }
    }

    class Footer {
        constructor() {
            const ele = document.createElement('div')
            ele.innerText = 'This is a Footer'
            document.body.appendChild(ele)
        }
    }
}



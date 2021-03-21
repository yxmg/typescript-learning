/**
 *Created by 夜雪暮歌 on 2021/3/21
 **/
export class Header {
    constructor() {
        const ele = document.createElement('div')
        ele.innerText = 'This is a Header'
        document.body.appendChild(ele)
    }
}

export class Content {
    constructor() {
        const ele = document.createElement('div')
        ele.innerText = 'This is a Content'
        document.body.appendChild(ele)
    }
}

export class Footer {
    constructor() {
        const ele = document.createElement('div')
        ele.innerText = 'This is a Footer'
        document.body.appendChild(ele)
    }
}

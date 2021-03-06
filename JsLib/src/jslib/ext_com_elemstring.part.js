﻿// ====================================================================
// 生成dom元素字符串,主要用于拼接html字符串的情况
// ====================================================================
((win) => {

    let elems = ['div', 'span', 'a', 'p', 'table','tr', 'th', 'td', 'option', 'ul', 'li'];
    let domStr = {};
    for (var i = 0, len = elems.length; i < len; i++) {
        let elem = elems[i]
        domStr[elem] = (text, classN, attrkv) => {
            if (typeof classN == 'object')
                return elestring(elem, text, null, classN)
            return elestring(elem, text, classN, attrkv)
        }
    }
    function elestring(elemN, text, classN, attrkv) {
        let cls = classN ? ` class="${classN}"` : '';
        let attrs = '';
        if (attrkv) {
            for (var k in attrkv) {
                attrs += ` ${k}="${attrkv[k]}"`;
            }
        }
        //
        if (text.indexOf(':for') == 0) {
            let txtarr = text.substr(4).split('|');
            let html = '';
            for (var i = 0, len = txtarr.length; i < len; i++) {
                let txt = txtarr[i];
                html += `<${elemN}${cls}${attrs}>${txt}</${elemN}>`;
            }
            return html;
        }
        return `<${elemN}${cls}${attrs}>${text}</${elemN}>`;
    }
    //
    win.lib.dom = domStr;
})(window);
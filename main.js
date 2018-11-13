const e = (sel) => document.querySelector(sel)

const editor = () => {
    //editor 
    var editor = ace.edit("editor")
    editor.setTheme("ace/theme/monokai")
    // 这个命令会访问 https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.1/mode-markdown.js
    editor.session.setMode("ace/markdown")
    // 实例 md
    var md = new Remarkable()
    // 在 editor change 的时候，把里面的 value 
    // 用 md 转为 html， 并插入 id-show 里
    editor.session.on('change', function (delta) {
        var v = editor.getValue()
        var html = md.render(v)
        document.querySelector('#show').innerHTML = html
    })

}

// 打印 pdf
const down = function () {
    var btn = e('#save')
    btn.addEventListener('click', function (event) {
        console.log('click')
        // 删掉 btn 避免在文档中出现
        event.target.remove()
        // 调用浏览器打印页面
        window.print()
        // 把 btn 加回来
        console.log(event.target)
        e('body').appendChild(event.target)
    })
}
down()

const _main = () => {
    editor()
    down()
}

_main()
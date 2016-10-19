var chushi = function( ) {
    var html = `<div class="notePad">
        <span style="display: block; height: 30px"></span>
        <div class="notePad_form">
            <input  id="id-input-form" type="text"   value="-NotePad-"> <br>
            <button id="id-button-add" type="button" >　Add　</button>
        </div>
        <div id="id-div-cont">

        </div>
    </div>`
    var omg = document.querySelector ( ".top" )
    omg.insertAdjacentHTML( 'afterend', html )
}
var bindEventAdd = function() {
    var Event = function() {
        var input_Value = document.querySelector ( "#id-input-form" )[ 'value' ]
        // 获得 输入框 id-input 的 value 值
        var notepad_Cont = document.querySelector ( "#id-div-cont" )
        var Time = nowTime()
        var temp =
        `<div class="notePad_one">
            <span   class="change"contenteditable="false">${Time}</span>
            <br>
            <span   class="change"contenteditable="false">${input_Value}</span>
            <button class="done">完成</button>
            <button class="del" >删除</button>
            <button class="bianji">编辑</button>
        </div>`
        // 获得 包含 value 的 html 代码
        notepad_Cont.insertAdjacentHTML( 'beforeend', temp )
        // 插入 包含 value 的 html 代码 到 父元素 末尾
        var note = {
            'value' : input_Value,
            'time'  : Time
        }
        // 生成一个 note
        noteList.push(note)
        // 添加 到  noteList
        save()
        // 保存 到 本地
    }
    var button_add = document.querySelector ( "#id-button-add" )
    // 获取 按钮
    button_add.addEventListener( 'click', Event, false )
    // 绑定 事件 Event
}
var bindEventButton = function() {
    var Event = function( event ) {
        if (event.target.classList.contains( 'del' ) ) {
        // 触发事件 del
            var Fu = event.target.parentElement
            // 获取 父元素
            var index = indexOf(event.target.parentElement)
            // 获取 下标
            Fu.remove( )
            // 删除 父元素
            noteList.splice(index, 1)
            // 删除 列表元素
            save()
        }
        else if (event.target.classList.contains( 'done' )) {
            // 按钮 完成
            var Fu = event.target.parentElement
            // 获取 父元素
            ClassOFF( Fu, 'doneStyle' ) }
            // 操作 父元素
    }
    //事件 Event
    var Cont = document.querySelector('#id-div-cont')
    //获取 需要操作的 父元素
    Cont.addEventListener('click', Event, false )
    //绑定 事件 Event
}
var bindEventBianji = function() {
    var Event = function( event ) {
        if ( event.target.classList.contains( 'bianji' ) ) {
            // 触发 bianji
            var span = event.target.parentElement.children[2]
            // 获取 元素 span [ ]里面是下标 在temp里数
            span.setAttribute('contenteditable', 'true')
            // 设置 span 可编辑
            span.focus()
            // 获得 焦点
        }
    }
    var button = document.querySelector ( "#id-div-cont" )
    // 获取 元素 或 父元素
    button.addEventListener( 'click', Event, false )
    // 事件 绑定 或 委托
}
var bindEventBlur = function() {
    // log('bind event blur function')
    var Event = function(event) {
        if (event.target.classList.contains('change')) {
            var index = indexOf(event.target.parentElement)
            noteList[index]['value'] = event.target.innerHTML
            save()
            var span = event.target.parentElement.children[2]
            // 获取 元素 span
            span.setAttribute('contenteditable', 'false')
            // 设置 span 不可编辑
        }
    }
    var Cont = document.querySelector('#id-div-cont')
    Cont.addEventListener('blur', Event, true)
}
var bindEventEnter = function() {
    var Event = function(event) {
        if(event.key === 'Enter') {
            log('按了回车')
            event.target.blur()
            //失去焦点
            event.preventDefault()
            // 阻止默认行为的发生, 也就是不插入回车 未实现
        }
    }

    var Cont = document.querySelector('#id-div-cont')
    Cont.addEventListener('keydown', Event, false)}
var bindEvents = function() {
    bindEventAdd()
    // 添加按钮
    bindEventButton()
    // 完成按钮和删除按钮
    bindEventBlur()
    // 文本框失去焦点后保存
    bindEventBianji()
    // 编辑按钮
    // bindEventEnter() 未实现
    // 文本框输入 todo 按回车保存
}
//绑定事件 结束。
var indexOf = function(element) {
    var noteList = element.parentElement.children
    for (var i = 0; i < noteList.length; i++) {
        var e = element.parentElement.children[i]
        if (e === element) {
            return i
        }
    }
}
//返回 下标
var ClassOFF = function( Fu, CalssName ) {
    var Class = Fu.classList
    if (Class.contains(CalssName)) {
        Class.remove(CalssName)
    } else {
        Class.add(CalssName)
    }
}
//Class开关
var nowTime = function() {
    var d = new Date()
    var month = d.getMonth() + 1
    var date = d.getDate()
    var hours = d.getHours()
    var minutes = d.getMinutes()
    var seconds = d.getSeconds()
    var timeString = `北京时间：${month}月${date}日 ${hours}时${minutes}分${seconds}秒`
    return timeString
}
//返回 现在时间
var save = function() {
    localStorage.noteList = JSON.stringify(noteList)
}
//保存 noteList
var load = function() {
    return JSON.parse(localStorage.noteList)
}
//读取 noteList
var AddNote = function(note) {
    var notepad_Cont = document.querySelector ( "#id-div-cont" )
    var Time = note['time']
    var input_Value = note['value']
    var temp =
    `<div class="notePad_one">
        <span   class="change"contenteditable="false">${Time}</span>
        <br>
        <span   class="change"contenteditable="false">${input_Value}</span>
        <button class="done">完成</button>
        <button class="del" >删除</button>
        <button class="bianji">编辑</button>
    </div>`
    // 获得 包含 value 的 html 代码
    notepad_Cont.insertAdjacentHTML( 'beforeend', temp )
}
// 添加 数据
var initNotes = function() {
    noteList = load()
    for (var i = 0; i < noteList.length; i++) {
        var note = noteList[i]
        AddNote(note)
    }
    // 读取数据
}
// 读取数据 初始化
var noteList = []
//初始化 数据列表
var __init__ = function() {
    chushi()       //初始化 页面
    initNotes()    //读取数据
    bindEvents()   //绑定 事件
}

__init__()

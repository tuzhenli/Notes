// 2016/10/14
//
// ============
// 作业 13
//
//
// 本次作业如果做不出来, 可以大家一起讨论一下
// ============
//


// 作业 1
//
// 实现一个 GuaAlert 函数, 如下
var GuaAlert = function(title, message) {
    /*
    title 是 string
    message 是 string

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题 和 message 作为信息
    还包含一个 OK 按钮
    点击 OK 按钮关闭弹窗
    */
    var t = `
    <div class='modal-container modal-remove'>
        <div class='modal-mask'></div>
        <div class="modal-alert vertical-center">
            <div class="modal-title">
                ${title}
            </div>
            <div class="modal-message">
                ${message}
            </div>
            <div class='modal-control'>
                <button class="modal-button" type="button" name="button">ok</button>
            </div>
        </div>
    </div>
    `
    $('body').append(t)
    // css
    var css = `
    <style class="modal-remove">
        .modal-container {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        .modal-mask {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.5;
        }
        .modal-alert {
            margin: 0 auto;
            width: 200px;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            font-size: 27px;
            background: lightblue;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .modal-button {
            width: 100%;
            height: 100%;
            font-size: 22px;
            border: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform: translateY(-50%);
        }
    </style>
    `
    $('head').append(css)
    // event
    $('.modal-button').on('click', function(){
        console.log('click ok')
        $('.modal-remove').remove()
    })
}


// 作业 2
//
var GuaAlert2 = function(title, message, callback) {
    /*
    title 是 string
    message 是 string
    callback 是一个接受一个 bool 类型参数的函数

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题 和 message 作为信息
    还包含一个 OK 按钮 和一个 Cancel 按钮
    点击 OK 按钮关闭弹窗, 调用 callback(true)
    点击 Cancel 按钮关闭弹窗, 调用 callback(false)
    */
    var t = `
    <div class='modal-container modal-remove'>
        <div class='modal-mask'></div>
        <div class="modal-alert vertical-center">
            <div class="modal-title">
                ${title}
            </div>
            <div class="modal-message">
                ${message}
            </div>
            <div class='modal-control'>
                <button class="modal-button" type="button" data-type="cancel">Cancel</button>
                <button class="modal-button" type="button" data-type="ok">Ok</button>
            </div>
        </div>
    </div>
    `
    $('body').append(t)
    // css
    var css = `
    <style class="modal-remove">
        .modal-container {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        .modal-mask {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.5;
        }
        .modal-alert {
            margin: 0 auto;
            width: 200px;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            font-size: 27px;
            background: lightblue;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .modal-control {
            font-size: 0;
        }
        .modal-button {
            width: 50%;
            height: 100%;
            font-size: 22px;
            border: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform: translateY(-50%);
        }
    </style>
    `
    $('head').append(css)
    // event
    $('.modal-button').on('click', function(event){
        console.log('click button')
        var type = $(event.target).data('type')
        if (type === 'cancel') {
            callback(false)
        } else {
            callback(true)
        }
        $('.modal-remove').remove()
    })
}


// 作业 3
//
var GuaPrompt = function(title, callback) {
    /*
    title 是 string
    callback 是一个如下的函数
    function(clickOk, input) {
        // clickOk 是一个 bool 表明点击的是 OK 还是 Cancel
        // input 是 string
    }

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题
    包含一个 input 让用户输入信息
    还包含一个 OK 按钮 和一个 Cancel 按钮
    点击 OK 按钮关闭弹窗, 调用 callback(true, 输入的内容)
    点击 Cancel 按钮关闭弹窗, 调用 callback(false)
    */
    var t = `
    <div class='modal-container modal-remove'>
        <div class='modal-mask'></div>
        <div class="modal-alert vertical-center">
            <div class="modal-title">
                ${title}
            </div>
            <div class="modal-message">
                <input class='modal-input' type='text'>
            </div>
            <div class='modal-control'>
                <button class="modal-button" type="button" data-type="cancel">Cancel</button>
                <button class="modal-button" type="button" data-type="ok">Ok</button>
            </div>
        </div>
    </div>
    `
    $('body').append(t)
    // css
    var css = `
    <style class="modal-remove">
        .modal-container {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        .modal-mask {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.5;
        }
        .modal-alert {
            margin: 0 auto;
            width: 200px;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            font-size: 27px;
            background: lightblue;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .modal-input {
            width: 100%;
        }
        .modal-control {
            font-size: 0;
        }
        .modal-button {
            width: 50%;
            height: 100%;
            font-size: 22px;
            border: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform: translateY(-50%);
        }
    </style>
    `
    $('head').append(css)
    // event
    $('.modal-button').on('click', function(event){
        console.log('click button')
        var type = $(event.target).data('type')
        if (type === 'cancel') {
            callback(false)
        } else {
            var input = $('.modal-input').val()
            callback(true, input)
        }
        $('.modal-remove').remove()
    })
}


// 作业 4
//
var buttonTemplate = function(title, index) {
    var t = `
        <button class='modal-action-button' data-index="${index}">${title}</button>
    `
    return t
}

var GuaActions = function(title, actions, callback) {
    /*
    title 是 string
    actions 是一个包含 string 的数组
    callback 是一个如下的函数
    function(index) {
        // index 是下标, 具体如下
        // index 如果是 -1 表明用户点击了 cancel
    }

    这个函数生成一个弹窗页面
    弹窗包含 title 作为标题
    actions 里面的 string 作为标题生成按钮
    弹窗还包含一个 Cancel 按钮
    点击按钮的时候, 调用 callback(index)
    */
    var buttons = []
    for (var i = 0; i < actions.length; i++) {
        var a = actions[i]
        buttons.push(buttonTemplate(a, i))
    }
    var actionButtons = buttons.join('')
    var t = `
    <div class='modal-container modal-remove'>
        <div class='modal-mask'></div>
        <div class="modal-alert vertical-center">
            <div class="modal-title">
                ${title}
            </div>
            <div class="modal-message">
                ${actionButtons}
            </div>
            <div class='modal-control'>
                <button class="modal-button modal-action-button" type="button" data-index="-1">Cancel</button>
            </div>
        </div>
    </div>
    `
    $('body').append(t)
    // css
    var css = `
    <style class="modal-remove">
        .modal-container {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        .modal-mask {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.5;
        }
        .modal-alert {
            margin: 0 auto;
            width: 200px;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            font-size: 27px;
            background: lightblue;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .modal-input {
            width: 100%;
        }
        .modal-control {
            font-size: 0;
        }
        button {
            width: 100%;
        }
        .modal-button {
            height: 100%;
            font-size: 22px;
            border: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform: translateY(-50%);
        }
    </style>
    `
    $('head').append(css)
    // event
    $('.modal-action-button').on('click', function(event){
        console.log('click button')
        var index = $(event.target).data('index')
        callback(index)
        $('.modal-remove').remove()
    })
}

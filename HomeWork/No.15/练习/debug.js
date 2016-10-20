// 2016/10/19
//
// ============
// 作业 15
//
//
// 本次作业没有提示的地方需要自行搜索
// 别忘了用 github 管理作业的进度
// ============
//



// 作业 1
// options 是一个包含 string 的数组
// 本函数对每个 string 生成一个复选框和文本
// append 到 body 中
// 示意图如下
//
// +-+
// | | string
// +-+
//
// 实现函数 GuaOptions1, 功能见注释描述

var str = ['卡卡罗特','李青','放逐之刃','疾风剑豪','诺克萨斯之手']

var GuaOptions1 = function(options) {
    $(options).each( function(i, e) {
        var temp = `
            <div><label><input type="checkbox">${e}</label></div>`
        $('.hero-fuxuan').append(temp)
    })
}
// GuaOptions1(str)

// 作业 2
// options 是一个包含 string 的数组
// 本题和作业 1 一样的功能 只是多了 2 个按钮
// 全选 和 反选
//
var GuaOptions2 = function(options) {
    $(options).each( function(i, e) {
        var temp = `
            <div><label><input class="fuxuan" type="checkbox">${e}</label></div>`
        $('.hero-fuxuan').append(temp)
    })
    allOptions()
}
// GuaOptions2(str)


// 作业 3
// options 是一个包含如下 object 的数组
// text 是文本描述
// checked 是布尔值, 表示是否打勾
// {
// 	'text': 'string',
//     'checked': true,
// }
// 本题和作业 2 一样的功能, 但是参数变了
// 并且要求在初始化的时候要按照相应的值对相应的复选框打勾
//
var str2 = [
    {text:'卡卡罗特', checked: true},
    {text:'李青', checked: false},
    {text:'放逐之刃', checked: false},
    {text:'疾风剑豪', checked: false},
    {text:'诺克萨斯之手', checked: false},
    {text:'面对疾风吧', checked: true},
]

var GuaOptions3 = function(options) {
    $(options).each( function(i, e) {
        var xuan = ""
        if (e.checked) {
            xuan = "checked"
        }
        var temp = `
            <div><label><input ${xuan} class="fuxuan" type="checkbox" data-str='${e.text}' >${e.text}</label></div>`
        $('.hero-fuxuan').append(temp)
    })
    allOptions()
}
// GuaOptions3(str2)

// 作业 4
// 本题和作业 3 一样的功能
// 但是多了 2 个按钮 save 和 load
// save 按钮点击的时候会保存当前的 options 状态到 localStorage(用 JSON)
// load 按钮点击的时候会从 localStorage 中读取保存的信息并更新界面
//
var allOptions = function() {
    var quanxuan = `
    <style>
    .button-small { font-size: 85%; }
    </style>
    <button class="quanxuan button-small pure-button pure-button-primary">全选</button>
    <button class="fanxuan  button-small pure-button pure-button-primary">反选</button>
    <button class="save-xuan button-small pure-button pure-button-primary">保存</button>
    <button class="load-xuan button-small pure-button pure-button-primary">读取</button>`
    $('.Cont').append(quanxuan)
    $('.quanxuan').on('click',function() {
        $('.fuxuan').each( function(i, e) {
            e.checked = true
            str3[i].checked = true

        })
    })
    $('.fanxuan' ).on('click',function() {
        $('.fuxuan').each( function(i, e) {
            if (e.checked) {
                e.checked = false
                str3[i].checked = false
                }else {
                e.checked = true
                str3[i].checked = true
            }
        })
    })
}
//全选按钮

var str3 = [
    {text:'卡卡罗特', checked: false},
    {text:'李青', checked: false},
    {text:'放逐之刃', checked: false},
    {text:'疾风剑豪', checked: false},
    {text:'诺克萨斯之手', checked: false},
    {text:'面对疾风吧', checked: false},
]

var GuaOptions4 = function(options) {
    GuaOptions3(options)
    $('.hero-fuxuan').on('click', '.fuxuan', function( event ) {
        var str  = $($(event.target)[0]).data('str')
        var bool = event.target.checked
        $(str3).each( function(i, e) {
            if (e.text === str) {
                e.checked = bool
            }
        })
    })
    $('.load-xuan').on('click', function() {
        str3 = JSON.parse( localStorage[ 'fuXuan' ] )
        $('.fuxuan').each( function(i, e) {
            e.checked = str3[i].checked
        })
    })
    $('.save-xuan').on('click', function() {
         localStorage[ 'fuXuan' ] = JSON.stringify( str3 )
         log(str3)
    })

}

if ( localStorage[ 'fuXuan' ] !== "undefined") {
    str3 = JSON.parse( localStorage[ 'fuXuan' ] )
}
GuaOptions4(str3)

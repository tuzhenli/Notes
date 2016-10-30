// 下面开始都是 DOM API 相关练习
// ====
// 实现一个登录页, 有 2 个标签分别是用户名输入框和登录按钮
// 给登录按钮绑定一个 click 事件
// 检查用户名是否符合如下规则
// 1，第一位是字母
// 2，只能包含字母、数字、下划线
// 3，只能字母或数字结尾
// 4，最小长度2
// 5，最大长度10
//
// 如果符合规则, log '检查合格'
// 如果不符合, 在登录按钮后插入一个红色 h1 标签
// 内容是 '用户名错误'
//
// 需要补全的代码自行解决
// 作业 17

var chushi = function( ) {
    var html = `<div class="content">
        <span style="display: block; height: 10px"></span>
        <div class="user_name">
            用户名<br><input id="id-input-user-name" type="text" value="">
        </div>
        <div class="user_password">
            密　码<br><input id="id-input-user_password" type="password" >
        </div>
        <div class="user_login">
            <button type="button" name="button">　登　陆　</button>
        </div>
        <span id="id-OK" style="display: block; height: 10px"></span>
    </div>`
    var omg = document.querySelector ( ".top" )
    omg.insertAdjacentHTML( 'afterend', html )
}
//初始化
var isokUesr = function( ) {
    var result = function(event) {
        var value = event.target.value
        var rule1 = value[0].search( /[A-Z]|[a-z]/img )
        // 1，第一位是字母
        var rule2 = function() {
            for (i of value) {
                if ( i.search( /[A-Z]|[0-9]|_|[a-z]/img ) === -1 ) {
                    return false
                }
            } return true
        }
        // 2，只能包含字母、数字、下划线
        var rule3 = value.slice(-1).search( /[0-9]|[A-Z]|[a-z]/img )
        // 3，只能字母或数字结尾
        var rule45 = value.length < 2 || value.length > 10
        // 4，最小长度 2    //5，最大长度 10
        var result = true
        if ( rule1 !== 0 ) {
            log('规则1 不通过')
            result = false
        }
        if ( !rule2() ) {
            log('规则2 不通过')
            result = false
        }
        if ( rule3 !== 0 ) {
            log('规则3 不通过')
            result = false
        }
        if ( rule45 ) {
            log('规则4 5 不通过')
            result = false
        } return result
    }
    //测试函数
    var Event = function( ) {
        var omg = document.querySelector( '#id-OK' )
        var before = document.querySelector( '.class-before' )
        if ( before !== null ) { //前情提要
            before.remove()
        }
        if ( result(event) ) {   //如果合格
            omg.insertAdjacentHTML( 'afterend', `<div class="class-OK class-before" >用户名　合格</div>` )
        } else {
            omg.insertAdjacentHTML( 'afterend', `<div class="class-NO class-before" >用户名　不合格</div>` )
        }
    }
    var userName = document.querySelector( "#id-input-user-name" )
    // 获取 元素 或 父元素
    userName.addEventListener( 'blur', Event, false )
    // 事件 绑定 或 委托
}
//检查用户名是否合格

var __init__ = function( ) {
    chushi()
    isokUesr()
}
__init__()

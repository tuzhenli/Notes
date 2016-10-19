// 2016/10/09
//
// ============
// 作业 11
//
//


// 这次作业分 2 块
//
// 1, 出一份到 11 课为止学习的内容笔记, 注明自己掌握得不够好的东西
//
// 2, 在 vip.cocode.cc:3000/ 可以写代码, 实现一个用 ajax 和后端交互数据的 todo
//
// '''
// todo 后端程序提供了 4 个 API, 说明如下
//
//
var ajaxGet = function( ku ) {
    var r = new XMLHttpRequest()        // 创建 AJAX 对象
    r.open( 'GET', ku.url, true )       // 设置 请求方法 地址
    r.onreadystatechange = function() {
        if (r.readyState === 4) {       // 完成
            ku.callback(r.response)     // 注册 响应函数 结果
        }
    }
    r.send()                            // 发送 请求
}

var ajax = function( ku ) {
    var r = new XMLHttpRequest( )      // 创建 AJAX 对象
    r.open( ku.method, ku.url, true )  // 设置 请求方法 地址
    r.setRequestHeader('Content-Type', ku.ContentType)
    r.onreadystatechange = function() {
        if (r.readyState === 4) {      // 完成
            ku.callback(r.response)    // 注册 响应函数 传入结果
        }
    }
    r.send( ku.data )                  // 发送 请求
}




var AjaxApi = function(){
    this.baseUrl = 'http://vip.cocode.cc:3000/todo/'
    this.qq = '616615503'
}

AjaxApi.prototype.get = function (path, callback) {
    var url = this.baseUrl + this.qq + path
    var r = new XMLHttpRequest()        // 创建 AJAX 对象
    r.open( 'GET', url, true )          // 设置 请求方法 地址
    r.onreadystatechange = function() {
        if (r.readyState === 4) {       // 完成
            callback(r.response)        // 回调 函数
        }
    }
    r.send()                            // 发送 请求
}
AjaxApi.prototype.post = function (path, data, callback) {
    var url = this.baseUrl + this.qq + path
    var r = new XMLHttpRequest( )      // 创建 AJAX 对象
    r.open( 'POST', url, true )        // 设置 请求方法 地址
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        if (r.readyState === 4) {      // 完成
            callback(r.response)       // 注册 响应函数 传入结果
        }
    }
    var data = {
        task: data
        id:601
    }
    var data = JSON.stringify(data)
    r.send( data )                     // 发送 请求
}

AjaxApi.prototype.all = function(callback) {
    var path = '/all'
    this.get(path, callback)
}
AjaxApi.prototype.add = function(data, callback) {
    var path = '/add'
    this.post(path, data, callback)
}
AjaxApi.prototype.updata = function(data, id, callback) {
    var path = '/updata/' + id
    this.post(path, data, callback)
}
AjaxApi.prototype.delete = function(id, callback) {
    var path = '/dele/' + id
    this.get(path, callback)
}


var api = new AjaxApi()
var callback = function(response) {
    console.log( JSON.parse(response) )
}

//
// 1, 获得所有的 todo, 返回的是一个数组
//
// GET
// http://vip.cocode.cc:3000/todo/616615503/all
//
var All = function() {
    var ku = {
        url: '/todo/616615503/all' ,
        callback : function(response) {
            console.log(response);
        }
    }
    ajaxGet( ku )
}
// All()
//
// 2, 发送 JSON 格式字符串来创建一个 todo
// 要求设置 Content-Type 为 application/json
//
// POST
// {"task": "study"}
// http://vip.cocode.cc:3000/todo/616615503/add
//
var Add = function (str) {
    var ku = {
        method:         'POST',                     // 请求方法
        url:            '/todo/616615503/add',      // 地址
        ContentType:    'application/json',         // 数据格式
        data: JSON.stringify({
            "task":      str,
        }),
        callback: function(response) {

            console.log('result:', JSON.parse(response) )
            }
        }
    ajax( ku )
}
// Add('大海')
//
// 3, 发送 JSON 格式字符串来更新一个 todo
// 要求设置 Content-Type 为 application/json
//
// POST
// {"task": "study"}
// http://vip.cocode.cc:3000/todo/616615503/update/<todo_id>
//
var Updata = function( id, cont ) {
    var ku = {
        method:         'POST',                     // 请求方法
        url:            `/todo/616615503/update/${id}`,
        ContentType: 'application/json',         // 数据格式
        data: JSON.stringify({
            "task":     cont,
        }),
        callback: function(response) {              // 注册 响应函数
            console.log('result:', response )
        }
    }
    ajax( ku )
}
// Updata( 399, '掏粪')
//
// 4, 删除一个 todo
// GET
// http://vip.cocode.cc:3000/todo/616615503/delete/<todo_id>
//
var Del = function( id ) {
    var ku = {
        url: `/todo/616615503/delete/${id}` ,
        callback : function(response) {
            console.log(response);
        }
    }
    ajaxGet( ku )
}
// All() //全部
// Add( '大海' ) //添加
// Updata( 26, '掏粪' ) //更新
// Del( 1 ) //删除

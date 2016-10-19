// 2016/10/07
//
// ============
// 作业 10
//
//
// 注意, 提示在文件最末尾
// ============
//


// 定义我们的 log 函数
// var log = function() {
//     console.log.apply(console, arguments)
// }


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
// var ensure = function(condition, message) {
//     // 在条件不成立的时候, 输出 message
//     if(!condition) {
//         log('*** 测试失败:', message)
//     }
// }
//举例 range(2, 5) = [2, 3, 4]
var filter = function( def, iterable ) {
    var list = []
    for(var i = 0; i < iterable.length; i++) {
        var a = iterable[i]
        if ( def( a ) ){
            list.push(a)
        }
    } return list
}
//过滤器
var prime = function(n) {
    var range = function( a, b ) {
        var list = []
        for (var i = a; i < b; i++) {
            list.push( i )
            } return list
        }
    var num = range( 0, n + 1 )
    for (i of range( 2, n + 1 )) {
        if ( num[i] === 0 ) {
            continue
        }
        for (k of num.slice( i + 1)) {
            if ( k % i === 0 ) {
                num[k] = 0
            }
        }
    }
    sub = num.slice(2) // 素数 >= 2
    var unZero = function( x ) { return x != 0 }
    return filter( unZero, sub )
}
//返回 n 以内素数

// 作业 1
// n 是 int
// 判断 n 是否是素数(质数)
//
var isPrime = function(n) {
    for ( i of prime(n) ) {
        if (i === n) {
            return true
        }
    } return false
}

// 作业 2
// 返回 100 内的素数列表
//
var primeNumbers = function() {
    return prime(100)
}


// 作业 3
// 给定一个英文句子 str（由空格隔开的单词组成的字符串）
// 返回「将句中所有单词变为有且只有首字母大写的形式」的 string
//
var capString = function(str) {
    var arr = str.split(' ')
    var result = []
    for (i of arr) {
        result.push( i[0].toUpperCase() + i.slice(1).toLowerCase() )
    }
    return result.join(' ')
}
//测试
ensure(capString('mY naMe is yoZoh'),"My Name Is Yozoh",'作业3')

// 作业 4
// 给定一个只包含字母的字符串，返回单个字母出现的次数
// 考察字典的概念和使用
// 返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）
//
// // 可以使用 Object.keys 函数
// var obj = {
//   foo: 1,
//   bar: 2,
// }
// Object.keys(obj)
// ["foo", "bar"]
//
// 参数 "hello"
// 返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
//
var letterCount = function(str) {
    var dict = {}
    for (i of str) {
        dict[i] = 0
    }
    for (i of str) {
        dict[i] += 1
    }
    var result = []
    for ( i of Object.keys(dict) ) {
        result.push([i,dict[i]])
    } return result
}
ensure(letterCount("hello"),[['h', 1], ['e', 1], ['l', 2], ['o', 1]],'作业4')

// 作业 5
// param 是一个 object
// 例子如下
// param 是 {
//     'foo': 1,
//     'bar': 'far',
// }
// 返回如下 string, 顺序不做要求(foo bar 的顺序)
// foo=1&bar=far
//
// 注意, 使用 Object.keys 函数
//
var param = { 'foo': 1, 'bar': 'far', }

var queryFromObject = function(param) {
    var keys = Object.keys(param)
    var result = []
    for ( i of Object.keys(param) ) {
        result.push( `${i}=${param[i]}` )
    } return result.join('&')
}
ensure(queryFromObject({'foo': 1, 'bar': 'far'}),"foo=1&bar=far",'作业5')

// 作业 6
// queryString 是一个 string
// 例子如下
// queryString 是 foo=1&bar=far
// 返回如下 object, 顺序不做要求(foo bar 的顺序)
// {
//     'foo': 1,
//     'bar': 'far',
// }
//
var argsFromQuery = function(queryString) {
    var dict = queryString.split('&')
    var result = {}
    for (i of dict) {
        var k = i.split('=')
        var key = k[0]
        var value = k[1]
        if ( '1234567890'.includes(value) ) {
            value = Number(value)
        }
        result[ key ] = value
    } return result
}
ensure( argsFromQuery("foo=1&bar=far"),{'foo': 1,'bar': 'far',},'作业6' )


// 作业 7
// 利用上课板书, 实现 ajaxGet 函数, 用 GET 方法请求一个 URL
// url 是一个 URL
// callback 是一个函数, 在接受服务器响应后调用并传递参数给它
// 本题不会就放弃
//

var ajaxGet = function( data ) {
    var r = new XMLHttpRequest( )       // 创建 AJAX 对象
    r.open( 'GET', ku.url, true )       // 设置 请求方法 和 地址
    r.onreadystatechange = ku.callback  // 注册 响应函数
    r.send()                            // 发送 请求
}
var ku = {
    url: '/login' ,
    callback : function(event) {
        var target = event.target       // 目标
        if (target.readyState === 4) {  // 完成
            console.log(target.response)
        }
    }
}
ajaxGet( ku )

// 作业 8
// request 是一个 object, 有如下属性
// method, 请求的方法, string
// url, 请求的路径, string
// data, 请求发送的数据, 如果是 GET 方法则没这个值, string
// callback, 响应回调, function
//
// 本题不会就放弃, 本题带了一个用法在下方
//
var ajax = function(request) {
    var r = new XMLHttpRequest( )
    r.open( ku.method, ku.url, true )
    r.setRequestHeader('Content-Type', ku['Content-Type'] )
    r.onreadystatechange = ku.callback
    r.send( ku.data )
}
var ku = {
    method:         'POST',            // 请求方法
    url:            '/login',          // 地址
    'Content-Type': 'application/json',// 数据格式
    data: JSON.stringify({
        username:   'abc',             // 用户
        password:   '123',             // 密码
    }),
    callback: function(event) {        // 注册 响应函数
        var target = event.target      // 目标
        if (target.readyState === 4) {
            response = JSON.parse( target.response )
        console.log('result:', response )
        }
    }
}
ajax( ku )

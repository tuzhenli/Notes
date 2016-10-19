// 2016/10/05
//
// 作业 9
// ========
//

// var log = function() {
//     console.log.apply(console, arguments)
// }


// ====
// 测试
// 自行实现 ensureEqual, arrayEquals 等函数
// 按照上课所说, 最好把测试放在额外的文件中, 隔离测试和代码
// ====
//


// 作业 1
// a 是一个 array
// 返回一个 array, 包含了 a 中所有元素, 且不包含重复元素
// 例如 a 是 [1, 2, 3, 1, 3, 5]
// 返回 [1, 2, 3, 5]
//
var unique = function(a) {
    var jihe = []
    var chong = []
    for (var i = 0; i < a.length; i++) {
        var b = JSON.stringify( jihe )
        var c = String( a[i] )
        if ( !b.includes( c ) ) {
            jihe.push(Number(c))
        } else {
            chong.push(Number(c))
        }
    } return jihe
}

// 注意, 要自行实现 arrayEquals 来判断两个数组是否相等


// 作业 2
// a b 都是 array
//
// 返回一个 array, 里面的元素是同时出现在 a b 中的元素
// 这个 array 中不包含重复元素
//
var ique = function(a) {
    var jihe = []
    var chong = []
    for (var i = 0; i < a.length; i++) {
        var b = JSON.stringify( jihe )
        var c = String( a[i] )
        if ( !b.includes( c ) ) {
            jihe.push(Number(c))
        } else {
            chong.push(Number(c))
        }
    } return chong
}
var intersection = function(a, b) {

    var c = ( unique(a).concat(unique(b)) ) // a+b
    return unique( ique(c) )
}

// 作业 3
// a b 都是 array
//
// 返回一个 array, 里面的元素是所有出现在 a b 中的元素
// 这个 array 中不包含重复元素
//
var union = function(a, b) {
    var c = ( a.concat(b) )
    return unique( c )
}


// 作业 4
// a b 都是 array
//
// 返回一个 array, 里面的元素是
// 所有在 a 中有 b 中没有的元素
// 这个 array 中不包含重复元素
//
var difference = function(a, b) {
    b = JSON.stringify(unique(b)) //[2,3,5,6]
    var result = []
    for (var i = 0; i < a.length; i++) {
        if ( !b.includes( String(a[i]) ) ) {
            result.push( a[i] )
        }
    } return unique(result)
}


// 作业 5
// a b 都是 array
//
// 返回一个 array, 里面的元素是
// 所有在 a b 中的非公共元素
// 这个 array 中不包含重复元素
//
var differenceAll = function(a, b) {
    var c = unique(a).concat(unique(b)) //[1, 3, 2, 4, 2, 3, 5, 6]
    var chong = JSON.stringify(ique(c))
    var result = []
    for (var i = 0; i < c.length; i++) {
        if (!chong.includes(c[i])) {
            result.push(c[i])
        }
    } return result
}


// 作业 6
// a b 都是 array
//
// 检查是否 a 中的每个元素都在 b 中出现
// 返回 bool
//
var isSubset = function(a, b) {
    b = JSON.stringify(unique(b)) //[2,3,5,6]
    var result = 'none'
    for (var i = 0; i < a.length; i++) {
        if ( b.includes(a[i]) ) {
            result = true
        } else {
            result = false
        }
    } return result
}


// 下面的题目都是 DOM 操作题目
// =====
//
// 作业 7
// element 是一个标签
// html 是一段 html 字符串
// 把 html 作为子元素插入到 element 的末尾
// 上课一直在用这个函数
//
var appendHtml = function(element, html) {
    element.insertAdjacentHTML( 'beforeend', html )
    // 插入 包含 value 的 html 代码 到 父元素 末尾
}

// 作业 8
// element 是一个标签
// eventName 是一个 string, 表示事件的名字
// callback 是一个函数
// 用法如下, 假设 button 是一个标签
// bindEvent(button, 'click', function(){
// })
//
var bindEvent = function(element, eventName, callback) {
    element.addEventListener( eventName, callback, false )
}

// 作业 9
// element 是一个标签
// eventName 是一个 string, 表示事件的名字
// callback 是一个函数
// responseClass 是一个字符串
//
// 在 element 上绑定一个事件委托
// 只会响应拥有 responseClass 类的元素
//
var bindEventDelegate = function(element, eventName, callback, responseClass) {
    var Event = function( event ) {
        if (event.target.classList.contains( responseClass ) ) {
        // 监听 事件 responseClass
            callback()
        }
    }
    element.addEventListener( eventName, Event, false )
    // 事件 绑定 或 委托
}


// 作业 10
// selector 是一个 string, 选择器, 有如下三种取值
//     1, 标签选择器, 如 'div'
//     2, class 选择器, 如 '.red'
//     3, id 选择器, 如 '#id-input-name'
// html 是一段 html 字符串
// 把 html 作为子元素插入到 selector 选中的所有元素的末尾
//
var append = function(selector, html) {
    a = document.querySelector( selector )
    for (var i = 0; i < a.children.length; i++) {
        a.children[i].insertAdjacentHTML( 'beforeend', html )
    }
}

// 作业 11
// selector 是一个 string, 选择器, 有如下三种取值
//     1, 标签选择器, 如 'div'
//     2, class 选择器, 如 '.red'
//     3, id 选择器, 如 '#id-input-name'
// eventName 是一个 string, 表示事件的名字
// callback 是一个函数
// responseClass 是一个字符串, 这个参数可以为空
//
// 给 selector 选中的所有元素绑定 eventName 事件
// 当 responseClass 给出的时候, callback 只会响应拥有 responseClass 类的元素
// 当 responseClass 没有给的时候, callback 直接响应
//
// 这题做不出来就放弃
//
var bindAll = function(selector, eventName, callback, responseClass) {
    log(responseClass)
    a = document.querySelector( selector )
    for(var i = 0; i < a.children.length; i++) {
        var element = a.children[i]
        var Event = function( event ) {
            log (event.target.classList)
            if ( responseClass === undefined ) {
                callback()
            } else if ( event.target.classList.contains( responseClass ) ) {
            // 监听 事件 responseClass
                callback()
            }
        }
        element.addEventListener( eventName, Event, false )
    }
}


// =====
// 提示
// =====
/*/

1, unique
创建一个新数组
遍历 a
对于 a 中的每个元素, 判断是否在新数组中出现
如果没出现就 push


2, intersection
创建一个新数组
遍历 a
对于 a 中的每个元素, 判断是否在 b 中出现
如果出现就 push 到新数组


3, union
有问题单独提问


4, difference
有问题单独提问


5, differenceAll
对 a b 分别 difference 并 push 到新数组


6, isSubset
循环判断


7, appendHtml
上课用的函数的封装


8, bindEvent
上课用函数的简单封装


9, bindEventDelegate
事件委托的简单封装


10, append
选择, 然后循环 appendHtml


11, bindAll
这题做不出来就算了
/*/

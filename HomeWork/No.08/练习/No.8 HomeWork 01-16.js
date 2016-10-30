// 2016/10/02
//
// ============
// 作业 8
//
// 本次作业主要还是是 string
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
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
//         log('*** 测试失败 {', message)
//     }
// }

定义一个增强的 ensureEqual
// var ensure = function( def, result, message ) {
//     if ( def != result) {
//         log(`异常————————————> ${message}`)
//         log(`def = ${def}\nresult = ${result}\n `)
//         }
//     }


// 作业 1
// 实现函数
// delimiter 是 string
// array 是包含 string 的 array
//
// 把 array 中的元素用 delimiter 连接成一个字符串并返回
// 具体请看测试
// 多看提示多讨论
var join = function(delimiter, array) {
    var result = ''
    for (var i = 0; i < array.length; i++) {
        result += array[i]
        result += delimiter
    } return result.slice(0,-1)
}

var test_join = function() {
    ensure(join('#' , ['hello', 'gua']) == 'hello#gua', 'join 测试 1')
    ensure(join(' ' , ['hello', 'gua']) == 'hello gua', 'join 测试 2')
    ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')
}
test_join()

// 作业 2
// s 是 string
// delimiter 是 string, 默认为空格 ' '
//
// 以 delimiter 为分隔符号, 返回一个 array
// 例如
// split('1 2 3') 返回 ['1', '2', '3']
// split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
// 注意, 测试 array 是否相等得自己写一个函数用循环来跑
// 实现函数
var length = function(s, delimiter) {
    for (i in s) {
        if (s[i] === delimiter) {
            return i
        }
    }
}
var split = function(s, delimiter=' ') {
    var list  = []
    var len = length( s, delimiter )
    for (i in s) {
        if (s[i] === delimiter) {
            list.push( s.slice(i - len, i) )
        }
    }
    list.push( s.slice( -len ) ) //收尾
    return list
}
var text_split = function() {
    ensure( JSON.stringify(split('1 2 3 4',' ')     ) === JSON.stringify(['1','2','3','4']) , '测试1')
    ensure( JSON.stringify(split('a=b&c=d&d=e','&') ) ===  JSON.stringify([ "a=b", "c=d", "d=e" ]), '测试2')
}

text_split() //还是不如 str.split( )



// 作业 3
// s old newString 都是 string
// 返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串
// 实现函数
var replaceAll = function(s, old, newString) {
    var re = new RegExp(`${old}`, 'g')
    return s.replace(re, `${newString}`)
}
var text_replaceAll = function( ) {
    ensure( replaceAll('国家：中国，中国各省，中国各部，中国各单位','中国','澳大利亚') === "国家：澳大利亚，澳大利亚各省，澳大利亚各部，澳大利亚各单位" ,'测试1')
    ensure( replaceAll('测试网站www.xicidaili.com','i','爱') === "测试网站www.x爱c爱da爱l爱.com" ,'测试2')
}
text_replaceAll()

// 作业 4
// n 是 int
// 返回这样规律的字符串, 特殊情况不考虑
// n       返回值
// 1       '1'
// 2       '121'
// 3       '12321'
// 实现函数
var str1 = function(n) {
    var range = function( n ) {
        var list = ''
        for (var i = 1; i < n + 1; i++) {
            list += i
        } return list
    }
    var str = range(n)
    var dao = ''
    for (var i = -2; Math.abs(i) <=  str.length; i-= 1) {
        dao += str.slice(i, i+1 )
    } return str + dao
}
var test_str1 = function() {
    ensure( str1(4) === '1234321','测试1')
    ensure( str1(2) === '121','测试2')
    ensure( str1(9) === "12345678987654321",'测试3')
    ensure( str1(3) === '12321','测试4')
}
test_str1()

// 作业 5
// n 是 int
// 返回这样规律的字符串, 特殊情况不考虑
// n       返回值
// 1       'A'
// 2       'ABA'
// 3       'ABCBA'
// 实现函数
var str2 = function(n) {
    var range = function( n ) {
        var zimu = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var list = ''
        for (var i = 1; i < n + 1; i++) {
            list += zimu[i]
        } return list
    }
    var str = range(n)
    var dao = ''
    for (var i = -2; Math.abs(i) <=  str.length; i-= 1) {
        dao += str.slice(i, i+1 )
    } return str + dao
}
var test_str2 = function() {
    ensure( str2(4) , "ABCDCBA",'测试1')
    ensure( str2(18), "ABCDEFGHIJKLMNOPQRQPONMLKJIHGFEDCBA",'测试2')
    ensure( str2(9) , "ABCDEFGHIHGFEDCBA",'测试3')
    ensure( str2(2) , 'ABA','测试4')
}
test_str2()


// 作业 6
// 返回这样格式的加法口诀表(没写全, 但是要返回完整的)
// 注意, 这只是我输入的内容
// 实际上你普通 log 出来是不会有回车的
// [
//     '1 + 1 = 2',
//     '2 + 1 = 3  2 + 2 = 4',
//     '3 + 1 = 4  3 + 2 = 5  3 + 3 = 6',
// ]
// 实现加法口诀表
var add = function( n ) {
    var str = ''
    for     (var r = 1; r <= n; r++) {
        for (var l = 1; l <= n; l++) {
            if (r == n) {
                str += (`${r} + ${l} = ${l+r}  `)
            }
        }
    } return str.slice(0,-2)
}
var addTable = function( n ) {
    list = []
    for (var i = 1; i <= n; i++) {
        list.push( add(i) )
    } return list
}
var test_addTable = function() {
    ensure( JSON.stringify( addTable(3) ) , JSON.stringify(
    [
        '1 + 1 = 2',
        '2 + 1 = 3  2 + 2 = 4',
        '3 + 1 = 4  3 + 2 = 5  3 + 3 = 6',
    ] ), '测试1' )
}
test_addTable() //加法口诀！~可恶

// 作业 7
// start end 都是 int
//
// 返回一个 array, 假设 start 为 1, end 为 5, 返回数据如下
// [1, 2, 3, 4]
// 实现函数
var range1 = function( start, end ) {
    var list = []
    for (var i = start; i < end; i += 2) {
        list.push( i )
    } return list
}
var test_range1 = function() {
    ensure( range1(1,5), [1, 2, 3, 4]  ,'测试1')
    ensure( range1(2,6), [2, 3, 4, 5]  ,'测试2')
    ensure( range1(0,6), [-2, -1, 0, 1]  ,'测试3')
}
test_range1()
// 作业 8
// start end step 都是数字
// step 是大于 0 的正整数
//
// 返回一个 array
// 假设 start=1, end=5, step=1 返回数据如下
// [1, 2, 3, 4]
// 假设 start=0, end=6, step=2 返回数据如下
// [0, 2, 4]
// 实现函数
var range2 = function(start, end, step=1) {
    var list = []
    for (var i = start; i < end; i += step) {
        list.push( i )
    } return list
}
var test_range2 = function() {
    ensure( range2(1,5,1), [1, 2, 3, 4]  ,'测试1')
    ensure( range2(2,6,3), [ 2, 5 ]      ,'测试2')
    ensure( range2(0,6,2), [ 0, 2, 4 ]   ,'测试3')
}
test_range2()

// 作业 9
// start end step 都是数字
//
// 和 range2 一样, 但是要求支持负数 step
// 使用 while 循环
// 返回一个 array
// 假设 start=1, end=5, step=1 返回数据如下
// [1, 2, 3, 4]
// 假设 start=6, end=0, step=-1 返回数据如下
// [6, 5, 4, 3, 2, 1]
// 实现函数
var range3 = function( start, end, step=1) {
    if (start < end) {
        kaishi = start
        jieshu = end
        var list = []
        for (var i = kaishi; i < jieshu; i += step) {
            list.push( i )
        } return list
    }else {
        var kaishi = end
        var jieshu = start
        var list = []
        for (var i = kaishi + 1; i <= jieshu; i += step) {
            list.push( i )
        } return list.reverse( )
    }

}
var test_range3 = function() {
    ensure( range3(1,5,1), [1, 2, 3, 4]  ,'测试1')
    ensure( range3(6,0,1), [ 6, 5, 4, 3, 2, 1 ]    ,'测试3')
}
test_range3()


// 作业 10
// js 标准数学库有一个随机数函数
// Math.random()
// 它返回 0 - 1 之间的小数
//
// 用它实现本函数, 返回 0 或 1
// 实现函数
var random01 = function() {
    var suiji = Math.random()
    if (suiji > 0.5) {
        return 1
    }else {
        return 0
    }
}


// 作业 11
// 返回一个只包含了 0 1 的随机 array, 长度为 n
// 假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
// [0, 0, 1, 0, 1]
// 实现函数
var random01 = function() {
    var suiji = Math.random()
    if (suiji > 0.5) {
        return 1
    }else {
        return 0
    }
}
var randomLine01 = function(n) {
    var i = 0
    var list = []
    while (i < n) {
        list.push( random01() )
    i++
    }return list
}
//randomLine01(5)

// 作业 12
// 返回以下格式的数据
// 假设 n 为 3, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
// 注意, 这只是一个 array, 并不是它显示的样子
// 注意, 这是一个 array 不是 string
// [
//     [0, 0, 1],
//     [1, 0, 1],
//     [0, 0, 0],
// ]
// 返回, 包含了 n 个『只包含 n 个「随机 0 1」的 array』的 array
// 实现函数
var random01 = function() {
    var suiji = Math.random()
    if (suiji > 0.5) {
        return 1
    }else {
        return 0
    }
}
var randomLine01 = function(n) {
    var i = 0
    var list = []
    while (i < n) {
        list.push( random01() )
    i++
    }return list
}
var randomSquare01 = function(n) {
    var list = []
    var i = 0
    while (i < n) {
        list.push( randomLine01(n) )
    i++
    } return list
}
//randomSquare01(3)

// 作业 13
// 返回一个只包含了 0 9 的随机 array, 长度为 n
// 假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
// [0, 0, 9, 0, 9]
var random09 = function() {
    var suiji = Math.random()
    if (suiji > 0.5) {
        return 9
    }else {
        return 0
    }
}
var randomLine09 = function(n) {
    var list = []
    var i = 0
    while (i < n) {
        list.push( random09() )
    i++
    }return list
}
//randomLine09(5)

// 作业 14
// array 是一个只包含了 0 9 的 array
// 返回一个标记过的 array
// ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
// 复制数组用 array.slice(0) 实现
//
// 标记规则如下
// 对于下面这样的 array
// [0, 0, 9, 0, 9]
// 标记后是这样
// [0, 1, 9, 2, 9]
//
// 规则是, 0 会被设置为左右两边 9 的数量
var random09 = function() {
    var suiji = Math.random()
    if (suiji > 0.5) {
        return 9
    }else {
        return 0
    }
}
var randomLine09 = function(n) {
    var list = []
    var i = 0
    while (i < n) {
        list.push( random09() )
    i++
    }return list
}
var markedLine = function(n) {
    var list = []
    var array = randomLine09(n) //[0, 0, 9, 0, 9]
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            if (array[i + 1] === 9) {
                array[i] += 1
            }
            if (array[i - 1] === 9) {
                array[i] += 1
            }

        }list.push( array[i] )
    }return list
}
// log(markedLine(10))


// 作业 15
// array 是一个「包含了『只包含了 0 9 的 array』的 array」
// 返回一个标记过的 array
// ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
//
// 范例如下, 这是 array
// [
//     [0, 9, 0, 0],
//     [0, 0, 9, 0],
//     [9, 0, 9, 0],
//     [0, 9, 0, 0],
// ]
//
// 这是标记后的结果
// [
//     [1, 9, 2, 1],
//     [2, 4, 9, 2],
//     [9, 4, 9, 2],
//     [2, 9, 2, 1],
// ]
//
// 规则是, 0 会被设置为四周 8 个元素中 9 的数量
var random09 = function() {
    var suiji = Math.random()
    if (suiji > 0.5) {
        return 9
    }else {
        return 0
    }
}
var randomLine09 = function(n) {
    var list = []
    var i = 0
    while (i < n) {
        list.push( random09() )
    i++
    }return list
}
var markedSquare = function(n) {
    var oldList = []
    var i = 0
    while (i < n) {
        oldList.push( randomLine09(n) )
        i++
    }
    var list = oldList.slice(0)
    // for ( i in list ) { 有毒
    for (var i = 0; i < list.length; i++) {
        // log ( list [i] )
        for (var i2 = 0; i2 < list.length; i2++) {
        // for ( i2 in list ) { 有毒
            if (list[i][i2] === 0) {
                // log(i)
                if (i-1 >= 0) {
                    if (list[i-1][i2+1] === 9) { //右上
                        list[i][i2] += 1
                    }
                    if (list[i-1][i2-1] === 9) { //左上
                        list[i][i2] += 1
                    }
                    if (list[i-1][i2] === 9) { //上
                        // log('上')
                        list[i][i2] += 1
                    }
                }
                if (i+1 <= n-1) {
                    if (list[i+1][i2] === 9) { //下
                        list[i][i2] += 1
                    }
                    if (list[i+1][i2+1] === 9) { //右下
                        list[i][i2] += 1
                    }
                    if (list[i+1][i2-1] === 9) { //左下
                        list[i][i2] += 1
                    }
                }
                    if (list[i][i2-1] === 9) { //左
                        list[i][i2] += 1
                    }
                    if (list[i][i2+1] === 9) { //右
                        list[i][i2] += 1
                    }
            }
        }
    }
    return list
}
var list = markedSquare (4)
for (var i = 0; i < list.length; i++) {
    log( list[i] )
}

// 作业 16
// 返回以下格式的数据
// 只包含 0 和 9
// limit 是 9 的个数
// 假设 n 为 4, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
// 注意, 这只是一个 array, 并不是它显示的样子
// 注意, 这是一个 array 不是 string
// [
//     [0, 9, 0, 0],
//     [0, 0, 9, 0],
//     [9, 0, 0, 0],
//     [0, 0, 0, 0],
// ]
// 返回, 包含了 n 个『只包含 n 个「随机 0 9」的 array』的 array, 9 的个数是 limit
var suiji = function(n) {
    while (true) {
        var sui = Math.floor( Math.random() * 10 )
        if (sui < n) {
            return sui
        }
    }
}
var lie = function( n ){
    var randomLine09 = function(n) {
        var list = []
        var i = 0
        while (i < n) {
            list.push( 0 )
        i++
        } return list
    }
    var list = []
    var i = 0
    while (i < n) {
        list.push( randomLine09(n) )
        i++
    } return list
}
var randomSquare09 = function(n, limit=3) {
    var list = lie(n)
    var i = 0
    var i9 = '9'
    while (i < limit ) {
        var r = [suiji(n)]
        var y = [suiji(n)]
        if ( list[r][y] === i9 ) {
            i--
        }
        list[r][y] = i9
    i++
    } return list
}

var test_randomSquare09 = function() {
    var list = randomSquare09(6,6)
    for (var i = 0; i < list.length; i++) {
        log( list[i] )
    }
}
test_randomSquare09()

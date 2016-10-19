// 2016/09/28
//
// ============
// 作业 6
//
// string 题目用到的知识还是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
//


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}


// 作业 1
// 10 分钟做不出就看提示
//
var find = function(s1, s2) {
    if ( s1.includes( s2 ) ) { //
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                return i //返回下标
            }
        }
    }else {
        return -1
    }
}


// 测试函数, 自行实现
var test_find = function() {
    ensure( find('123OTTH','H') === 6, '测试1')
    ensure( find('大校','H') === -1, '测试2')
    ensure( find('大校人猛枪硬马子爽','枪') === 4, '测试3')
    return '测试结束'
}

test_find()

/*
下面给出一个例子作为后面作业的参考
返回字符串的小写形式的函数
注意, 这里假设了 s 字符串全是大写字母
*/
// 这里是两个字符串, 包含了大写字母和小写字母
var lower = 'abcdefghijklmnopqrstuvwxyz'
var xiao = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var lowercase = function(s) {
    // 初始化一个空字符串
    var result = ""
    for (var i = 0; i < s.length; i++) {
        // 注意, 这个 find 是你要实现的函数
        var index = find(upper, s[i])
        // 字符串可以用加号拼接, 不明白可以 log 一下
        result += lower[index]
    }
    return result
}

/*
作业 2

定义一个函数
参数是一个字符串 s
返回大写后的字符串
注意, 假设 s 字符串全是小写字母

注意, 自行实现测试函数, 之后的题目都要求自行实现测试函数
*/
var find = function(s1, s2) {
    if ( s1.includes( s2 ) ) { //
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                return i //返回下标
            }
        }
    }else {
        return -1
    }
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
}
var uppercase = function(s) {
    var xiaox = 'abcdefghijklmnopqrstuvwxyz' //小写
    var dax   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' //大写
    for (var i = 0; i < s.length; i++) {
        var i2 = find(xiaox, s[i]) //i2 为需要替换的下标
        if (i2 != -1) {
            var newS = dax[i2]
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        }
    }
    return s
}
//测试
var test_uppercase = function() {
    ensure( uppercase('123asd') === "123ASD" ,'测试1' )
    ensure( uppercase('萧大') === "萧大" ,'测试2' )
    ensure( uppercase('LenovoTHINKPAD') === "LENOVOTHINKPAD" ,'测试3' )
    return '测试结束'
}
test_uppercase()

/*
作业 3

实现 lowercase1
它能正确处理带 小写字母 的字符串
*/
var find = function(s1, s2) {
    if ( s1.includes( s2 ) ) { //
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                return i //返回下标
            }
        }
    }else {
        return -1
    }
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
}
var lowercase1 = function(s) {
    var xiaox = 'abcdefghijklmnopqrstuvwxyz' //小写
    var dax   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' //大写
    for (var i = 0; i < s.length; i++) {
        var i2 = find(dax, s[i]) //i2 为需要替换的下标
        if (i2 != -1) {
            var newS = xiaox[i2]
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        }
    }
    return s
}
//测试
var test_lowercase1 = function() {
    ensure( lowercase1('123ASD') === "123asd" ,'测试1' )
    ensure( lowercase1('萧瓜') === "萧瓜" ,'测试2' )
    ensure( lowercase1('LenovoTHINKPAD') === "lenovothinkpad" ,'测试3' )
    return '测试结束'
}
test_lowercase1()

/*
作业 4

实现 uppercase1
它能正确处理带 大写字母 的字符串
*/
//返回 s1 中 s2 的下标
var find = function(s1, s2) {
    if ( s1.includes( s2 ) ) { //
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                return i //返回下标
            }
        }
    }else {
        return -1
    }
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
}
var uppercase1 = function(s) {
    var xiaox = 'abcdefghijklmnopqrstuvwxyz' //小写
    var dax   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' //大写
    for (var i = 0; i < s.length; i++) {
        var i2 = find(xiaox, s[i]) //i2 为需要替换的下标
        if (i2 != -1) {
            var newS = dax[i2]
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        }
    }
    return s
}
//测试
var test_uppercase1 = function() {
    ensure( uppercase('123asd') === "123ASD" ,'测试1' )
    ensure( uppercase('萧大') === "萧大" ,'测试2' )
    ensure( uppercase('LenovoTHINKPAD') === "LENOVOTHINKPAD" ,'测试3' )
    return '测试结束'
}
test_uppercase1()


/*
作业 5
实现一个叫 凯撒加密 的加密算法, 描述如下
对于一个字符串, 整体移位, 就是加密
以右移 1 位为例
原始信息 'afz' 会被加密为 'bga'
实现 encode1 函数, 把明文加密成密码并返回
右移 1 位

注意, 假设字符串一定只包含小写字符
*/

var find = function(s1, s2) {
    if ( s1.includes( s2 ) ) { //
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                return i //返回下标
            }
        }
    }else {
        return -1
    }
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
}
var encode1 = function(s) {
    var dax   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA' //大写
    var xiaox = 'abcdefghijklmnopqrstuvwxyza' //小写
    for (var i = 0; i < s.length; i++) {
        var i2 = find(xiaox, s[i])
        var i3 = find(dax,s[i])
        if (i2 != -1) {
            var newS = xiaox[i2 + 1]
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //小写
        else if (i3 != -1) {
            var newS = dax  [i3 + 1]
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //大写
    }
    return s
}
//测试
var test_encode1 = function() {
    ensure( encode1('abc') === 'bcd' ,'测试1')
    ensure( encode1('ppll') === 'qqmm' ,'测试2')
    ensure( encode1('a萧瓜sSSdfg') === 'b萧瓜tTTegh' ,'测试3')
}
test_encode1()

/*
作业 6
实现 decode1 函数, 把作业 5 加密的密码解密为明文并返回
*/
var find = function(s1, s2) {
    if ( s1.includes( s2 ) ) { //
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                return i //返回下标
            }
        }
    }else {
        return -1
    }
}
var decode1 = function(s) {
    var dax   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA' //大写
    var xiaox = 'abcdefghijklmnopqrstuvwxyza' //小写
    for (var i = 0; i < s.length; i++) {
        var i2 = find(xiaox, s[i])
        var i3 = find(dax,s[i])
        if (i2 != -1) {
            var newS = xiaox[i2 - 1]
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //小写
        else if (i3 != -1) {
            var newS = dax  [i3 - 1]
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //大写
    }
    return s
}
//测试
var test_decode1 = function() {
    ensure( decode1('bcd') === 'abc' ,'测试1')
    ensure( decode1('qqmm') === 'ppll' ,'测试2')
    ensure( decode1('b萧瓜tTTegh') === 'a萧瓜sSSdfg' ,'测试3')
    return '测试结束'
}
test_decode1()


/*
作业 7
实现 encode2
多了一个参数 shift 表示移的位数
*/
var find = function(s1, s2) {
    if ( s1.includes( s2 ) ) { //
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                return i //返回下标
            }
        }
    }else {
        return -1
    }
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
}
var encode2 = function(s, shift) {
    var dax   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ' //大写
    var xiaox = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' //小写
    for (var i = 0; i < s.length; i++) {
        var i2 = find(xiaox, s[i])
        var i3 = find(dax,s[i])
        if (i2 != -1) {
            var newS = xiaox[i2 + shift]
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //小写
        else if (i3 != -1) {
            var newS = dax  [i3 + shift]
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //大写
    }
    return s
}
//测试
var test_encode2 = function() {
    ensure( encode2('abc', 2) === 'cde' ,'测试1')
    ensure( encode2('hasaki,面对疾风吧!', 3) === 'kdvdnl,面对疾风吧!' ,'测试2')
    ensure( encode2(`Hey Gua, Are you ready ? Let's GO !`, 13) === `Url Thn, Ner lbh ernql ? Yrg'f TB !` ,'测试3')
    return '测试完成'
}
test_encode2()


/*
作业 8
实现 decode2
多了一个参数 shift 表示移的位数
*/
var find = function(s1, s2) {
    if ( s1.includes( s2 ) ) { //
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                return i //返回下标
            }
        }
    }else {
        return -1
    }
}
var decode2 = function(s, shift) {
    var dax   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' //大写
    var xiaox = 'abcdefghijklmnopqrstuvwxyz' //小写
    for (var i = 0; i < s.length; i++) {
        var i2 = find(xiaox, s[i])
        var i3 = find(dax,s[i])
        if (i2 != -1) {
            if (i2 - shift >= 0) {
                var newS = xiaox.slice(i2 - shift, i2 - shift + 1)
            }else if (i2 - shift == -1) {
                var newS = xiaox.slice(-1)
            }else {
                var newS = xiaox.slice(i2 - shift, i2 - shift + 1)
            }
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //小写
        else if (i3 != -1) {
            if (i3 - shift >= 0) {
                var newS = dax.slice(i3 - shift, i3 - shift + 1)
            }else if (i3 - shift == -1) {
                var newS = dax.slice(-1)
            }else {
                var newS = dax.slice(i3 - shift, i3 - shift + 1)
            }
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //大写
    }
    return s
}
//测试
var test_decode2 = function() {
    ensure( decode2('abcdFZ', 1) === 'zabcEY' ,'测试1')
    ensure( decode2('aazz!', 12) === 'oonn!' ,'测试2')
    ensure( decode2('b萧瓜tTTegh', 3) === 'y萧瓜qQQbde' ,'测试3')
    return '测试结束'
}
test_decode2()


/*
作业 9
实现 encode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样
*/
var find = function(s1, s2) {
    if ( s1.includes( s2 ) ) { //
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                return i //返回下标
            }
        }
    }else {
        return -1
    }
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
}
var encode3 = function(s, shift) {
    var dax   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ' //大写
    var xiaox = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz' //小写
    for (var i = 0; i < s.length; i++) {
        var i2 = find(xiaox, s[i])
        var i3 = find(dax,s[i])
        if (i2 != -1) {
            var newS = xiaox[i2 + shift]
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //小写
        else if (i3 != -1) {
            var newS = dax  [i3 + shift]
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //大写
    }
    return s
}
//测试
var test_encode3 = function() {
    ensure( encode3('abc', 2) === 'cde' ,'测试1')
    ensure( encode3('hasaki,面对疾风吧!', 3) === 'kdvdnl,面对疾风吧!' ,'测试2')
    ensure( encode3(`Hey Gua, Are you ready ? Let's GO !`, 13) === `Url Thn, Ner lbh ernql ? Yrg'f TB !` ,'测试3')
    return '测试完成'
}
test_encode3()


/*
作业 10
实现 decode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样
*/
var find = function(s1, s2) {
    if ( s1.includes( s2 ) ) { //
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                return i //返回下标
            }
        }
    }else {
        return -1
    }
}
var decode3 = function(s, shift) {
    var dax   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' //大写
    var xiaox = 'abcdefghijklmnopqrstuvwxyz' //小写
    for (var i = 0; i < s.length; i++) {
        var i2 = find(xiaox, s[i])
        var i3 = find(dax,s[i])
        if (i2 != -1) {
            if (i2 - shift >= 0) {
                var newS = xiaox.slice(i2 - shift, i2 - shift + 1)
            }else if (i2 - shift == -1) {
                var newS = xiaox.slice(-1)
            }else {
                var newS = xiaox.slice(i2 - shift, i2 - shift + 1)
            }
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //小写
        else if (i3 != -1) {
            if (i3 - shift >= 0) {
                var newS = dax.slice(i3 - shift, i3 - shift + 1)
            }else if (i3 - shift == -1) {
                var newS = dax.slice(-1)
            }else {
                var newS = dax.slice(i3 - shift, i3 - shift + 1)
            }
            var left  = s.slice(0 , i)
            var right = s.slice(i + 1)
            s = left + newS + right
        } //大写
    }
    return s
}
//测试
var test_decode3 = function() {
    ensure( decode3('abcdFZ', 1) === 'zabcEY' ,'测试1')
    ensure( decode3('b萧瓜tTTegh', 3) === 'y萧瓜qQQbde' ,'测试3')
    ensure( decode3('aazz!', 12) === 'oonn!' ,'测试2')
    return '测试结束'
}
test_decode3()


/*
作业 11
知乎有一个求助题, 破译密码的
链接在此
https://www.zhihu.com/question/28324597
这一看就是凯撒加密...
如果没思路, 可看本文件最后的提示
我把密码放在下面, 请解出原文
*/
//测试成功 无论偏移多少位都可以
var find = function( s, s2 ) {

    if ( s.includes( s2 ) ) { //如果 s2 存在
        for (var i = 0; i < s.length; i++) {
            if (s[i] === s2) {
                return i
            }
        }
    }else {
        return -1
    }
}
var decode4 = function(s, shift){
    var dx = 'ZABCDEFGHIJKLMNOPQRSTUVWXYZ' //大写
    var xx = 'zabcdefghijklmnopqrstuvwxyz' //小写
    var result = ''
    for (var i = 0; i < code.length; i++) {
        if　( dx.includes(code[i]) ) { //如果是大写字母
            var mark = find( dx ,code[i]) + shift     //对应的下标 + 要偏移的shift
            var v = Math.abs( Math.floor( mark/26 ) ) //需要减去 v 个26
            if ( 0 < mark && mark < 26 ) {            //当 0< mark <26
                result += xx[mark]
            }
            if ( mark < 0  ) {                        //当 mark <0
                result += xx[mark + 26 * v]
            }
            if ( mark > 26 ) {                        //当 mark > 26
                result += xx[mark - 26 * v]
            }
        }else if ( xx.includes(code[i]) ) { //如果是小写字母
            var mark = find( xx ,code[i]) + shift     //对应的下标 + 要偏移的shift
            var v = Math.abs( Math.floor( mark/26 ) ) //需要减去 v 个26
            if ( 0 < mark && mark < 26 ) {            //当 0< mark <26
                result += xx[mark]
            }
            if ( mark < 0  ) {                        //当 mark <0
                result += xx[mark + 26 * v]
            }
            if ( mark > 26 ) {                        //当 mark > 26
                result += xx[mark - 26 * v]
            }
        }else{
            result += code[i]
        }
    }
    return result
}
var rank = function(code, shift) {
    var dui = 0
    var result = decode4(code, shift)
    var wordList = result.split(' ')
    for (var i = 0; i < wordList.length; i++) {
        if ( words.includes( wordList[i] ) ) {
            dui += 1
        }
    }return [dui,result]
}
var Accuracy = function(code) {
    for (var i = 1; i < 26 +1; i++) {
        var o = rank(code, i)
        var result = o[1].split(' ')
        var dui  = Math.floor(o[0] / result.length * 100)
        if ( dui > 50 ) {
            log(`正确率：${dui}% -->`,o[1])
        }
    }
}

var code = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX'
Accuracy(code)
// =======
// 提示
// =======
/*

1, find
循环比较, 如果发现就返回
注意处理不存在的情况


2, uppercase
参考例子实现, 这个简单, 最好 log 一下搞清程序执行的流程和逻辑


3, lowercase1
因为可能字符串中带小写字符, 那么就要判断一下才能处理


4, uppercase1
同作业 3 一样


5, encode1


*/

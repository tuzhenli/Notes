// 2016/09/25
//
// ============
// 作业 5
// string 的花式操作函数
//
// 用到的知识主要是
// 0, 用下标引用字符串
// 1, 字符串切片
// 2, 循环
// 3, 选择 (也就是 if)
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
//
// 请直接在我的代码中更改/添加, 不要新建别的文件


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试
// 本次作业起, 我们开始使用自动测试的方法来验证结果
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

// 例子
// 测试的使用
//
// 注意看, 我们使用了上文定义的 ensure 来进行测试
var test_sample = function() {
    // ensure 函数接受两个参数
    // 第一个是一个 bool 值, 如果为 True 则不会有任何反应
    // 否则会打印第二个参数
    ensure(1 === 1, '如果测试失败, 这句话会被打印出来')
    ensure(1 > 2, '测试 1 > 2 失败')
}

test_sample()
// 调用上面的 test_sample 可以得到如下输出
// *** 测试失败: 测试 1 > 2 失败


// ======
// 资料
// ======
//
// String 函数可以把数字转成字符串
// 例如 String(1) 就能得到 '1'
// 注意, String 是大写开头的函数, 不要弄错大小写
//
// includes 函数可以检查一个字符串是否包含另一个字符串
// 例如 'good'.includes('o') 返回 true
// var name = 'gua'
// name.includes(1) // 返回 false



// 作业 1
// 10 分钟做不出就看提示
//
var zfill = function(n, width) {
    var n = String(n)
    var zero = width - n.length //需要几个 0
    var m = ''
    var i = 0
    while (i < zero) {
        m += '0'
    i++
    }
    return m + n
}

// 测试函数
var test_zfill = function() {
    ensure(zfill(1, 4) === '0001', 'zfill 测试 1')
    ensure(zfill(23, 4) === '0023', 'zfill 测试 2')
    ensure(zfill(12345, 4) === '12345', 'zfill 测试 3')
    ensure(zfill(169, 5) === '00169', 'zfill 测试 4')
    log("测试完成")
}

// 调用测试函数
test_zfill()


// 作业 2
// 10 分钟做不出就看提示
//
// 注意, 这是一个新的知识点, 叫 默认参数
// fillchar 这个参数如果你不提供, 它的值默认就是 ' '
// 语法就是这样

var ljust = function(s, width, fillchar=' ') {
    var n = width - s.length //需要 n 个 fillchar
    var m = '' //初始化末尾 fillchar
    var i = 0
    while (i < n) {
        m += fillchar
    i++
    }
    return s + m
}

// 测试函数
var test_ljust = function() {
    ensure(ljust('gua', 5) === 'gua  ', 'ljust 测试 1')
    ensure(ljust('guagua', 5) === 'guagua', 'ljust 测试 2')
    ensure(ljust('gua', 5, '*') === 'gua**', 'ljust 测试 3')
    log('测试完成')
}

// 调用测试函数
test_ljust()


// 作业 3
// 10 分钟做不出就看提示
//
var rjust = function(s, width, fillchar=' ') {
    var n = width - s.length //需要 n 个 fillchar
    var m = '' //初始化末尾 fillchar
    var i = 0
    while (i < n) {
        m += fillchar
    i++
    }
    return m + s
}

// 测试函数
var test_rjust = function() {
    ensure(rjust('gua', 5) === '  gua', 'rjust 测试 1')
    ensure(rjust('guagua', 5) === 'guagua', 'rjust 测试 2')
    ensure(rjust('gua', 5, '*') === '**gua', 'rjust 测试 3')
    log('测试完成')
}

// 调用测试函数
test_rjust()


// 作业 4
// 10 分钟做不出就看提示
//
/*
s 是 string
width 是 int
fillchar 是 长度为 1 的字符串, 默认为空格 ' '

如果 s 长度小于 width, 则在两边用 fillchar 填充并返回
如果 s.length 和 width 互为奇偶, 则无法平均分配两边的 fillchar
这种情况下, 让左边的 fillchar 数量小于右边

返回 string 类型
*/
var center = function(s, width, fillchar=' ') {
    var n = width - s.length //需要 n 个 fillchar
    if (n % 2 === 1) {       //如果是奇数
        var n1 = (n - 1) / 2 //则 - 1 除以 2
    }else {
        var n1 =  n / 2      //偶数 直接除以 2
    }
    var m = ''
    var i = 0
    while (i < n1) {
        m += fillchar
    i+=1
    }
    if (n % 2 === 1) {
        return `${m}${s}${m}${fillchar}`
    }else {
        return `${m}${s}${m}`
    }

}

// 测试函数
var test_center = function() {
    ensure(center('gua', 5) === ' gua ', 'center 测试 1')
    ensure(center('gua', 5, '*') === '*gua*', 'center 测试 2')
    ensure(center('gw', 5) === ' gw  ', 'center 测试 3')
    ensure(center('gua', 6) === ' gua  ', 'center 测试 4')
    console.log('测试完成')
}

// 调用测试函数
test_center()

// 作业 5
// 10 分钟做不出就看提示
// 注意, 看上面的资料, 介绍了一个 includes 函数
//
var is_space = function(s) {
    for (i of s) {
        if (!i.includes(' ') ) {
            return false
        }
    return true
    }
}

// 测试函数
var test_is_space = function() {
    ensure(is_space(' '), 'center 测试 1')
    ensure(is_space('   '), 'center 测试 2')
    ensure(!is_space(''), 'center 测试 3')
    ensure(!is_space('gua'), 'center 测试 4')
    log('测试完成')
}

// 调用测试函数
test_is_space()

// 作业 6
// 10 分钟做不出就看提示
//
var is_digit = function(s) {
    for (i of s) {
        if ( !'1234567890'.includes( i ) ) {
            return false
        }
    }
    return true
}

// 测试函数
var test_is_digit = function() {
    ensure(is_digit('123'), 'is_digit 测试 1')
    ensure(is_digit('0'), 'is_digit 测试 2')
    ensure(!is_digit('  '), 'is_digit 测试 3')
    ensure(!is_digit('1.1'), 'is_digit 测试 4')
    ensure(!is_digit('gua'), 'is_digit 测试 5')
    console.log('测试完毕')
}

// 调用测试函数
test_is_digit()

// 作业 7
// 10 分钟做不出就看提示
//
var strip_left = function(s) {
    var n = 0 //初始化空格为 0
    for (i of s) {
        if (i === ' ') {
            n += 1
        }else if (i != ' ') {
            break
        }
    }
    return s.slice(n) //切片
}

// 测试函数
var test_strip_left = function() {
    ensure(strip_left('  gua') === 'gua', 'strip_left 测试 1')
    ensure(strip_left(' gua  ') === 'gua  ', 'strip_left 测试 2')
    ensure(strip_left('') === '', 'strip_left 测试 3')
    ensure(strip_left('    ') === '', 'strip_left 测试 4')
}

test_strip_left()

// 作业 8
// 10 分钟做不出就看提示
//
var strip_right = function(s) {
    if ( s.slice(-1) != ' ' ) { //如果最后不是空格 直接返回 s
        return s
    }                       //如果是
    var k = 1               //初始化空格为 1
    var i = 1
    while (i < s.length) {  //开始倒数 -i 是否为空格
        if (s.slice( -i-1,-i) === ' ') {
            k += 1          //如果是 空格 +1
        }else {
            break           //否则 结束循环
        } //if 结束
    i++
    } //while 结束
    return s.slice(0,-k)
}
// 测试函数
var test_strip_right = function() {
    ensure(strip_right('  gua') === '  gua', 'strip_right 测试 1')
    ensure(strip_right(' gua  ') === ' gua', 'strip_right 测试 2')
    ensure(strip_right('') === '', 'strip_right 测试 3')
    ensure(strip_right('    ') === '', 'strip_right 测试 4')
}

test_strip_right()
// 作业 9
// 10 分钟做不出就看提示
// 左侧空格
var strip_left = function(s) {
    var n = 0 //初始化空格为 0
    for (i of s) {
        if (i === ' ') {
            n += 1
        }else if (i != ' ') {
            break
        }
    }
    return s.slice(n) //切片
}
// 右侧空格
var strip_right = function(s) {
    if ( s.slice(-1) != ' ' ) { //如果最后不是空格 直接返回 s
        return s
    }                       //如果是
    var k = 1               //初始化空格为 1
    var i = 1
    while (i < s.length) {  //开始倒数 -i 是否为空格
        if (s.slice( -i-1,-i) === ' ') {
            k += 1          //如果是 空格 +1
        }else {
            break           //否则 结束循环
        } //if 结束
    i++
    } //while 结束
    return s.slice(0,-k)
}
// 全部空格
var strip = function(s) {
    var s = strip_right(s)
    var s = strip_left(s)
    return s
}

// 测试函数
var test_strip = function() {
    ensure(strip('  gua') === 'gua', 'strip 测试 1')
    ensure(strip(' gua  ') === 'gua', 'strip 测试 2')
    ensure(strip('') === '', 'strip 测试 3')
    ensure(strip('    ') === '', 'strip 测试 4')
}
test_strip()

// 作业 10
// 10 分钟做不出就看提示
//
var replace = function(s, old, newString) {
    if ( s.includes(old) ) {
        var n = old.length
        for (var i = 0; i < s.length; i++) {
            if ( s.slice(i, i + n) === old ) { //如果匹配到 old
                 var left  = s.slice(0, i)
                 var right = s.slice(i + n)
                 s = `${left}${newString}${right}`
            } // if 替换结束
        } // for 匹配结束
    } //if 是否存在old 结束
    return s
}

// 测试函数
var test_replace = function() {
    ensure(replace('hello, world', 'world', 'gua') === 'hello, gua', 'replace 测试 1')
	ensure(replace('hello', 'world', 'gua') === 'hello', 'replace 测试 2')
    ensure(replace('hello', 'll', 'gua') === 'heguao', 'replace 测试 3')
}

test_replace()

/*
--------
提示
--------

1 zfill
1, 先把 n 转成 string 类型, 这样就可以求出长度
2, 有长度就可以和 width 参数比较, 看看需要补几个 0
3, 然后就可以得到一个包含几个 0 的字符串
4, 拼接两个字符串, 就得到了结果, 返回, 成功


2 ljust
1, 用 s 的长度和 width 算出需要填充的 fillchar 个数
2, 得到要填充的字符串
3, 拼接, 返回, 成功


3 rjust
同上


4 center
1, 算出两边要填充的个数
2, 得到两边的字符串
3, 拼接, 返回
*/

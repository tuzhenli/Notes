// 2016/10/12
//
// ============
// 作业 12
//
//
// 注意, 提示在文件最末尾
// ============
//
// 定义我们的 log 函数
// var log = function() {
//     console.log.apply(console, arguments)
//     }
//     //定义自己的log很重要 enSure增强进化版
// var ensure = function( def, result, message ) {
//     if( JSON.stringify( def ) !== JSON.stringify( result ) ) {
//         log('异常————————————> ', message )
//         log('def    =', def, '\nresult =', result)
//         }
//     }
//切糕
var qie = function( str, n ) {
    var fen = str.length / n
    var result = []
    var i = 0
    while (i < fen) {
        result.push((str.slice(n * i, (i + 1) * n) ))
        i++
    }return result
}
//补零
var bu0 = function( str, n ) {
    var n = n - str.length
    var zero = ''
    var i = 0
    while (i < n) {
        zero += '0'
        i++
    }
    return zero + str
}
var buhou0 = function( str, n ) {
    var n = n - str.length
    var zero = ''
    var i = 0
    while (i < n) {
        zero += '0'
        i++
    }
    return  str + zero
}
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

// 作业 1
// char 是一个长度为 1 的 string
// 这个函数返回这个字符的 ASCII 码
//
// 这个答案用到了 s.charCodeAt(index) 函数, 例子如下
// 'A'.charCodeAt(0) 返回 65
// 'a'.charCodeAt(0) 返回 97
//
// 字符在电脑中的存储是以数字的方式
// 每个字符其实是用一个数字代表的, 这个方式叫做编码
// ASCII 码是一个通用的编码, 包含英文字符数字和常见符号
//
// 这个作业答案我给了, 理解一下这件事就好, 不懂搜一下
//
var ascii = function(char) {
    return char.charCodeAt(0)
}
ensure('a'.charCodeAt(0) , 97 ,'作业1')

// 作业 2
// code 是一个 int
// 返回 code 所表示的字符
//
// 这个答案用到了 String.fromCharCode(code) 函数, 例子如下
// String.fromCharCode(97) 返回 'a'
// String.fromCharCode(65) 返回 'A'
//
var charFromAscii = function(code) {
    return String.fromCharCode(code)
}
ensure( String.fromCharCode(97) , 'a' ,'作业2')

// 作业 3
// n 是一个不大于 255 的 int
// 返回 n 的 8 位二进制形式的字符串
// 例如 binary(7) 返回 '00000111'
//
// 进制转换自行搜索或者论坛提问大家讨论吧
//
var binary = function(n) {
    var list = []
    while (true) {
        list.push(n % 2)
        n = Math.floor(n / 2)
        if (n === 1) {
            list.push(1)
            break
        }
    }
    list = list.reverse().join( '' )
    var n = 8 - list.length
    var zero = ''
    var i = 0
    while (i < n) {
        zero += '0'
        i++
    }
    return zero + list
}
ensure( binary(52), "00110100" ,'作业3' )

// 作业 4
// bin 是一个 8 位二进制形式的字符串
// 返回 bin 代表的数字
// 例如 int('00000111') 返回 7
//
// 进制转换自行搜索或者论坛提问大家讨论吧
//
var int = function(bin) {
    var list = bin.split('').reverse()
    var result = 0
    for (var i = 0; i < list.length; i++) {
        var k = Number(list[i])
        result += k * (2**i)
    } return result
}
ensure( int("00110100"), 52 ,'作业4' )

// 作业 5
// s 是一个 string
// 返回 s 的二进制字符串
// 例如 binaryStream('Man') 返回
// '010011010110000101101110'
//
// 使用上面的函数
//
var binaryStream = function(s) {
    var result = ''
    for (i of s) {
        result += binary(i.charCodeAt(0))
    } return result
}
ensure( binaryStream('Man') , '010011010110000101101110' , '作业5' )

// 作业 6
// bins 是一个二进制形式的字符串
// 返回 bins 代表的原始字符串
// 例如 stringFromBinary('010011010110000101101110') 返回 'Man'
//
// 使用上面的函数
//
var stringFromBinary = function(bins) {
    var k = 8
    var result = ''
    var n = bins.length / k
    var i = 0
    while (i < n) {
        result += String.fromCharCode(int( bins.slice(i * k, (i + 1) * k)))
        i++
    }return result
}
ensure( stringFromBinary('010011010110000101101110'), 'Man', '作业6')

// 作业 7
// s 是一个 string
// 返回 s 的 base64 编码
//
// Base64是一种基于 64 个可打印字符来表示数据的方法
// 它用每6个比特为一个单元，对应某个可打印字符
// ASCII 码一个字符是 8 比特, 也就是一字节
// 3 个字节就有 24 个比特, 对应了 4 个 base64 单元
//
// 如下所示
// 原始信息        M        a        n
// ASCII         77       97        110
// 二进制         01001101 01100001 01101110
// 4 个单元       010011 010110 000101 101110
// 每个单元转换后  19  22  5  46
//
// 转换后每个 base64 单元都是一个 0-63 的数字
// 因为 6 比特表示的范围就是这么大
// 然后数字到字符串的转换是下面这段字符串取下标所得
// 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
//
// 那么 Base64 编码结果就是    T   W   F  u
//
// 所以 base64Encode('Man') 返回 'TWFu'
//
//
// 既然 3 个字节转换为 4 个 base64 单元
// 那么 1 个字节怎么办呢?
// 答案是用 0 补出 3 字节, 如下所示
// 原始信息    M
// ASCII     77       0        0
// 二进制     01001101 00000000 00000000
// 4 个单元   010011 010000 000000 000000
// 单元转换后  19 16 0 0
// 因为末尾是强行补上的, 所以给他用 '=' 凑出字符(这是一个例外)
// 所以 base64Encode('M') 返回 'TQ=='
//

var base64Encode = function(s) {
    var ascii = []
    for (i of s) {
        ascii.push(i.charCodeAt(0))
    }
    // ASCII         77       97        110
    var jin2 = ''
    for (i of ascii) {
        jin2 += (binary(i))
    }
    jin2 = buhou0(jin2,24)
    var kong = ''
    for (i of qie(jin2,8)) {
        if (i === "00000000") {
            kong += '='
        }
    }
    // 二进制        010011010110000101101110
    var dan4 = []
    var k = 6
    var n = jin2.length / k
    var i = 0
    while (i < n) {
        dan4.push( jin2.slice(i * k, (i + 1) * k) )
        i++
    }
    // 4 个单元      010011 010110 000101 101110
    var ascii2 = []
    for (i of dan4) {
        ascii2.push( int( bu0(i, 8) ) )
    }
    // 每个单元转换后  19  22  5  46
    var base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    var result = ''
    for (i of ascii2) {
        result += base64[i]
    }
    if (kong.length !== 0) {
        temp = result.split('')
        temp.splice(-kong.length)
        result = temp.join('')
    }
    return result + kong
}
ensure( base64Encode('M'), 'TQ==', '作业7')
ensure( base64Encode('Man'), 'TWFu', '作业7-2')

// 作业 8
// s 是一个 base64 编码后的字符串
// 解码 s 并返回
// 例如 base64Decode('TWFu') 返回 'Man'
//
var base64Decode = function(s) {
    var kewu = ''
    for (i of s) {
        if (i !== '=') {
            kewu += i
        }
    }
    var s = kewu
    var base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    var ascii2 = []
    for (i2 of s) {
        for (var i = 0; i < base64.length; i++) {
            if (i2 === base64[i]) {
                ascii2.push(i)
            }
        }
    }
    // 每个单元转换后  19  22  5  46
    var dan4 = ''
    for (i of ascii2) {
        dan4 += ( bu0( (i).toString(2), 6 ) )
    }
    // 4 个单元 010011 010110 000101 101110
    // 二进制   010011010110000101101110
    var ascii = []
    for (i of qie(dan4,8)) {
        ascii.push( int(i) )
    }
    // ASCII         77       97        110
    var result = ''
    for (i of ascii) {
        if (i > 32) {
            result += String.fromCharCode(i)
        }
    } return result
}
ensure( base64Decode('TWFu'), 'Man', '作业8')
ensure( base64Decode('TQ=='), 'M', '作业8-2')

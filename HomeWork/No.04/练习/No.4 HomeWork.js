// 16/09/22
// 作业 4
//
// 注意, 自行去定义 log 函数(抄)
// 注意, 本次作业会慢慢更新
// 更新 4.11


// 资料 1
// 求数组的和
var sum = function(array) {
    // 先设置一个变量用来存 和
    var s = 0
    // 遍历数组
    for(var i = 0; i < array.length; i++) {
        // 用变量 n 保存元素值
        var n = array[i]
        // 累加到变量 s
        s = s + n
    }
    // 循环结束, 现在 s 里面存的是数组中所有元素的和了
  	return s
}
var log = function() {
    console.log.apply(console, arguments)
    }
    //定义自己的log很重要
var a = [1, 2, 3, 4]
log('sum', sum(a))



// 作业 1
// 参数是一个只包含数字的 array
// 求 array 的乘积
// 函数定义是
var product = function(array) {
    var ji = 1 //初始化乘积为 1
    for (var i = 0; i < array.length; i++) {
        //log(array[i])
        ji = ji * array[i]
    }
    return ji
}
product ( [2,4,6,7,8] )

// 作业 2
// 返回一个数的绝对值
// 函数定义是
var abs = function(n) {
    if (n < 0) {
        n = -n
    }
    return n
}
abs(-188)

// 作业 3
// 参数是一个只包含数字的 array
// 求 array 中所有数字的平均数
// 函数定义是
var average = function(array) {
    var he = 0
    for (var i = 0; i < array.length; i++) {
        he = he + array[i]
    }
    var average = he / array.length
    return average
}
average ( [12,55,2,72,3] )


// 作业 4
// 参数是一个只包含数字的 array
// 求 array 中最小的数字
// 函数定义是
var min = function(array) {
    var xiao = 0
    for (var i = 0; i < array.length; i++) {
        if (xiao > array[i]) {
            xiao = array[i]
        }
    }
    return xiao
}
min( [12,55,-2,-72,3] )


// 作业 5
/*
参数是一个数字 n
返回以下序列的结果
1 - 2 + 3 - 4 + 5 ... n
*/
var range = function( n ) {
    var i = 0
    var a = []
    while (i < n) {
        i++
        list = a.push(i)
    }
    return a
}
var sum1 = function(n) {
    var array = range(n)
    var end = 0
    var sum_ou = 0
    var sum_ji = 0
    for (var i = 0; i < array.length; i+=2) {
        sum_ji += array[i]
        //log(`奇数${array[i]}`)
    }
    for (var i = 1; i < array.length; i+=2) {
        sum_ou += array[i]
        //log(`偶数${array[i]}`)
    }
    return sum_ou - sum_ou
}
sum1(10)

// 作业 6
/*
参数是一个数字 n
返回以下序列的结果
1 + 2 - 3 + 4 - ... n
*/
var range = function( n ) {
    var i = 0
    var a = []
    while (i < n) {
        i++
        list = a.push(i)
    }
    return a
}
var sum1 = function(n) {
    var array = range(n)
    var end = 0
    var sum_ou = 0
    var sum_ji = -1
    //第一位为 +1则 |-sum_ji+1| == |sum_ji -1|
    for (var i = 2; i < array.length; i+=2) {
        sum_ji += array[i]
        //log(`奇数${array[i]}`)
    }
    for (var i = 1; i < array.length; i+=2) {
        sum_ou += array[i]
        //log(`偶数${array[i]}`)
    }
    return sum_ou - sum_ji
}
sum1(10)


// 作业 7
/*
实现 fac 函数
接受一个参数 n
返回 n 的阶乘, 1 * 2 * 3 * ... * n
*/
var range = function( n ) {
    var i = 0
    var a = []
    while (i < n) {
        i++
        list = a.push(i)
    }
    return a
}
var fac = function(n) {
    var array = range(n)
    var cheng = 1
    for (var i = 0; i < array.length; i++) {
        cheng *= array[i]
    }
    return cheng
}
fac(15)



/*
注意 下面几题中的参数 op 是 operator(操作符) 的缩写

作业 8
实现 apply 函数
参数如下
op 是 string 类型, 值是 '+' '-' '*' '/' 其中之一
a b 分别是 2 个数字
根据 op 对 a b 运算并返回结果(加减乘除)
*/
var apply = function(op, a, b) {
    if       (op === '+') {
        return a+b
    }else if (op === '-') {
        return a-b
    }else if (op === '*') {
        return a*b
    }else if (op === '/') {
        return a/b
    }
}
var op = '*'
var a  = 2
var b  = 3
apply(op,a,p)

/*
作业 9
实现 applyList 函数
op 是 '+' '-' '*' '/' 其中之一
oprands 是一个只包含数字的 list
根据 op 对 oprands 中的元素进行运算并返回结果
例如, 下面的调用返回 -4
var n = applyList('-', [3, 4, 2, 1])
log(n)
// 结果是 -4, 用第一个数字减去所有的数字
*/
var applyList = function(op, oprands) {
    var array = oprands
    var end = oprands[0]
    if (op === '+') {
        for (var i = 1; i < array.length; i++) {
            end += array[i]
        }
        return end
    }
    else if (op === '-') {
        for (var i = 1; i < array.length; i++) {
            end -= array[i]
        }
        return end
    }
    else if (op === '*') {
        for (var i = 1; i < array.length; i++) {
            end *= array[i]
        }
        return end
    }
    else if (op === '/') {
        for (var i = 1; i < array.length; i++) {
            end /= array[i]
        }
        return end
    }
}
applyList('*',[2,4,6,7,8])

/*
作业 10
实现 applyCompare 函数
参数如下
expression 是一个 array(数组), 包含了 3 个元素
第一个元素是 op, 值是 '>' '<' '==' 其中之一
剩下两个元素分别是 2 个数字
根据 op 对数字运算并返回结果(结果是 true 或者 false)
*/
var applyCompare = function(expression) {
    var op = expression[0]
    var a  = expression[1]
    var b  = expression[2]
    if       (op === '==') {
        return a == b
    }else if (op === '<' ) {
        return a  < b
    }else if (op === '>' ) {
        return a  > b
    }
}
applyCompare(['==',3,3])

/*
注意
下面这题做不出来没关系

作业 11
实现 applyOps 函数
参数如下
expression 是一个 array
expression 中第一个元素是上面几题的 op, 剩下的元素是和 op 对应的值
根据 expression 运算并返回结果
*/
var applyOps = function(expression) {
    var op = expression[0]
    var a  = expression[1]
    var b  = expression[2]
    if       (op === '==') {
        return a == b
    }else if (op === '<' ) {
        return a  < b
    }else if (op === '>' ) {
        return a  > b
    }else if (op === '+' ) {
        return a  + b
    }else if (op === '-' ) {
        return a  - b
    }else if (op === '*' ) {
        return a  * b
    }else if (op === '/' ) {
        return a  / b
    }
}
applyOps(['==',3,3])


// 注意
// 下次作业起, 会用更标准简练的方式来表示参数类型和说明
// 另外, 下次开始会引入测试这个概念

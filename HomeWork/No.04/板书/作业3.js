// 16/09/20
// 作业 3
//
// 作业开始
// 注意, 作业中提到的颜色我们不关心

// 1
// 实现一个矩形函数
// x y 是矩形左上角坐标
// w h 是宽高
// rect(x, y, w, h)
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    for (var i = 0; i < 2; i++) {
        forward(w)
        right(90)
        forward(h)
        right(90)
    }
}


// 2
// 实现一个矩形函数
// x y 是矩形中心的坐标
// w h 是宽高
// center_rect(x, y, w, h)
var center_rect = function(x, y, w, h) {
    // 求出左上角坐标
    var x1 = x - w / 2
    var y1 = y - h / 2
    // 画矩形
    rect(x1, y1, w, h)
}

// rect(0, 0, 100, 100)
// center_rect(0, 0, 100, 100)


// 3
// 实现一个圆形函数
// x y 是圆心坐标
// r 是半径
// circle(x, y, r)
// 提示, 我们以正 36 边形为圆
var circle = function(x, y, r) {
    var n = 36
    var c = 2 * 3.14 * r
    var l = c / n

    jump(x, y)
    setHeading(0)
    left(90)
    left(360 / n / 2)
    penup()
    forward(r)
    pendown()
    setHeading(0)
    // 循环画正 n 边形
    var angle = 360 / n
    for (var i = 0; i < n; i++) {
        forward(l)
        right(angle)
    }
}

// circle(0, 0, 50)


// 4
// 实现一个五角星函数
// x y 是五角星横边左边坐标
// length 是一条线的长度
// wujcxy(x, y, length)
var wujcxy = function(x, y, length) {
    jump(x, y)
    setHeading(0)

    var n = 5
    var angle = 144
    for (var i = 0; i < n; i++) {
        forward(length)
        right(angle)
    }
}

// wujcxy(0, 0, 100)


// 5
// 实现一个函数画日本国旗
// 调用 2 个函数画日本国旗
// 一个画背景的白色矩形
// 一个画中间的红色圆
// japan()
var japan = function() {
    var x = 0
    var y = 0
    var w = 100
    var h = 75

    // 圆心坐标
    var x1 = x + w / 2
    var y1 = y + h / 2
    var r = h * 0.3
    rect(x, y, w, h)
    circle(x1, y1, r)
}

// japan()


// 注意, 你可以添加 x y w h 参数让国旗画在任意地方, 任意尺寸
// 注意, 以下所有国旗同理

// 6
// 实现一个函数画中国国旗(以下国旗题目都是如此 不重复了)
// 调用 2 个函数画中国国旗
// 一个画红色背景
// 另一个画五角星（调用 5 次，不要求角度朝向，只要5个五角星即可）
// china()

// 7
// 实现一个函数画法国国旗
// france()
var france = function() {
    var x = 0       // 重要配置文件 1
    var y = 0       // 领导配置 2
    var w = 100     // 老板配置 3
    var h = 75      // pm 配置 4

    var width = y / 3
    rect(x, y, width, h)
    rect(x + width, y, width, h)
    rect(x + width * 2, y, width, h)
}

// 8
// 画德国国旗
// germany()

// 9
// 画 冈比亚国旗
// gambia()

// 10
// 画 瑞士国旗
// switzerland()

// 11
// 画朝鲜国旗
// 分别是 圆 矩形 五角星
// 提示, 使用之前定义的函数
// northkorea()

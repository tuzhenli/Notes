// 2016/09/17
//
// 作业 2
// 以后每次的作业出来后 我会发群公告
// 把内容复制到 atom 保存为 .js 文件
// 代码在下面的网址运行
// http://vip.cocode.cc/arena


// 定义上课讲的 log 函数
// 这是一个根据上课时一个同学做的套路
// 先别管原理，知道它会输出数据就行
var log = function() {
    console.log.apply(console, arguments)
}

// 作业 2 资料
//
// 循环的资料
// 在循环体内, 通过 i 变量得到当前是第几次循环
var i = 1
while(i < 5) {
    log(i)
    i++
}


// 画图背景资料
// ----------
// 画图的画面长宽不知几何
// 原点在画布的中点
// 往右是 x 轴正向
// 往上是 y 轴正向
//
// 初始化的状态是箭头在原点 朝右
//
// 下面介绍一些常用的函数

// 定义一个变量表示步长
var step = 50

// forward 表示向前走
// 刚开始的时候朝右, 并且在坐标 (0, 0)
forward(step)

// penup 可以把笔抬起来, 这样往前走就不会画线了
penup()
forward(step)

// pendown 后又可以画线了
pendown()
forward(step)

// left 可以往左转, 参数是角度
left(90)
forward(step)

// setHeading 可以设置箭头的朝向, 0 就是朝右
// 90 和 -90 的朝向, 自行摸索一下
setHeading(0)

// setPenSize 可以改变线条粗细
// 建议不要太大
setPenSize(5)

// setPenColor 可以设置画笔颜色, 颜色的具体数值可以通过下面这个网页得到
// http://tool.ganchang.cn/getcolortool.html
// 注意, 参数是一个字符串
color = '#55C2DD'
setPenColor(color)

// right 可以右转
right(30)
forward(step)

// goto 可以直接走到某个坐标
// 这里是走到 (100, 200) 这个坐标
goto(100, 200)

// jump 可以无痕走到某个坐标
jump(0, 0)

// 隐藏箭头
hide()

// 显示箭头
show()


// ---
// 画图背景资料结束, 下面是作业
// 作业请参考上课的代码来做
// ---


// 例子 1
//
// 实现函数, 用于画一个边长 100 的正方形
// 参数 x, y 是正方形左上角坐标
var square = function(x, y) {
    jump(x, y)
    // 设置朝向, 确保箭头朝向 右边
    // 当然如果是用 goto 来画的话, 就不用关心朝向
    setHeading(0)
    // 循环画正方形
    // 当然, 你可以用 goto 来画
    // 只需要计算一下四个顶点的坐标 (这很简单)
    var i = 0
    while(i < 4) {
        i++
        forward(100)
        right(90)
    }
}

// 1
// 实现函数, 用于画一个正方形, 边长由参数提供
// 参数 x, y 是正方形左上角坐标
// 参数 l 是正方行边长
// 函数声明如下
// square(x, y, l)
var square = function(x, y, l) {
    jump(x, y)
    // 设置朝向, 确保箭头朝向 右边
    // 当然如果是用 goto 来画的话, 就不用关心朝向
    setHeading(0)
    // 循环画正方形
    // 当然, 你可以用 goto 来画
    // 只需要计算一下四个顶点的坐标 (这很简单)
    var i = 0
    while(i < 4) {
        i++
        forward(l)
        right(90)
    }
}

square(0, 0, 50)
square(10, 10, 30)

// 2
// 实现函数, 用于画一个矩形, 长宽由参数提供
// 参数 x, y 是左上角坐标
// 参数 w, h 是长宽
// 函数声明如下
// rect(x, y, w, h)
var rect = function(x, y, w, h) {
    jump(x, y)
    // 设置朝向, 确保箭头朝向 右边
    // 当然如果是用 goto 来画的话, 就不用关心朝向
    setHeading(0)
    // 循环画矩形
    // 当然, 你可以用 goto 来画
    // 只需要计算一下四个顶点的坐标 (这很简单)
    var i = 0
    while(i < 2) {
        i++
        forward(w)
        right(90)
        forward(h)
        right(90)
    }
}

rect(-100, 0, 50, 40)


// 3
// 画一排正方形, 一共 5 个
// 从 0 0 点开始, 边长为 30, 正方形之间间隔为 0
// 函数声明如下
// square5(x, y)
// 提示 根据资料中的循环例子, 计算每个正方形的坐标
var square = function(x, y, l) {
    jump(x, y)
    // 设置朝向, 确保箭头朝向 右边
    // 当然如果是用 goto 来画的话, 就不用关心朝向
    setHeading(0)
    // 循环画正方形
    // 当然, 你可以用 goto 来画
    // 只需要计算一下四个顶点的坐标 (这很简单)
    var i = 0
    while(i < 4) {
        i++
        forward(l)
        right(90)
    }
}

var square5 = function(x, y) {
    jump(x, y)
    setHeading(0)
    // 循环画正方形
    var len = 30
    var i = 0
    while(i < 5) {
        var x = len * i
        var y = 0
        square(x, y, len)
        i++
    }
}
square5(1, 2)

// 4
// 画一排正方形, 一共 5 个
// 从 0 0 点开始, 边长为 30, 正方形之间间隔为 10 像素
// 函数声明如下
// square5(x, y)
var square = function(x, y, l) {
    jump(x, y)
    // 设置朝向, 确保箭头朝向 右边
    // 当然如果是用 goto 来画的话, 就不用关心朝向
    setHeading(0)
    // 循环画正方形
    // 当然, 你可以用 goto 来画
    // 只需要计算一下四个顶点的坐标 (这很简单)
    var i = 0
    while(i < 4) {
        i++
        forward(l)
        right(90)
    }
}

var square5 = function(x, y) {
    jump(x, y)
    setHeading(0)
    // 循环画正方形
    var len = 30
    var margin = 10
    var i = 0
    while(i < 5) {
        var x = (len + margin) * i
        var y = 0
        square(x, y, len)
        i++
    }
}
square5(0, 0)

// 5
// 实现函数, 画一排正方形, 有如下参数
// x, y 是第一个正方形左上角坐标
// n 是正方形的个数
// space 是两个正方形之间的间距
// l 是正方形的边长
// square_line(x, y, n, space, l)
var square = function(x, y, l) {
    jump(x, y)
    // 设置朝向, 确保箭头朝向 右边
    // 当然如果是用 goto 来画的话, 就不用关心朝向
    setHeading(0)
    // 循环画正方形
    // 当然, 你可以用 goto 来画
    // 只需要计算一下四个顶点的坐标 (这很简单)
    var i = 0
    while(i < 4) {
        i++
        forward(l)
        right(90)
    }
}

var square_line = function(x, y, n, space, l) {
    jump(x, y)
    setHeading(0)
    // 循环画正方形
    var len = l
    var margin = space
    var i = 0
    while(i < n) {
        var x1 = (len + margin) * i + x
        var y1 = y
        square(x1, y1, len)
        i++
    }
}
square_line(-100, -100, 3, 30, 50)


// 6
// 实现函数, 用上题的函数来画一个正方形方阵, 参数如下
// x, y 是第一个正方形左上角坐标
// space 是两个正方形之间的间距
// l 是正方形的边长
// n 是横向正方形的个数
// m 是纵向正方形的个数
// square_square(x, y, space, l, n, m)
var square = function(x, y, l) {
    jump(x, y)
    // 设置朝向, 确保箭头朝向 右边
    // 当然如果是用 goto 来画的话, 就不用关心朝向
    setHeading(0)
    // 循环画正方形
    // 当然, 你可以用 goto 来画
    // 只需要计算一下四个顶点的坐标 (这很简单)
    var i = 0
    while(i < 4) {
        i++
        forward(l)
        right(90)
    }
}

var square_line = function(x, y, n, space, l) {
    jump(x, y)
    setHeading(0)
    // 循环画正方形
    var len = l
    var margin = space
    var i = 0
    while(i < n) {
        var x1 = (len + margin) * i + x
        var y1 = y
        square(x1, y1, len)
        i++
    }
}

var square_square = function(x, y, space, l, n, m) {
    var i = 0
    while(i < m) {
        var x1 = x
        var y1 = y + i * (l + space)
        square_line(x1, y1, n, space, l)
        i++
    }
}

square_square(-100, -100, 10, 30, 3, 4)

// 7
// 实现函数, 画一排矩形, 有如下参数
// x, y 是第一个矩形左上角坐标
// w, h 是矩形长宽
// n 是矩形的个数
// space 是两个矩形之间的间距
// rect_line(x, y, w, h, n, space)


// 8
// 实现函数, 画一个矩形方阵, 参数如下
// x, y 是第一个矩形左上角坐标
// space 是两个矩形之间的间距(横向和纵向)
// w, h 是矩形的长宽
// n 是横向矩形的个数
// m 是纵向矩形的个数
// rect_square(x, y, space, w, h, n, m)


// 9
// 实现函数, 画一个正多边形, 参数如下
// x y 是起点, 设起点为多边形的顶部边的左顶点
// n 是多边形的边数
// l 是边长
// polygon(x, y, n, l)
var polygon = function(x, y, n, l) {
    jump(x, y)
    setHeading(0)

    // draw
    var angle = 360 / n
    var i = 0
    while(i < n) {
        i++
        forward(l)
        right(angle)
    }
}
polygon(0, 0, 8, 30)

// 10
// 实现函数, 画圆
// 参数如下
// x, y, r 分别是 圆心坐标 和 半径
// circle(x, y, r)
//
// 思路
// 假设圆为正 36 边形(无所谓 你可以提高 我觉得 36 就好了)
// 记住, 我们只是画出近似图形, 它当然不是完美圆
// 那么周长 c 是 2 * PI * r
// PI 就设为 3.14 好了
// 所以就可以算出 边长
// 有了边长 就能算出第一步的坐标
// 然后就可以画一个 正36边形 了
// 记得用 资料中的函数来辅助
//
// 提示, 有中心点, 就能算出顶部边的起点
// 使用角度 / 转向 / setHeading 实现这个函数

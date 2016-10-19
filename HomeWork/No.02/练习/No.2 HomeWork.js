// 16/09/17
// 作业 2
//
// 作业开始
// 地下竞技场 http://vip.cocode.cc/arena

// 1
// 实现函数, 用于画一个正方形, 边长由参数提供
// 参数 x, y 是正方形左上角坐标
// 参数 l 是正方行边长
// 函数声明如下
// square(x, y, l)
var square = function(x, y, l) {
  jump( x, y )
  setHeading( 0 )
  var i = 0
  while (i<4) {
    i=i+1
    forward( l )
    right( 90 )
  }
}
square(50,50,100)

// 2
// 实现函数, 用于画一个矩形, 长宽由参数提供
// 参数 x, y 是左上角坐标
// 参数 w, h 是长宽
// 函数声明如下
// rect(x, y, w, h)
var rect = function(x, y, w, h) {
  jump( x, y )
  setHeading( 0 )
  var i = 0
  while (i<2) {
    i=i+1
    forward( w )
    right( 90 )
    forward( h )
    right( 90 )
  }
}
rect(50,50,100,150)

// 3
// 画一排正方形, 一共 5 个
// 从 0 0 点开始, 边长为 30, 正方形之间间隔为 0
// 函数声明如下
// square5(x, y, w, h)
// 提示 根据资料中的循环例子, 计算每个正方形的坐标
var square5=function(x, y, w, h) {
  var i2 = 0
  while (i2<5) {
    jump(i2*w,y)
    setHeading(0)
    var i = 0
    while (i<4) {
      forward( w )
      right( 90 )
    i+=1
    }
  i2+=1
  }
}
square5(0,0,30,30)

// 4
// 画一排正方形, 一共 5 个
// 从 0 0 点开始, l边长为 30, 正方形之间间隔 space 为 10 像素
// 函数声明如下
// square5(x, y, space, l)
var square5 = function(x, y, space, l) {
  var i2 = 0
  while (i2<5) {
    // l + space 即可
    jump(i2*(l+space), y)
    setHeading(0)
    var i = 0
    while (i<4) {
      forward( l )
      right( 90 )
    i+=1
    }
  i2+=1
  }
}
square5(0, 0, 10, 30)

// 5
// 实现函数, 画一排正方形, 有如下参数
// x, y 是第一个正方形左上角坐标
// n 是正方形的个数
// space 是两个正方形之间的间距
// l 是正方形的边长
// square_line(x, y, n, space, l)
var square5 = function(x, y, n, space, l) {
  var i2 = 0
  while (i2 < n) {
    // l + space 即可
    jump(i2*(l+space), y)
    setHeading(0)
    var i = 0
    while (i<4) {
      forward( l )
      right( 90 )
    i+=1
    }
  i2+=1
  }
}
square5(0, 0, 3, 10, 30)

// 6
// 实现函数, 用上题的函数来画一个正方形方阵, 参数如下
// x, y 是第一个正方形左上角坐标
// space 是两个正方形之间的间距
// l 是正方形的边长
// n 是横向正方形的个数
// m 是纵向正方形的个数
// square_square(x, y, space, l, n, m)
var square5 = function(x, y, space, l, n, m) {
  var i3 = 0
  while (i3 < m) {
    y = i3*(l+space)
    var i2 = 0
    while (i2 < n) {
      // l + space 即可
      jump(i2*(l+space), y)
      setHeading(0)
      var i = 0
      while (i<4) {
        forward( l )
        right( 90 )
      i+=1
      }
    i2+=1
    }
    i3+=1
  }
}
square5(-100, -100, 10, 30, 3, 3)

// 7
// 实现函数, 画一排矩形, 有如下参数
// x, y 是第一个矩形左上角坐标
// w, h 是矩形长宽
// n 是矩形的个数
// space 是两个矩形之间的间距
// rect_line(x, y, w, h, n, space)
var rect_line = function(x, y, w, h, n, space) {
  var i2 = 0
  while (i2<n) {
    jump( i2*(w+space)+x, y )
    setHeading(0)
    var i = 0
    while (i<2) {
      forward( w )
      right( 90 )
      forward( h )
      right( 90 )
    i++
    }
  i2++
  }
}
rect_line(-100,-100,30,20,5,10)

// 8
// 实现函数, 画一个矩形方阵, 参数如下
// x, y 是第一个矩形左上角坐标
// space 是两个矩形之间的间距(横向和纵向)
// w, h 是矩形的长宽
// n 是横向矩形的个数
// m 是纵向矩形的个数
// rect_square(x, y, space, w, h, n, m)
var rect_square = function(x, y, space, w, h, n, m) {
  var i3 = 0
  while (i3<m) {
    var i2 = 0
    while (i2<n) {
      jump( i2*(w+space)+x, i3*(h+space)+y )
      setHeading(0)
      var i = 0
      while (i<2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
      i++
      }
    i2++
    }
  i3++
  }
}
rect_square(0,0,10,30,20,3,3)

// 9
// 实现函数, 画一个正多边形, 参数如下
// x y 是起点, 设起点为多边形的顶部边的左顶点
// n 是多边形的边数
// l 是边长
// polygon(x, y, n, l)
var polygon = function(x, y, n, l) {
  jump(x,y)
  setHeading(0)
  var i = 0
  while (i<n) {
    forward(l)
    right(360/n)
  i+=1
  }
}
polygon(0, 0, 10, 25)

// 10
// 实现函数, 画圆
// 参数如下
// x, y, r 分别是 圆心坐标 和 半径
// circle(x, y, r)
var circle = function(x, y, r) {
  jump(0,-r)
  var pai = 3.14//假设 π 为 3.14
  var yuan = 36 //假设圆为正 36 边形
  var c = 2*pai*r   //周长
  var l = c/yuan    //边长
  var i = 0
  while (i<yuan) {
    forward(l)
    right(360/yuan)
  i+=1
  }
}
circle(0,0,30)

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

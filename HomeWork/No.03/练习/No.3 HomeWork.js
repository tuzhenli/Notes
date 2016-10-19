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
    jump( x, y )
    setHeading( 0 )
    var i = 0
    while (i < 2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
    i+=1
    }
}
rect(0,0,30,40)

// 2
// 实现一个矩形函数
// x y 是矩形中心的坐标
// w h 是宽高
// center_rect(x, y, w, h)
var center_rect = function(x, y, w, h) {
    var xx = w/2 + x
    var yy = h/2 + y
    jump( xx, yy )
    setHeading( 180 )
    var i = 0
    while (i < 2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
    i+=1
    }
    jump(x,y)
}
center_rect(0,0,30,40)

// 3
// 实现一个圆形函数
// x y 是圆心坐标
// r 是半径
// circle(x, y, r)
var circle = function(x, y, r) {
    var pai = 3.14		//π
    var yuan = 36       //边
    var c = 2 * pai * r	//周长
    var l = c / yuan    //边长
    jump( l / 2 + x, -r + y)
    //跳到上方 x 为 1/2 边长，y 为半径
    setHeading( 0 )
    right( 360 / yuan )
    var i = 0
    while (i<yuan) {
    	forward( l )
    	right( 360 / yuan )
    i++
    }
}
circle(0,0,100)

// 4
// 实现一个五角星函数
// x y 是五角星横边左边坐标
// length 是一条线的长度
// wujcxy(x, y, length)
var wujcxy = function(x, y, length, angle) {
    var l = length
    jump(x,y)
	//开始画 Echo
    setHeading(angle)
    var i = 0
    while (i<5) {
      forward(l)
      right(144)
    i+=1
    }
}
wujcxy(0,0,100,50)

// 5
// 实现一个函数画日本国旗
// 调用 2 个函数画日本国旗
// 一个画背景的白色矩形
// 一个画中间的红色圆
// japan()
var circle = function(x, y, r) {
    var pai = 3.14		//π
    var yuan = 36       //边
    var c = 2 * pai * r	//周长
    var l = c / yuan    //边长
    jump( l / 2 + x, -r + y)
    //跳到上方 x 为 1/2 边长，y 为半径
    setHeading( 0 )
    right( 360 / yuan )
    var i = 0
    while (i<yuan) {
    	forward( l )
    	right( 360 / yuan )
    i++
    }
}
var center_rect = function(x, y, w, h) {
    var xx = w/2 + x
    var yy = h/2 + y
    jump( xx, yy )
    setHeading( 180 )
    var i = 0
    while (i < 2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
    i+=1
    }
}
var japan = function(x, y, w, h) {
    center_rect(x,y,w,h)
    circle(x,y,(1-0.6)/2*w)
}
japan(0,0,300,200)

// 注意, 你可以添加 x y w h 参数让国旗画在任意地方, 任意尺寸
// 注意, 以下所有国旗同理

// 6
// 实现一个函数画中国国旗(以下国旗题目都是如此 不重复了)
// 调用 2 个函数画中国国旗
// 一个画红色背景
// 另一个画五角星（调用 5 次，不要求角度朝向，只要5个五角星即可）
// china()
var center_rect = function(x, y, w, h) {
    var xx = w/2 + x
    var yy = h/2 + y
    jump( xx, yy )
    setPenColor('red')
    setHeading( 180 )
    var i = 0
    while (i < 2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
    i+=1
    }
}
var wujcxy = function(x, y, length, angle) {
    var l = length
    jump(x,y)
    setPenColor('yellow')
    //开始画 Echo
    setHeading(angle)
    var i = 0
    while (i<5) {
      forward(l)
      right(144)
    i+=1
    }
}
var china = function(x, y, w) {
    center_rect(x,y,w,2/3*w) //国旗比例 2:3
    wujcxy(-60/300*w,-80/300*w,20/300*w,15/300*w)
    wujcxy(-40/300*w,-60/300*w,20/300*w,5/300*w)
    wujcxy(-40/300*w,-30/300*w,20/300*w,-5/300*w)
    wujcxy(-60/300*w,-10/300*w,20/300*w,-15/300*w)
    wujcxy(-130/300*w,-55/300*w,60/300*w,0*w)
}
china(0,0,300)

// 7
// 实现一个函数画法国国旗
// france()
var center_rect = function(x, y, w, h) {
    var xx = w/2 + x
    var yy = h/2 + y
    jump( xx, yy )
    setHeading( 180 )
    var i = 0
    while (i < 2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
    i+=1
    }
    jump(x,y)
}
var france = function(x, y, w) {
    var l = w/3
    setPenColor('blue')
    center_rect(-l, 0, l, 2/3*w)
    setPenColor('black')
    center_rect( 0, 0, l, 2/3*w)
    setPenColor('red')
	center_rect( l, 0, l, 2/3*w)
}
france(0,0,300)

// 8
// 画德国国旗
// germany()
var center_rect = function(x, y, w, h) {
    var xx = w/2 + x
    var yy = h/2 + y
    jump( xx, yy )
    setHeading( 180 )
    var i = 0
    while (i < 2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
    i+=1
    }
    jump(x,y)
}
var germany = function(x, y, w) {
    var l = 3 / 5 * w / 3
    setPenColor('#000000')
    center_rect(0,-l, w, l)
    setPenColor('#FF0000')
    center_rect(0, 0, w, l)
    setPenColor('#FFFF00')
	center_rect(0, l, w, l)
    setPenColor('#FF0000')
	center_rect(0, l, w, l)
}
germany(0,0,300)

// 9
// 画 冈比亚国旗
// gambia()
var center_rect = function(x, y, w, h) {
    var xx = w/2 + x
    var yy = h/2 + y
    jump( xx, yy )
    setHeading( 180 )
    var i = 0
    while (i < 2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
    i+=1
    }
    jump(x,y)
}
var rect = function(x, y, w, h) {
    jump( x, y )
    setHeading( 0 )
    var i = 0
    while (i < 2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
    i+=1
    }
}
var gambia = function(x, y, w) {
    var l = 2 / 3 * w / 3 //比例3：2
	setPenColor('red')
    center_rect(0,-l, w, l)
    setPenColor('blue')
    center_rect(0, 0, w, l)
    setPenColor('green')
	center_rect(0, l, w, l)
    setPenColor('black')
    var m = l/4
    rect(-w/2,   m, w, m)
    rect(-w/2,-m-m, w, m)
}
gambia(0,0,300)

// 10
// 画 瑞士国旗
// switzerland()
var center_rect = function(x, y, w, h) {
    var xx = w/2 + x
    var yy = h/2 + y
    jump( xx, yy )
    setHeading( 180 )
    var i = 0
    while (i < 2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
    i+=1
    }
    jump(x,y)
}
var switzerland = function(x, y, w, h) {
    setPenColor('red')
    center_rect(0,0,w,h)
    setPenColor('black')
    center_rect(0,0, 60/250*w,160/250*w)
    center_rect(0,0,160/250*w, 60/250*w)
}
switzerland(0,0,250,250)

// 11
// 画 朝鲜国旗
// 分别是 圆 矩形 五角星
// 提示, 使用之前定义的函数
// northkorea()
var center_rect = function(x, y, w, h) {
    var xx = w/2 + x
    var yy = h/2 + y
    jump( xx, yy )
    setHeading( 180 )
    var i = 0
    while (i < 2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
    i+=1
    }
    jump(x,y)
}
var rect = function(x, y, w, h) {
    jump( x, y )
    setHeading( 0 )
    var i = 0
    while (i < 2) {
        forward( w )
        right( 90 )
        forward( h )
        right( 90 )
    i+=1
    }
}
var circle = function(x, y, r) {
    var pai = 3.14		//π
    var yuan = 36       //边
    var c = 2 * pai * r	//周长
    var l = c / yuan    //边长
    jump( l / 2 + x, -r + y)
    //跳到上方 x 为 1/2 边长，y 为半径
    setHeading( 0 )
    right( 360 / yuan )
    var i = 0
    while (i<yuan) {
    	forward( l )
    	right( 360 / yuan )
    i++
    }
} // 圆
var wujcxy = function(x, y, length, angle) {
    var l = length
    jump(x,y)
	//开始画 Echo
    setHeading(angle)
    var i = 0
    while (i<5) {
      forward(l)
      right(144)
    i+=1
    }
}// 星
var yuan = function(x, y, r) {
    var length = 2 * r
    var angle = 0
 	var x1 = -24/72*4.5*r
    var y1 = y

    circle(x + x1,y + y1,r)
    wujcxy(-47/50*r + x1, -15/50*r + y1, 94/100*length, angle)
}
var northkorea = function(w) {
    var l  = 1 / 2 * w  //l =72 比例2：1
    var l2 = 1 / 2 * l  //l2=36
    var l3 = 12/72 * l  //l3=12
    var l4 = 2 /72 * l  //l4= 2
    var l5 = 44/72 * l  //l5=44
    var l6 = 16/72 * l  //16=16
    rect (-l,  -l2      , w,l3)
    rect (-l,  -l2+l3   , w,l4)
    rect (-l,  -l2+l3+l4, w,l5)
    rect (-l,   l2-l3-l4, w,l4)
    rect (-l,   l2-l3   , w,l3)
    yuan(0,0,l6)
}
northkorea(310)

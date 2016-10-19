// 2016/10/18
//
// 此为第 15 课的上课内容
//
// 今天上课的主要内容有
//
// log 的要素
// git 和 github
// js 的一些高级内容 bind apply call
// 前端 CSS 框架 Bootstrap 和 Pure
//


/*
log 的要素
  1, 确保代码执行
  2, 打印所有能打印的变量

log('element', element, element+1, typeof element)
add(element+1)


github 网站使用方法参考如下链接
https://www.zhihu.com/question/20070065/answer/79557687
安装 github desktop 必须使用群文件中的离线安装包
安装后必须注册 github 账号才能使用


这是两个比较流行的 CSS 框架(别人帮你写好你直接拿来就可以用的 CSS 文件)

Bootstrap 官网如下
http://getbootstrap.com/
简易教程如下(先随便看看)
http://www.runoob.com/bootstrap/bootstrap-tutorial.html

Pure 官网如下
http://purecss.io/


js 的东西得上课配合实例讲解

var o = {
    foo: 1,
    bar: function(){
        return this.foo
    }
}

o.bar()

var a = o.bar
a()

var b = o.bar.bind(o)


var log = function(){
    // apply 做了两件事情, 1是绑定 this
    // 2 是把数组参数解开传给函数
    console.log.apply(console, arguments)
    // 调用 log 函数, this 是 cosnole
    // arguments 是一个数组, 但是作为参数 传递给 log 函数
    log(1, 2, 3)
    arguments = [1, 2, 3]
    // console.log([1, 2, 3])
    // console.log(1, 2, 3)

    // call 和 apply 一模一样几乎
    // 区别只在于传递参数的方式
    console.log.apply(console, [1, 2, 3, 4])
    console.log.call(console, 1, 2, 3, 4)
}
*/

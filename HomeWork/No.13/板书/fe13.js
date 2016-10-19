// 2016/10/13
//
// 此为第 13 课的上课内容
//
// 今天上课的主要内容有
//
// jQuery 常见用法
// 接下来课程的重点
// 常用组件例如弹窗的制作
//
// 应该能看懂一部分, 不懂的稍微做个笔记, 等上课讲解


// 又一次定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}

/*
jQuery 是一个常用的 js 库, 提供了 DOM 操作, AJAX 封装, 兼容性等功能
具体的, 上课再说

你需要新建一个 HTML 文件并且引入 jQuery 的 js 代码才能使用 js


按照功能, jQuery 常见的用法划分如下
*/
// a. 选择器
// 1. $
// 2. find
// 3. siblings
// 4. closest, parent
$('body')
$('#id-button-add')
$('.cell')


b. dom 操作
1. append
2. remove
3. empty
4. show, hide, toggle


c. class 操作
1. addClass removeClass
2. toggleClass


d. 属性、特性操作
1. attr, prop, data
2. removeAttr


e. 取值
1. val
2. text
3. html


f. 事件
1. on
2. change
3. event.target


g. 数组方法
1. each
2. map
3. grep


h. ajax
1. contentType, dataType

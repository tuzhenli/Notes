// express_demo.js 文件

// 引入 express 并且创建一个 express 实例赋值给 app
var express = require('express')
var app = express()

var todoList = []

// 配置静态文件目录
app.use(express.static('static'))

var sendHtml = function(path, response) {
    var fs = require('fs')
    var options = {
        encoding: 'utf-8'
    }
    fs.readFile(path, options, function(err, data){
        console.log(`读取的html文件 ${path} 内容是`, data)
        response.send(data)
    })
}
// 用 get 定义一个给用户访问的网址
// request 是浏览器发送的请求
// response 是我们要发给浏览器的响应
app.get('/', function(request, response) {
    // var r = `
    // `
    // fs 是 file system 文件系统的缩写
    // fs 是 node 中处理文件和目录的库
    // var fs = require('fs')
    // var options = {
    //     encoding: 'utf-8'
    // }
    // fs.readFile('index.html', options, function(err, data){
    //     console.log('读取的html文件内容是', data)
    //     response.send(data)
    // })
    var path = 'index.html'
    sendHtml(path, response)
})

app.get('/todo/all', function(request, response) {
    // var todos = `
    // [
    //     {
    //         "id": 1,
    //         "task": "吃饭"
    //     }
    // ]
    // `
    var todos = [
        {
            id: 1,
            task: '吃饭',
        }
    ]
    var r = JSON.stringify(todos)
    response.send(r)
})

app.post('/todo/add', function(request, response) {
    // request.body
})

// listen 函数的第一个参数是我们要监听的端口
// 这个端口是要浏览器输入的
// 默认的端口是 80
// 所以如果你监听 80 端口的话，浏览器就不需要输入端口了
// 但是 1024 以下的端口是系统保留端口，需要管理员权限才能使用
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

//express_demo.js 文件
var express = require('express');
var app = express();

// 安装 $ npm install body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 配置 body-Parser

app.use(express.static('public'))
// 公开 文件

app.get('/', function(req, res) {
    var sendFile = function(path, res) {
        var fs = require('fs')
        fs.readFile(path, {encoding: 'utf-8'}, function(err, data) {
            if (err) {
                console.log('错误', err)
            } else {
                res.send(data)
            }
        })
    }
    var path = 'index.html'
    sendFile(path, res)
})
// 读取 文件

app.post('/text', function (req, res) {
    var data = JSON.stringify(req.body)
    var fs = require("fs");
    fs.writeFile('data.txt', data, function (err) {
        if (err) {
              res.send('错误！')
        } else {
              res.send('POST 数据已保存')
        }
   })
})
// 写入 数据


app.get('/todo/all', function(req, res) {
    var sendFile = function(path, res) {
        var fs = require('fs')
        fs.readFile(path, {encoding: 'utf-8'}, function(err, data) {
            if (err) {
                console.log('错误', err)
            } else {
                res.send(data)
            }
        })
    }
    var path = 'data.txt'
    sendFile(path, res)
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

// 使用cmd的方法技巧五：
// 其实在命令窗下有许多好用的快捷键，可以大大加快您的输入和调试速度
// 而且一些功能还以图形方式提供。
// ↑,↓:选择命令
// ESC：清除当前命令行；
// F7：显示命令历史记录，以图形列表窗的形式给出所有曾经输入的命令，并可用上下箭头键选择再次执行该命令。
// F8：搜索命令的历史记录，循环显示所有曾经输入的命令，直到按下回车键为止；
// F9：按编号选择命令，以图形对话框方式要求您输入命令所对应的编号(从0开始)，并将该命令显示在屏幕上；
// Ctrl+H：删除光标左边的一个字符；
// Ctrl+C 或 Ctrl+Break，强行中止命令执行；
// Ctrl+M：表示回车确认键；
// Alt+F7：清除所有曾经输入的命令历史记录；
// Alt+PrintScreen：截取屏幕上当前命令窗里的内容。

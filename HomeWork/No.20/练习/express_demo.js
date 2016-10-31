//express_demo.js 文件
var express = require('express');
var app = express();

// 安装 $ npm install body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 配置 body-Parser

app.use(express.static('public'))
// 公共 文件

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
    var path = 'data'
    sendFile(path, res)
})
// 读取 数据

app.post('/todo/save', function (req, res) {
    var data = JSON.stringify(req.body)
    var fs = require("fs");
    fs.writeFile('data', data, function (err) {
        if (err) {
              res.send('错误！')
        } else {
              res.send('POST 数据已保存')
        }
   })
})
// 写入 数据

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

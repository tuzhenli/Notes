/*
代码还没注释, 明日(10.11)补上
*/


var ajaxGet = function(request) {
    var r = new XMLHttpRequest()
    r.open('GET', request.url, true)
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            request.callback(r.response)
        }
    }
    r.send()
}

var ajax = function( ku ) {
    var r = new XMLHttpRequest()
    r.open( ku.method, ku.url, true )
    r.setRequestHeader('Content-Type', ku.contentType)
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            ku.callback(r.response)
        }
    }
    r.send( ku.data )
}

var allTodos = function() {
    var request = {
        url: 'http://vip.cocode.cc:3000/todo/3400711034/all',
        callback: function(response) {
            console.log(response)
        }
    }
    ajaxGet(request)
}

/*
POST
{"task": "study"}
http://vip.cocode.cc:3000/todo/<你的qq号>/add
*/
var addTodo = function() {
    var request = {
        url: 'http://vip.cocode.cc:3000/todo/3400711034/add',
        method: 'POST',
        contentType: 'application/json',
        data: '{"task": "study"}',
        callback: function(response) {
            console.log('add', response)
        }
    }
    ajax(request)
}
/*
3, 发送 JSON 格式字符串来更新一个 todo
要求设置 Content-Type 为 application/json

POST
{"task": "study"}
http://vip.cocode.cc:3000/todo/<你的qq号>/update/<todo_id>

4, 删除一个 todo
GET
http://vip.cocode.cc:3000/todo/<你的qq号>/delete/<todo_id>
*/
var updateTodo = function() {
    var request = {
        url: 'http://vip.cocode.cc:3000/todo/3400711034/update/437',
        method: 'POST',
        contentType: 'application/json',
        data: '{"task": "play games"}',
        callback: function(response) {
            console.log('update', response)
        }
    }
    ajax(request)
}

var deleteTodo = function(todoId, complete) {
    var request = {
        url: 'http://vip.cocode.cc:3000/3400711034/todo/delete/' + todoId,
        callback: function(response) {
            console.log('delete, ', response)
            var t = JSON.parse(response)
            complete(t)
        }
    }
    ajaxGet(request)
}

deleteTodo(438, function(todo) {
    console.log('todo complete, ', todo)
})

var TodoApi = function() {
    this.baseUrl = 'http://vip.cocode.cc:3000/todo'
    this.qq = '3400711034'
}

TodoApi.prototype.get = function(path, callback) {
    var url = `${this.baseUrl}/${this.qq}` + path
    var r = new XMLHttpRequest()
    r.open('GET', url, true)
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            callback(r.response)
        }
    }
    r.send()
}

TodoApi.prototype.post = function(path, data, callback) {
    var url = `${this.baseUrl}/${this.qq}` + path
    var r = new XMLHttpRequest()
    r.open( 'POST', url, true )
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            callback(r.response)
        }
    }
    var d = JSON.stringify(data)
    r.send(d)
}

TodoApi.prototype.all = function(callback) {
    var path = '/all'
    this.get(path, callback)
}

TodoApi.prototype.add = function(todo, callback) {
    var path = '/add'
    this.post(path, todo, callback)
}

TodoApi.prototype.update = function(todo, callback) {
    var path = '/update/' + todo.id
    this.post(path, todo, callback)
}

TodoApi.prototype.delete = function(todoId, callback) {
    var path = '/delete/' + todoId
    this.get(path, callback)
}

/*
'''
todo 后端程序提供了 4 个 API, 说明如下


1, 获得所有的 todo, 返回的是一个数组

GET
http://vip.cocode.cc:3000/todo/<你的qq号>/all


2, 发送 JSON 格式字符串来创建一个 todo
要求设置 Content-Type 为 application/json

POST
{"task": "study"}
http://vip.cocode.cc:3000/todo/<你的qq号>/add


3, 发送 JSON 格式字符串来更新一个 todo
要求设置 Content-Type 为 application/json

POST
{"task": "study"}
http://vip.cocode.cc:3000/todo/<你的qq号>/update/<todo_id>


4, 删除一个 todo
GET
http://vip.cocode.cc:3000/todo/<你的qq号>/delete/<todo_id>

'''
*/

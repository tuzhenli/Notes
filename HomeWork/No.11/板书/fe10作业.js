// 作业 5
//
var queryFromObject = function(param) {
    /*
    param 是一个 object
    例子如下
    param 是 {
        'foo': 1,
        'bar': 'far',
    }
    返回如下 string, 顺序不做要求(foo bar 的顺序)
    foo=1&bar=far

    注意, 使用 Object.keys 函数
    */
    var pairs = []
    var keys = Object.keys(param)
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i]
        var p = k + '=' + param[k]
        pairs.push(p)
    }
    return pairs.join('&')
}


// 作业 6
//
var argsFromQuery = function(queryString) {
    /*
    queryString 是一个 string
    例子如下
    queryString 是 foo=1&bar=far
    返回如下 object, 顺序不做要求(foo bar 的顺序)
    {
        'foo': '1',
        'bar': 'far',
    }
    */
    var pairs = queryString.split('&')
    // ['foo=1', 'bar=far']
    var args = {}
    for (var i = 0; i < pairs.length; i++) {
        var p = pairs[i]
        var kv = p.split('=')
        // ['foo', '1']
        args[kv[0]] = kv[1]
    }
    return args
}


// 作业 7
//
var ajaxGet = function(url, callback) {
    /*
    利用上课板书, 实现 ajaxGet 函数, 用 GET 方法请求一个 URL
    url 是一个 URL
    callback 是一个函数, 在接受服务器响应后调用并传递参数给它
    本题不会就放弃
    */
    var r = new XMLHttpRequest()
    r.open('GET', url, true)
    r.onreadystatechange = function(event) {
        if(r.readyState === 4) {
            callback(r.response)
        }
    }
    r.send()
}

var url = 'http://vip.cocode.cc/uploads/tags.json'
ajaxGet(url, function(data){
    console.log(data)
    var tags = JSON.parse(data)
    console.log(tags)
})

var pinsUrl = 'http://vip.cocode.cc/uploads/pins.json'
ajaxGet(pinsUrl, function(data) {
    var pins = JSON.parse(data)
    window.pins = pins
})

var keys = function(pins) {
    var l = []
    for (var i = 0; i < pins.length; i++) {
        var p = pins[i]
        var key = p.file.key
        l.push(key)
    }
    return l
}

var addImgsByKeys = function(keys) {
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i]
        var url = 'http://img.hb.aicdn.com/' + k
        var tag = `<img src=${url}>`
        var body = document.querySelector('body')
        body.insertAdjacentHTML('beforeend', tag)
    }
}
// 作业 8
//
var ajax = function(request) {
    /*
    request 是一个 object, 有如下属性
        method, 请求的方法, string
        url, 请求的路径, string
        data, 请求发送的数据, 如果是 GET 方法则没这个值, string
        callback, 响应回调, function

    本题不会就放弃, 本题带了一个用法在下方
    */
    var r = new XMLHttpRequest()
    r.open(request.method, request.url, true)
    if (request.contentType !== undefined) {
        r.setRequestHeader('Content-Type', request.contentType)
    }
    r.onreadystatechange = function(event) {
        if(r.readyState === 4) {
            request.callback(r.response)
        }
    }
    if (request.method === 'GET') {
        r.send()
    } else {
        r.send(request.data)
    }
}

var account = {
    'username': 'xiaogua',
    password: '123'
}
var data = JSON.stringify(account)
var r = {
    method: 'POST',
    url: '/login',
    contentType:  'application/json',
    data: data,
    callback: function(response) {
        console.log('响应', response)
        var res = JSON.parse(response)
        if (res.success) {
            window.location.href = '/'
        } else {
            alert('登录失败')
        }
    }
}
ajax(r)














































// 课 8 作业 15 答案
// 复制一个 square
var clonedSquare = function(array) {
    var s = []
    for (var i = 0; i < array.length; i++) {
        var line = []
        for (var j = 0; j < array[i].length; j++) {
            line.push(array[i][j])
        }
        s.push(line)
    }
    return s
}

// 辅助函数, 给数字 +1
// 这里会判断下标是否合法
var plus1 = function(array, x, y) {
    var n = array.length
    if (x >= 0 && x < n && y >= 0 && y < n) {
        if (array[x][y] !== 9) {
            array[x][y] += 1
        }
    }
}

// 辅助函数, 用来给 9 周边的 8 个格子 +1
var markAround = function(array, x, y) {
    /*
    ###
    #9#
    ###
    */
    if (array[x][y] === 9) {
        // 左边 3 个
        plus1(array, x - 1, y - 1)
        plus1(array, x - 1, y)
        plus1(array, x - 1, y + 1)
        // 上下 2 个
        plus1(array, x, y - 1)
        plus1(array, x, y + 1)
        // 右边 3 个
        plus1(array, x + 1, y - 1)
        plus1(array, x + 1, y)
        plus1(array, x + 1, y + 1)
    }
}

var markedSquare = function(array) {
    /*
    array 是一个「包含了『只包含了 0 9 的 array』的 array」
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组

    范例如下, 这是 array
    [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 9, 0],
        [0, 9, 0, 0],
    ]

    这是标记后的结果
    [
        [1, 9, 2, 1],
        [2, 4, 9, 2],
        [9, 4, 9, 2],
        [2, 9, 2, 1],
    ]

    规则是, 0 会被设置为四周 8 个元素中 9 的数量
    */
    var square = clonedSquare(array)
    for (var i = 0; i < square.length; i++) {
        var line = square[i]
        for (var j = 0; j < line.length; j++) {
            markAround(square, i, j)
        }
    }
    return square
}
// 拆分函数的依据
// 描绘 what
// 而不是描绘 how

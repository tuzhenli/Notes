// 2016/10/17
//
// ============
// 作业 14
//

var GuaSlide = function(element, images) {
    var style = `
            <style>
                .GuaSlide {
                    margin: auto;
                    /* 边框 */
                    width: 730px;
                    height: 454px;
                    /* 大小 */
                    border-radius: 4px;
                }
                .img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    /* 定位 */
                }
                .img:hover { cursor: pointer; }
                .img-button {
                    display: none;
                    width: 25px;
                    height: 70px;
                    background: black;
                    color: white;
                    border: 0;
                    padding: 0;
                    outline: 0;
                    opacity: 0.418;
                    font-family: Microsoft YaHei;
                    font-size: 26px;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-61.8%);
                }
                .img-button:hover { opacity: 0.5; cursor: pointer; }
                .img-button-left  { left: 0;  text-align: left;}
                .img-button-right { right: 0; text-align: right;}
                .img-bottom {
                    position: relative;
                    bottom: 35px;
                    /* 定位 */
                }
                .imgs-button {
                    border: 0;
                    padding: 0;
                    outline: 0;
                    width: 18px;
                    height: 18px;
                    font-family: Microsoft YaHei;
                    font-size: 12px;
                    border-radius: 50%;
                    background: black;
                    color: white;
                    opacity: 0.618;
                }
                .imgs-button:hover {
                    opacity: 0.8;
                    background: #b61b1f;
                    cursor: pointer;
                }
                .imgs {
                    position: absolute;
                    display: block;
                }
                .imgs-kai {
                    display: block;
                }
                .imgs-button-kai {
                    background: #b61b1f;
                }
            </style>`
    var html = `
            <div class="GuaSlide">
                <div class="img">
                    <img class="imgs" src=${images[0]} >
                    <img class="imgs" src=${images[1]} >
                    <img class="imgs" src=${images[2]} >
                    <img class="imgs" src=${images[3]} >
                    <img class="imgs" src=${images[4]} >
                    <img class="imgs" src=${images[5]} >
                    <button class="img-button img-button-left"  type="button"> < </button>
                    <button class="img-button img-button-right" type="button"> > </button>
                </div>
                <div class="img-bottom">
                    <button class="imgs-button" type="button" data-id='1'> 1 </button>
                    <button class="imgs-button" type="button" data-id='2'> 2 </button>
                    <button class="imgs-button" type="button" data-id='3'> 3 </button>
                    <button class="imgs-button" type="button" data-id='4'> 4 </button>
                    <button class="imgs-button" type="button" data-id='5'> 5 </button>
                    <button class="imgs-button" type="button" data-id='6'> 6 </button>
                </div>
            </div>`
    $(element).append(style)
    $(element).append(html)
    $( '.img' ).on( 'mouseover', function() {
        $('.img-button').css('display','block')
    })
    $( '.img' ).on( 'mouseout' , function() {
        $('.img-button').css('display','none')
    })
    var i = 0 % images.length
    $('.imgs').each( function(index) {
        var jiu = $($('.imgs')[index])
        jiu.fadeOut(0)
        jiu.removeClass('imgs-kai')
        index =  ( index + 1 ) % images.length
        var xin = $($('.imgs')[index])
        xin.addClass('imgs-kai')
        xin.fadeIn(0)
    })
    $($('.imgs-button')[Math.abs(i)]).addClass('imgs-button-kai')
    $( '.img-button-right' ).on( 'click', function() {
        var jiu = $($('.imgs')[Math.abs(i)])
        jiu.fadeOut()
        jiu.removeClass('imgs-kai')
        $($('.imgs-button')[Math.abs(i)]).removeClass('imgs-button-kai')
        i =  ( i + 1 ) % images.length
        var xin = $($('.imgs')[Math.abs(i)])
        xin.addClass('imgs-kai')
        xin.fadeIn()
        $($('.imgs-button')[Math.abs(i)]).addClass('imgs-button-kai')
    })
    $( '.img-button-left'  ).on( 'click', function() {
        var jiu = $($('.imgs')[Math.abs(i)])
        jiu.fadeOut()
        jiu.removeClass('imgs-kai')
        $($('.imgs-button')[Math.abs(i)]).removeClass('imgs-button-kai')
        i =  ( (i - 1) + images.length ) % images.length
        var xin = $($('.imgs')[Math.abs(i)])
        xin.addClass('imgs-kai')
        xin.fadeIn()
        $($('.imgs-button')[Math.abs(i)]).addClass('imgs-button-kai')
    })
    $( '.img-bottom'       ).on( 'mouseover', '.imgs-button', function(event) {
        var jiu = $($('.imgs')[Math.abs(i)])
        jiu.fadeOut()
        jiu.removeClass('imgs-kai')
        $($('.imgs-button')[Math.abs(i)]).removeClass('imgs-button-kai')
        i = $(event.target).data('id') - 1
        var xin = $($('.imgs')[Math.abs(i)])
        xin.addClass('imgs-kai')
        xin.fadeIn()
        $($('.imgs-button')[Math.abs(i)]).addClass('imgs-button-kai')
    })
}

GuaSlide('body',[
    "imgs/GuaSlide/1.jpg",
    "imgs/GuaSlide/2.jpg",
    "imgs/GuaSlide/3.jpg",
    "imgs/GuaSlide/4.jpg",
    "imgs/GuaSlide/5.jpg",
    "imgs/GuaSlide/6.jpg",
])
//
// 本次作业纯属暖身, 随意
// ============
//
// 作业 1
//
// 扩充上课时候做的 slide 库, 添加一个功能, 当鼠标移动到小圆点上的时候, 播放那张图片


// 作业 2
//
// 扩充上课时候做的 slide 库, 添加一个功能, 当鼠标点击小圆点的时候, 播放那张图片


// 作业 3
//
// 扩充上课时候做的 slide 库, 添加一个功能
// 小圆点被一系列缩略图取代
// 鼠标点击缩略图播放那张图片


// 作业 4
//
// 用一个函数传递图片 URL 参数来创建一个 slide
// 函数如下

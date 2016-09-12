$(function () {
    //响应式导航
    $('.collapse').collapse();

    //焦点图
    $('.carousel').carousel();

    //新闻切换效果
    (function () {
        var index = 0;
        var timer = null;
        var newsHeight = $('.news').height();
        var length = $('.news-list ul li').size();
        //自动切换
        timer = setInterval(autoPlay, 2000);
        function autoPlay() {
            change('down');
        }

        $('.news').hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(autoPlay, 2000);
        });
        //上下切换
        $('.text-right .up').on('click', function () {
            clearInterval(timer);
            change('up');
        });
        $('.text-right .down').on('click', function () {
            clearInterval(timer);
            change('down');
        });

        function change(direction) {
            if (direction == 'up') {
                if (index == 0) {
                    $('.news-list ul').stop().animate({
                        'margin-top': -(length - 1) * newsHeight
                    }, 0);
                    index = length - 1;
                }
                index--;
            }
            if (direction == 'down') {
                if (index == length - 1) {
                    $('.news-list ul').animate({
                        'margin-top': 0
                    }, 0);
                    index = 0;
                }
                index++;
            }

            $('.news-list ul').stop().animate({
                'margin-top': -newsHeight * index
            }, 500);
        }
    })();

    //导航栏效果
    (function () {
        //导航栏固定效果
        $(window).scroll(function () {
            if ($(this).scrollTop() >= $('.topBar').height()) {
                $('nav').addClass('navbar-fixed-top');
            } else {
                $('nav').removeClass('navbar-fixed-top');
            }
        });
        //导航条点击效果
        $('nav .navbar-collapse li').on('click', function () {
            $(this).add('active').siblings().removeClass('active');
        });
    })();

    //返回顶部效果
    (function () {
        $('.return-top').on('click', function () {
            $(document.body).animate({'scrollTop': 0}, 1500, 'swing');
        });
    })();

    //右侧固定工具栏点击弹出框特效
    (function () {
        function Shortcut(panel,btn){
            this.panel = panel;
            this.btn = btn;
            this.parent = '.right-shortcut';
            this.closebtn = '.fa-modal-close';
        }

        Shortcut.prototype = {
            constructor: Shortcut,
            shortcutChange: function(){
                var _this = this;
                $(_this.parent).find(_this.btn).on('click', function () {
                    var _right = parseInt($(_this.panel).css('right'));
                    if ( _right === -325) {
                        $(_this.panel).stop().animate({'right': 60, 'opacity': 1}, 500)
                    } else {
                        $(_this.panel).stop().animate({'right': -325, 'opacity': 0.5}, 500);
                    }
                });
            },
            close:function(){
                var _this = this;
                $(_this.panel).find(_this.closebtn).on('click',function(){
                    $(_this.panel).stop().animate({'right': -325, 'opacity': 0.5}, 500);
                });
            }
        }

        var shoppingCart = new Shortcut('.shopping-cart','.shopping-btn');
        shoppingCart.shortcutChange();
        shoppingCart.close();

        var weChat = new Shortcut($('.weChat'),$('.weChat-btn'));
        weChat.shortcutChange();
        weChat.close();

        var microblog = new Shortcut($('.microblog'),$('.microblog-btn'));
        microblog.shortcutChange();
        microblog.close();
    })();

    //滚动页面时的动画效果
    new WOW().init();
});
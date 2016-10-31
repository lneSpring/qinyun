/*global $, Swiper */
var ui = window.ui || {};
ui = {
    openUrl: function () {
        $('.footer_item').click(function () {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').siblings().removeClass('active');
                switch ($(this).index()) {
                case 0:
                    window.location.href = "index.html";
                    break;
                case 1:
                    window.location.href = "订单.html";
                    break;
                case 2:
                    window.location.href = "发现.html";
                    break;
                case 3:
                    window.location.href = "个人中心.html";
                    break;
                }
            }
        });
    },
    //点击输入框隐藏footer导航栏
    inputFocus: function () {
        var text = $('input,textarea');
        text.focus(function () {
            $('.footer,.logo-box').hide();
        });
        text.blur(function () {
            setTimeout(function () {
                $('.footer,.logo-box').show();
            }, 300);
        });
    },
    //页面底部的logo定位
    logoSite: function (arr) {  //arr: ['selector',...]
        var height = $('body').height() - $('.logo-box').height(),
            conHeight = 0;
        arr.map(function (ele) {
            conHeight += $(ele).outerHeight();
        });
        if (conHeight > height) {
            $('.logo-box').css({"position": "relative"});
        }
    },
    delPlaceholder: function (target) {
        var val = $(target).attr('placeholder');
        $(target).focus(function () {
            $(target).attr('placeholder', '');
        });
        $(target).blur(function () {
            $(target).attr('placeholder', val);
        });
    }

};
$(function () {
    ui.openUrl();
    ui.inputFocus();
});
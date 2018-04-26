$(function() {
    // nav导航
    $('.navul li').hover(function() {
        $(this).find('.s_nav').show();
    }, function() {
        $(this).find('.s_nav').hide();
    });
    // 微信二维码
    $('.wechat').hover(function() {
        $(this).find('.wechatcode').show();
    }, function() {
        $(this).find('.wechatcode').hide();
    });
})
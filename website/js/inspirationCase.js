$(function(){ 
    //leftnav
    $('.inspirationCase_banner_nav li').hover(function(){
        $(this).addClass('cur').siblings('li').removeClass('cur');
    },function(){
        $(this).removeClass('cur');
    });
    //cont2 tab
    $('.insCas_cont2_tabdiv').eq(0).show();
    $('.insCas_cont2_tabul li').hover(function(){
        var _index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.insCas_cont2_tabdiv').eq(_index).show().siblings().hide();
    },function(){})

    //图片盒子效果
    $("#insCas_cont_picshow li").bind("mouseenter mouseleave",function(e) {  
        var w = $(this).width();  
        var h = $(this).height();
        var ws = ($(window).width()-1200)/2;
        var hs = $('#insCas_cont_picshow').get(0).offsetTop+this.offsetTop;
        var x = (e.pageX - (this.offsetLeft+ws) - (w / 2)) * (w > h ? (h / w) : 1);  
        var y = (e.pageY - hs - (h / 2)) * (h > w ? (w / h) : 1);  
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左” 
        var eventType = e.type;  
        var dirName = new Array('top','right','down','left');  
        if(e.type == 'mouseenter'){
            switch(dirName[direction]){
                case 'top':
                        $(this).find('div.bg').css({left:'0',top:-h+"px"}).stop(true).animate({left:'0',top:'0'},300)
                    break;
                case 'right':
                    $(this).find('div.bg').css({left:w+'px',top:"0"}).stop(true).animate({left:'0',top:'0'},300)
                    break;
                case 'down':
                    $(this).find('div.bg').css({left:'0',top:h+"px"}).stop(true).animate({left:'0',top:'0'},300)
                    break;
                case 'left':
                    $(this).find('div.bg').css({left:-w+'px',top:"0"}).stop(true).animate({left:'0',top:'0'},300)
                    break;
            } 
        }else{
            switch(dirName[direction]){
                case 'top':
                        $(this).find('div.bg').css({left:'0',top:'0'}).stop(true).animate({left:'0',top:-h+"px"},300)
                    break;
                case 'right':
                    $(this).find('div.bg').css({left:'0',top:'0'}).stop(true).animate({left:w+'px',top:"0"},300)
                    break;
                case 'down':
                    $(this).find('div.bg').css({left:'0',top:'0'}).stop(true).animate({left:'0',top:h+"px"},300)
                    break;
                case 'left':
                    $(this).find('div.bg').css({left:'0',top:'0'}).stop(true).animate({left:-w+'px',top:"0"},300)
                    break;
            } 
        }  
    });
    
    

    //inspirationCase_details.html
    var mySwiper = new Swiper('.insCas_works_swiper .swiper-container',{
        pagination: '.insCas_works_swiper .pagination',
        paginationClickable: true,
        slidesPerView: 4
    });
    $('.insCas_works_swiper .arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev();
    });
    $('.insCas_works_swiper .arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext();
    });
    //移除样式
    $('.caseDetBox .caseRight dt p,.insCase_det_banner .swiper-container .swiper-slide p,.insCase_det_summarybox .detailbox,.insCase_detbox p').removeAttr("style"); 
    //切换展现形式 
    $('.opbtn_pic').on('click',function(){
        $('#insCase_det_list').hide();
        $('#insCase_det_pic').show();
    });
    $('.opbtn_list').on('click',function(){
        $('#insCase_det_list').show();
        $('#insCase_det_pic').hide();
    });
    //手风琴效果
    $('.insCase_det_rightul li').hover(function(){
        $(this).addClass('cur').siblings('li').removeClass('cur');
    });

    // 案例详情图片轮播
    var dataImg = 0;
    var imgeach = function(){$('#cd_swiper .swi_box img:not(".adver_pic")').each(function(i){
        $(this).attr('dataImg',i);
        var _img = '<img class="showImg" src="'+$(this).attr('datasrc')+'" />';
        $("#enlargeImg .picbox").append(_img);
    });}
    setTimeout(imgeach,1000);
    if($("#enlargeImg .picbox img").length == 1){
        $("#enlargeImg span").hide();
    }else if($("#enlargeImg .picbox img").length == 2){
        if($("#enlargeImg .picbox img").eq(1).attr('datasrc') == 'adver_pic'){
            $("#enlargeImg span").hide();
        }
    };
    $('#cd_swiper .swi_box img').on('click',function(){
        if ($(this).attr('datasrc') == 'adver_pic') {
            window.open($(this).parent('a').attr("href"));
            return false;
        }
        $('#enlargeImg .picbox').css({'width':$(window).width(),'height':$(window).height()});//图片绝对居中
        var _imgnum = $(this).attr('dataImg');
        $("#enlargeImg").show().children('.picbox').children('.showImg').eq(_imgnum).show().siblings().hide();
    });
    //左按钮
    $('#enlargeImg').on('click','.leftbtn',function(){
        if($('.showImg:visible').index() <= 1){
            $('.showImg').eq($('.showImg').length-2).show().siblings().hide();
        }else{
            $('.showImg:visible').prev().show().siblings().hide();
        }
    });
    //右按钮
    $('#enlargeImg').on('click','.rightbtn',function(){
        if($('.showImg:visible').index() >= $('.showImg').length-2){
            $('.showImg').eq(1).show().siblings().hide();
        }else{
            $('.showImg:visible').next().show().siblings().hide();
        }
    });
    //点击关闭
    $('#enlargeImg').on('click','.picbox',function(e){
        var $tar = $(e.target);
        if($tar.attr('class') != 'showImg'){
            $('#enlargeImg').hide();
        }
        e.stopPropagation();
        return false;
    }); 

    //inspirationCase_list
    //筛选 
    $('.caseBox .listBox').each(function(){
        if($(this).children('a').length<=8){
            $(this).siblings('.arrow').css('display','none');
        }
    })
    $('.caseBox').on('click','.arrow',function(){
        $(this).addClass('arrow_open');
        $(this).siblings('.listBox').css('height','auto');
    });
    $('.caseBox').on('click','.arrow_open',function(){
        $(this).removeClass('arrow_open');
        $(this).siblings('.listBox').css('height','28px');
    });
    //设计师头像悬浮样式
    $('.caseHide').on('mouseenter','.insCase_list_sjs',function(){
        $(this).children('.hovbox').show();
    });
    $('.caseHide').on('mouseleave','.insCase_list_sjs',function(){
        $('.hovbox').hide();
    });
    //点击筛选
    $('.caseHide').on('click','.listBox a',function(){
        if(!$(this).hasClass('cur') && !ajaxLock){
            $(this).addClass('cur').siblings('a').removeClass('cur');
            $(this).parent('.listBox').siblings('.a1').removeClass('cur');
            ajax(1,'click');
        }
    });
    $('.caseHide').on('click','a.a1',function(){
        if(!$(this).hasClass('cur') && !ajaxLock){
            $(this).addClass('cur').siblings('.listBox').children('a').removeClass('cur');
            ajax(1,'click');
        }        
    });
    //tab切换
    (function(){
        var $caseTabLi = $('.caseBox .caseTab li');
        var $ul = $('.caseHide div.caseHide_div');
        $caseTabLi.eq(0).addClass('active');
        $caseTabLi.mouseenter(function(){
            $(this).addClass('active').siblings().removeClass('active');
            $ul.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $ul.eq($(this).index()).find('.case_waterfall').waterfall();
        });
    })(); 
})

/**
 * Created by lalala on 2017/5/11.
 */

$(function(){
    //新闻中心手机端转为slid轮播
    if($(window).width()<768){
        $('.section-news>.row .col-sm-3').addClass('slide');
        $('.section-excellent .cell>div').addClass('slide');
        $('.section-excellent .pc>div').removeClass('slide');
        $('.section-understandBox').css('background-color','#fff');
        $('.section-news>.row .logo img').width($('.section-news>.row .logo img').height());
        $('.section-understandBox .pc-slide').removeClass('slide');
    }else{
        $('.section-news>.row .col-sm-3').removeClass('slide');
        $('.section-excellent .cell>div').removeClass('slide');
        $('.section-excellent .pc>div').addClass('slide');
        $('.section-understandBox .pc-slide').addClass('slide');
    }
    //下载字显示不全
    if($(window).width()<370){
        $('.section-excellent .download>a').html('下载');
    }else{
        $('.section-excellent .download>a').html('点击下载');
    }
    //
/*   var SbannerICONAnimation=setInterval(function(){
       $('.SbannerICON>div>p:nth-of-type(1)').css('animation','downBtn 0.2s linear infinite');
   },1000);
    setTimeout(function(){
        clearInterval(SbannerICONAnimation);
        $('.SbannerICON>div>p:nth-of-type(1)').css('animation','null');
    },7000)*/

    /*.SbannerICON>div>p:nth-of-type(1):hover{
     -webkit-animation:downBtn 0.2s linear infinite;
     -o-animation:downBtn 0.2s linear infinite;
     animation:downBtn 0.2s linear infinite;
     box-shadow: 5px 5px 10px #A0A0A0;
     }*/

    $(".jiantouUp").hide();  //当页面加载的时候向上的箭头就消失
    //if($(window).width()>=768){
            $('#fullPage').fullpage({
                sectionsColor: ['white', 'white', 'white', 'white',"#fff","white"],
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
                menu: '#menu',
                slidesNavigation:true,//左右滑块的项目导航
                controlArrows:true,//左右箭头
                controlArrowsColor:'#fff',//左右箭头颜色
                loopBottom: true,
                afterLoad: function(anchorLink, index) {
                    if(index==1){
                        console.log("1");
                        $(".jiantouUp").hide();
                    }
                    //1
                    //2 优秀案例展示
                    if(index==2){
                        /*setInterval(function(){
                            $.fn.fullpage.moveSlideRight();
                        }, 6000);*/
                    }
                    //3
                    if(index==3){
                        icon("","","","",200);//第三屏的图标显示
                    }
                    //4 新闻中心
                    if(index==4){
                       /* setInterval(function(){
                            $.fn.fullpage.moveSlideRight();
                        }, 3000);*/
                    }
                    //5 关于我们
                    if(index==5){
                    }
                    if (index == 6) {
                        $(".jiantouNext").hide();
                        $.fn.fullpage.setAutoScrolling(false);   //取消全屏滚动
                    }
                },
                onLeave: function(index, direction){
                    if(index==1){
                        $(".jiantouUp").show();
                    }
                    //3
                    if(index==3){
                        icon("-40rem","-120rem","-120rem","-40rem",1000);  //离开第3屏时icon的图标就消失
                    }
                    if (index == 6) {
                        $(".jiantouNext").show();
                        $.fn.fullpage.setAutoScrolling(true);   //恢复全屏滚动
                    }
                }
            });
        //    var linkTag = $('<link rel="stylesheet" href="css/jquery.fullPage.css"/>');
        //    $($('head')[0]).append(linkTag);
        //}
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000)
    //手机中的联系我们的头像轮播
    setInterval(phoneIMG,3000);
    $(".phoneIMGS2").hide();
    var a=0;
    function phoneIMG(){
        a++;
        if(a==3){
            a=1;
        }
        if(a==1){
            $(".phoneIMGS2").fadeIn(1500).show();
            $(".phoneIMGS1").fadeOut(1500).hide();
        }else if(a==2){
            $(".phoneIMGS2").fadeOut(1500).hide();
            $(".phoneIMGS1").fadeIn(1500).show();
        }
    }
    //    第三屏的图标才出场动效
    //ICON的图标的出现效果
    icon("-40rem","-120rem","-120rem","-40rem",1000);  //加载时icon的图标就没出现
    function icon(left,top,bottom,right,time){
        console.log("1");
        $(".icon0").animate({left:left},time);
        $(".icon2").animate({top:top},time);
        $(".icon3").animate({bottom:bottom},time);
        $(".icon4").animate({ right:right},time);

        $(".icon5").animate({left:left},time);
        $(".icon6").animate({top:top},time);
        $(".icon7").animate({bottom:bottom},time);
        $(".icon8").animate({ right:right},time);
    }
});


$(document).ready(function () {
    var index = 0,
        banner = $("#banner").find("div"), // 获取需要进行轮播元素的jquery对象
        bannerButton = $("#dots").find("span")   //获取按钮元素的jquery对象
        len = banner.length,   //获取元素个数
        timer = null,   //定时器权柄
        menuLv1 = $("#menu-content").find("div"), //获取 一级菜单元素的jquery对象
        menuLv2 = $("#sub-menu").children(".inner-box"),  //获取 二级菜单元素的jquery对象
        menuLv2Box = $("#sub-menu");


    /*
    轮播的实现
     */
    function bannerLoop() {
       timer = setInterval(function () {
            index++;
            if (index > len-1){
                index = 0;
            }
            showBanner(index);
        },2000);
    }

    function showBanner(id) {
        for (var i = 0;i < len;i++){
            banner.eq(i).removeClass("active");
            bannerButton.eq(i).removeClass("active");
        }
        banner.eq(id).addClass("active");
        bannerButton.eq(id).addClass("active");
    }

    for (var i = 0;i<len ; i++) {
        bannerButton.eq(i).attr("buttonIndex",i);
    }

    for (var i = 0,length = menuLv1.length;i < length ;i++){
        menuLv2.eq(i).attr("index",i);
        menuLv1.eq(i).attr("index",i);
    }

    bannerButton.click(function () {
        clearInterval(timer);
        index = $(this).attr("buttonIndex");
        showBanner(index);
        bannerLoop();
    });

     banner.mouseover(function () {
         clearInterval(timer);
     });
     banner.mouseout(function () {
         bannerLoop();
     });

     $("#pre").click(function () {
         clearInterval(timer);
         index--;
         if (index<0){
             index = len-1;
         }
         showBanner(index);
         bannerLoop();
     });

     $("#next").click(function () {
         clearInterval(timer);
         index++;
         if (index > len - 1){
             index = 0;
         }
         showBanner(index);
         bannerLoop();
     });

     /*
     菜单功能的实现
      */
     menuLv1.hover(function () {
         $(this).css("background","rgba(0,0,0,0.1)");
         menuLv2Box.show();
         menuLv2.eq($(this).attr("index")).show();
     },function () {
         $(this).css("background","none");
         menuLv2.eq($(this).attr("index")).hide();
         menuLv2Box.hide();
     });

     menuLv2.hover(function () {
         menuLv1.eq($(this).attr("index")).css("background","rgba(0,0,0,0.1)");
         menuLv2Box.show();
         $(this).show();
     },function () {
         menuLv1.eq($(this).attr("index")).css("background","none");
         menuLv2Box.hide();
         $(this).hide();
     });
    
    bannerLoop();
})
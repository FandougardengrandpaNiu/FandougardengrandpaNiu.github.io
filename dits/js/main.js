//自定义的js文件
$(function () {
    $("#korea").mouseover(function () {

        $(".korea").removeClass("hidden");
    });
    $(".korea").mouseleave(function(){
        $(this).addClass("hidden");
    });
//产品列表页 选项联动
    $('.widget_links input').click(function () {
        if (this.checked) {
            $(this).parent().parent().siblings().children().removeClass("red1");
            $(this).parent().addClass("red1");
        }
    });
// 产品导航分类导航联动
    $("#nav_menu_ul_1 li").on({
        mouseover : function(){
            var i = $("#nav_menu_ul_1 li").index(this);
            $("#nav_menu_ul_2>li").hide();
            $("#nav_menu_ul_3>li").hide();
            $("#nav_menu_ul_1>li").removeClass("active");
            $("#nav_menu_ul_1>li").eq(i).addClass("active");
            $("#nav_menu_ul_2>li").eq(i).show();
            $("#nav_menu_ul_3>li").eq(i).show();
        } ,
        mouseout : function(){

        }
    }) ;

});




$(".formlist > ul").toggle();
$(".collapse").hide();
$(".expand").click(function(){
    $(".formlist > ul").each(function(){
            $(this).show();
    });
    $(this).hide();
    $(".collapse").show();
})
$(".collapse").click(function(){
    $(".formlist > ul").each(function(){
            $(this).hide();
    });
    $(this).hide();
    $(".expand").show();
})
$(".formlist > h3").click(function(){
    $(this).siblings("ul").toggle();
})

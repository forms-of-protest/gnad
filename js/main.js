
$(".formlist > ul").toggle();
$(".expand").click(function(){
    $(".formlist > ul, .glyphicon-triangle-bottom, .glyphicon-triangle-top").toggle();
})
$(".formlist > h3").click(function(){
    $(this).siblings("ul").toggle();
})

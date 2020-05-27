$(document).ready(function(){

// dropdown code
$(".dropdown").click(function() {


    //get the dropdown on this nav
    var drp = $(this).find(".dropdown-content");
    //toggle css to show dropdown
     drp.toggleClass("show"); 
     
     //get the arrow on this nav
    var arr = $(this).find(".lni-chevron-down");
    //point arrow upwards
    arr.toggleClass("flip");

    //check if user clicked away to disablr the box
    $( "#hero" ).mousedown(function() {   
        drp.removeClass("show"); 
        arr.removeClass("flip");
    });
})

//moobie hamburger cick
$(".hamburger").click(function() {
    
    $(".full-page-nav").addClass("show");
    $(document).find(".close").removeClass("hide");
    $(document).find(".close").addClass("show");
    $(document).find(".hamburger").removeClass("show");
    $(document).find(".hamburger").addClass("hide");

})


$(".close").click(function() {
    $(".full-page-nav").removeClass("show");
    $(document).find(".hamburger").removeClass("hide");
    $(document).find(".hamburger").addClass("show");
    $(document).find(".close").removeClass("show");
    $(document).find(".close").addClass("hide");
})




//sticky-nav code
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    if(scroll > 52){$(".sticky-nav").addClass("show-nav");
    $(".sticky-nav").removeClass("animate-nav-out");
 }
    if(scroll < 52){$(".sticky-nav").removeClass("show-nav");
    $(".sticky-nav").addClass("animate-nav-out");
}
});


//moving button code
$(".movable-btn").mousemove(function(event){
    let obj = $(".move-btn").offset();
    $(".move-btn").css({'transform': 'translate('+(event.pageX-(obj.left+72))/3 +'px,'+(event.pageY-(obj.top+27))/3 +'px)', 'transition':'.5s '});
    console.log(event.pageX- obj.left, event.pageY-obj.top);
})

$(".movable-btn").mouseout(function(){ $(".move-btn").css('transform', 'none');})


});
    
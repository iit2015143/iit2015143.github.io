clicked = 0;
navshifted = 0;
window.onload = function(){
    $("#downbutton").show();
    $("#downbutton").click(function(){
        $("#spanallpage").slideUp();
        $("#downbutton").hide();
        $("body").css({
            overflow:'auto'
        });
    });
    $(window).scroll(function(){
        if(clicked == 0){
            $("nav").slideDown();
        }
        else {
            $("nav").slideUp();
            clicked = 0;
        }
        //console.log($("header").outerHeight()-$(window).scrollTop());
        if($("header").outerHeight() - $(window).scrollTop() <= 0  && navshifted == 0){
            navheight = $("nav").height()+5;
            navheight += ($("article").outerHeight(true) - $("article").outerHeight())/2;
            navheight += 'px';
            console.log(navheight);
            $("nav").css({
                position:'fixed',
                top:'0px',
                left:'0px',
                width:'100%',
                zIndex:'100'
            });
            $("header").css({
                marginBottom:navheight
            });
            navshifted = 1;
        }
        else if($("header").outerHeight() - $(window).scrollTop() > 0  && navshifted == 1){
            $("nav").css({
                position:'static'
            });
            $("header").css({
                marginBottom:'0px',
            });
            navshifted = 0;
        }
    });
    $("nav ul li").click(function(event){
        clicked = 1;
    });
};
function initMap() {
    var IIIT = {lat: 25.430416, lng: 81.770679};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: IIIT
    });
    var marker = new google.maps.Marker({
      position: IIIT,
      map: map
    });
}

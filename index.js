window.onload = function(){
    $("#downbutton").show();
    $("#downbutton").click(function(){
        $("#spanallpage").slideUp();
        $("#downbutton").hide();
        $("body").css({
            overflow:'auto'
        });
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

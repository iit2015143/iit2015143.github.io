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

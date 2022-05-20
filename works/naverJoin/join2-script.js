$(document).ready(function(){

    $(".int input").blur(function(){
        $(".int .error.ty1").html("필수정보입니다.");
    });


    function passwordVisible(e) {
        e.on('click', function() {
            $(this).toggleClass("on");
            if ($(this).prev().attr("type") == "password") {
                $(this).prev().attr("type","text");
            } 
            else {
                $(this).prev().attr("type","password");
            }
        })
    }
    passwordVisible($(".visible"))

    
 
    $(function(){
        $(".error.ty3").hide();
        $("input").keyup(function(){
            
            if("#pw1" == "#pw2"){
                $(".error.ty3").hide();
            }
            else {
                $(".error.ty3").show()
            }           
        });
    });

    $(function(){
        $(".error.ty3").hide();
        $("input").keyup(function(){
             if("#pw1" == "#pw2"){
                 $(".ero")
             }
        })
    })
})
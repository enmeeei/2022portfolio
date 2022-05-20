$(document).ready(function(){

    toggleMenu(".langChoice");
    toggleMenu(".nationNo");
    toggleMenu("#yy");
    toggleMenu("#mm");
    toggleMenu("#dd");

    function toggleMenu(button) {
    $(button).on('click', function(){
        $(this).find(".select").toggleClass('on');
    });
    }

    $("#chkAll").click(function(){
        if ($(this).is(":checked")) {
            $("input[name=terms]").parent("label").addClass("on");
            $(this).parent("label").addClass("on");
         }
        else {
            $("input[name=terms]").parent("label").removeClass("on");
            $(this).parent("label").removeClass("on");
        }
    });

    $("input[name=terms]").click(function(){
        $(this).parent("label").toggleClass("on");
        if ($("input[name=terms]:checked").length == 7) {
            $("#chkAll").parent("label").addClass("on");
        }
        else {
            $("#chkAll").parent("label").removeClass("on");
        }
    })
 });
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

    // 약관 동의 form

    const termsCB = $("input[name=terms");
    const checkAll = $("#chkAll");

        //약관 모두 동의 
        $("#chkAll").click(function(){
            if ($(this).is(":checked")) {
                termsCB.parent("label").addClass("on");
                termsCB.prop("checked", true);
                $(this).parent("label").addClass("on");
            }
            else {
                termsCB.parent("label").removeClass("on");
                termsCB.prop("checked", false);
                $(this).parent("label").removeClass("on");
            }
        });

        termsCB.click(function(){
            $(this).parent("label").toggleClass("on");
            if ($("input[name=terms]:checked").length === 7) {
                checkAll.parent("label").addClass("on");
                checkAll.prop("checked", true);
            }
            else {
                checkAll.parent("label").removeClass("on");
                checkAll.prop("checked", false);
            }
        })

        //전체 동의 및 필수 동의 체크시 button enabled
        $(".termsAgree input").click(function() {
            if ($(".terms-required:checked").length === 4) {
                $("#termsSubmit").attr("disabled", false);
            } else {
                $("#termsSubmit").attr("disabled", true);
            }
        })
    
    // 패스워드 input 내용 삭제
    $('#pw1Del').click(function() {
        $('#password1').val('');
    });
    $('#pw2Del').click(function() {
        $('#password2').val('');
    });
 });
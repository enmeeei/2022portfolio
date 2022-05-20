$(document).ready(function(){

    $("#chkAll").click(function(){
        if ($("#chkAll").is(":checked")) 
            $("input[name=terms]").prop("checked",true);
        else $("input[name=terms]").prop("checked",false);
    });

    $("input[name=terms]").click(function(){
        if ($("input[name=terms]:checked").length == 4) {
            $("#chkAll").prop("checked",true);
        }
        else {
            $("#chkAll").prop("checked",false);
        }
    })
 });
$(document).ready(function(){

    infoBoxOpen($('.info-title.t1 button'), 500, $('.info-list.t1'))
    infoBoxOpen($('.info-title.t2 button'), 500, $('.info-list.t2'))

    function infoBoxOpen(button, time, toggleBox){
        $(button).on('click',function(){
            $(this).toggleClass('on');
            $(toggleBox).slideToggle(time);
            var ariaExpanded = $(this).attr('aria-expanded');
            if($(this).attr('aria-expanded') == 'true'){
                $(this).attr('aria-expanded','false');
                $($(this)).removeClass('open');
            }else{
                $(this).attr('aria-expanded','true');
                $($(this)).addClass('open');
            }
            })
            
    }
});
$(document).ready(function(){

    toggleMenu($('.btn-event'), 500, $('.toggle-box'));
    toggleMenu($('.wordlist button'), 500, $('.infolist1'))
    toggleMenu($('.note button'), 500, $('.infolist2'))

    function toggleMenu(button, time, toggleBox){
        $(button).on('click',function(){
            $(this).toggleClass('on');
            $(toggleBox).slideToggle(time);
        })
    }
    $('#boxImg').on('click',function(){
        $('.toggle-box').slideToggle();      
        $(this).addClass('active');      
        $(".inner button").addClass('active');
    });
});

$(document).ready(function(){

    // opne nav-menu
    $('.header-section .right-box .opne-menu-box i').click(function(){
        $('.nav-section .nav-ul').slideToggle();
        $('body').toggleClass('over-lay');
        $('.header-section .left-box').toggleClass('toggleOpesty');
    });

    // opne sub-menu
    $('.nav-section .nav-ul ul li.has-chiled').click(function(){
        $(this).children('.sub-menu').slideToggle();
    });

});
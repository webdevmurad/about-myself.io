$(document).ready(function() {
    $('.portfolio-site__blocks').not(':first').hide();
    $('.portfolio-block__subtext .portfolio-subtext').click(function() {
        $('.portfolio-block__subtext .portfolio-subtext').removeClass('subtext-active').eq($(this).index()).addClass('subtext-active');
        $('.portfolio-site__blocks').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('subtext-active');

});
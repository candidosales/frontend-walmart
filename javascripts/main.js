




$(document).ready(function(){

    $('.all-categories').on('mouseover', function(){
        $(this).addClass('active');
    }).on('mouseout', function(){
        $(this).removeClass('active');
    });

  $('.cat-menu').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5
  });
});
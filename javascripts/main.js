// var allCategories = document.getElementsByClassName("all-categories");

// allCategories[0].addEventListener("mouseover", function(){ 
//     this.setAttribute("class", "menu-main-item all-categories active");    
// });

// allCategories[0].addEventListener("mouseout", function(){ 
//     this.setAttribute("class", "menu-main-item all-categories");    
// });




$(document).ready(function(){

  jQuery('.all-categories').on('mouseover', function(){
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
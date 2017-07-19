$('.carousel').carousel({
  interval: 5000
})

var $window = $(window);
var $navbar = $('.navbar');
$window.on('scroll', function(){
  if ($window.scrollTop() >= 20) {
    $navbar.css('opacity', '.5');
  } else {
    $navbar.css('opacity', '1');
  }
});

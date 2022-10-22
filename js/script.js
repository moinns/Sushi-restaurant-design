$('.img2').hover(
  function () {
    $('.img1').addClass('img1move');
    $('.img3').addClass('img3move');
  },
  function () {
    $('.img1').removeClass('img1move');
    $('.img3').removeClass('img3move');
  }
);

$('.my-burger > *').click(function (e) {
  $('.my-burger').toggleClass('active');
  $('html').toggleClass('lock');
  $('._wrapper').toggleClass('slide');
});

$(document).mouseup(function (e) {
  var container = $('._wrapper');
  if (container.has(e.target).length === 0) {
    $('.my-burger').removeClass('active');
    $('._wrapper').removeClass('slide');
  }
});

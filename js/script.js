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

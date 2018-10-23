$('.center').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    nextArrow: $('.slick-next'),
		prevArrow: $('.slick-prev'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
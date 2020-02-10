$(document).ready( function() {
  filter();
});

$('.slider-block').slick({
  centerMode: true,
  dots: true,
  centerPadding: '0px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});


$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  // autoplay: true,
  // autoplaySpeed: 2000,
});

$('.our-service__button').on('click', function() {
  $('.our-service__block-none').toggleClass('our-service__block-flex');
})


$('#js-list-link').on('click', function() {
  $('.head__list--link-item').toggleClass('block-none');
});

let map;
function initMap() {
    let icon = `../img/pin.png`;
    let centerLatLng = {lat: 51.495866, lng: 31.2204984};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.271397, lng: 31.3722444},
        zoom: 6
    });
    let  marker = new google.maps.Marker({
        position: centerLatLng,
        map: map,
        icon: icon
    });
}


// let btnRight = document.getElementsByClassName('slick-next');
// let btnLeft = document.getElementsByClassName('slick-prev');
// let roller = document.getElementById('block');

// $(btnRight).on('click', function() {
//   console.log('!');
//   roller++;
//   roller.style.width = roller+ 50 + 'px';
// });

// btnLeft.onclick = function() {
//   roller--;
//   roller.style.width = 50 - roller + 'px';
// };


function preview() {
  $('.js-progress-bar').circularProgress({
    color: 'red',
    line_width: 10,
    width: '110px',
    height: '110px',
    percent: 0,
    starting_position: 0,
  }).circularProgress('animate', 70, 12000);
  
  $('.js-progress-bar1').circularProgress({
    color: 'red',
    line_width: 10,
    width: '110px',
    height: '110px',
    percent: 0,
  }).circularProgress('animate', 80, 12000);
  
  $('.js-progress-bar2').circularProgress({
    color: 'red',
    line_width: 10,
    width: '110px',
    height: '110px',
    percent: 0,
  }).circularProgress('animate', 90, 12000);
  
  $('.js-progress-bar3').circularProgress({
    color: 'red',
    line_width: 10,
    width: '110px',
    height: '110px',
    percent: 0,
  }).circularProgress('animate', 100, 12000);
}

// переключатель(active) навигатора сайта

// $('.head__list--link').filter(function() {
//   let url = window.location.href;
//     return this.href == url;
// }).addClass('active');


$('.envelope__body').on('click', function(e) {
  $('.envelope__top').toggleClass('envelope__top_close');     
  $('.paper').toggleClass('paper_close');               
});

$('#js-btn-send').on('click', function() {
  $('.message').toggleClass('js-message-active');
  // AOS.init({
  //   duration: 1000,
  // });
});

$('.my-button').on('click', function() {
  $('.my-form').css('display', 'block');
});

$('.form-box__close').on('click', function() {
  $('.my-form').css('display', 'none');
});

// my preview start
let servicePosition = $('#animate-preview').offset().top;
$(window).scroll(function(){
    let windowScroll = $(window).scrollTop() + $(window).height();
    // console.log(servicePosition +'/'+ windowScroll)
    if (servicePosition > windowScroll) {
      preview();
    }
    if (windowScroll > 1200) {
      $('.my-button').css('display', 'block');
      if (windowScroll > 2700) {
        $('.pulse').css('background', '#e36b2c');
      } else {
        $('.pulse').css('background', '#76c7c0');
      }
    } else {
      $('.my-button').css('display', 'none');
    }
});


$('.form-box__input-text').focus(function() {
  $(this).parent().addClass('focus');
}).blur(function() {
  if($(this).val() === '') {
    $(this).parent().removeClass('focus');
  }
});


function isEmail() {
  let str = document.getElementById("email").value;
  let status = document.getElementById("status");
  let res = '@/.';
  if (res.test(str)) status.innerHTML = "Адрес правильный";
    else status.innerHTML = "Адрес неверный";
  if(isEmpty(str)) status.innerHTML = "Поле пустое";
 };
 function isEmpty(str){
  return (str == null) || (str.length == 0);
 };


 function filter() {
	const menuFilter = $('#sort-filter li');
	const images = $('.slide');
	menuFilter.click(function (event) {
		event.preventDefault();
		const type = $(this).data('filter');
		console.log(type);
		if ( type !== 'all' ) {
			const currentClass = `.filter-` + type;
			images.hide();
			$(currentClass).show();
		} else {
			images.show();
		}
	})
};

$('.head__list-menu').on('click', function (e) {
  e.preventDefault;
  $('.menu_btn').toggleClass('menu_btn--active');
    $('.head__list').toggleClass('head__list--active');
});

// let progressValue = document.getElementById('text').innerHTML;
// let progressNum = document.getElementById('circle');
// console.log(progressValue);
// console.log(progressNum);

$('.link').on( 'click', function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 500, function () {
        location.hash = target;
    });
    return false;
});
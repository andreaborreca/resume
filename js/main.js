var check = 0;
var counter = 0;
let lights = 'on';
let width = $(window).width();

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function(){

    $('.switch_light').on('click', function(){
        let this_span = $(this);
        let moon = $(this).data('moon');
        let sun = $(this).data('sun');
        let moon_gradient = $(this).data('moon-gradient');
        let sun_gradient = $(this).data('sun-gradient');
        if(lights == 'on'){
            $(this_span).addClass('pe-none');
            $('.wrap').animate({backgroundColor: 'rgb(20,20,30)', borderColor:'rgb(15, 15, 25)', color: '#FDFFFC'}, 500, 'swing');
            $('.modal-content').animate({backgroundColor: 'rgb(20,20,30)', borderColor:'rgb(15, 15, 25)', color: '#FDFFFC'}, 500, 'swing');
            $('.language_link').animate({color: '#FDFFFC', borderColor:'white'}, 100, 'swing');
            $('.btn-close').animate({backgroundColor:'white'}, 100, 'swing');
            $('.switch_light').animate({color: '#FDFFFC', borderColor:'white'}, 100, 'swing');
            $('.carousel_interests_text').animate({color: '#FDFFFC'}, 100, 'swing');
            $(this_span).data('check', 0);
            lights = 'off';
            $(moon).animate({left: "+=100px"}, 500, 'swing');
            $(moon_gradient).animate({top: "-100%"}, 1000, 'swing');
            $(sun_gradient).animate({top: "0%"}, 1000, 'swing');
            timeout = setTimeout(function() {   
                $(moon).addClass('d-none');
                $(moon).attr('style', 'left:100px');
                $(sun).removeClass('d-none');
                $(sun).animate({right: "+=100", left: "0"}, 500, 'swing');
            }, 500);
            timeout = setTimeout(function() {
                $(this_span).removeClass('pe-none');
            }, 1000);
        } else {
            $(this_span).addClass('pe-none');
            $('.wrap').animate({backgroundColor : '#FDFFFC', borderColor:'#2a2a2a', color: '#2a2a2a'}, 500, 'swing');
            $('.modal-content').animate({backgroundColor : '#FDFFFC', borderColor:'#2a2a2a', color: '#2a2a2a'}, 500, 'swing');
            $('.language_link').animate({color: '#2a2a2a', borderColor:'black'}, 100, 'swing');
            $('.btn-close').animate({backgroundColor:""}, 100, 'swing');
            $('.switch_light').animate({color: '#2a2a2a', borderColor:'black'}, 100, 'swing');
            $('.carousel_interests_text').animate({color: '#2a2a2a'}, 100, 'swing');
            $(this_span).data('check', 1);
            lights = 'on';
            $(sun).animate({left: "+=100px"}, 500, 'swing');
            $(moon_gradient).animate({top: "0%"}, 1000, 'swing');
            $(sun_gradient).animate({top: "100%"}, 1000, 'swing');
            timeout = setTimeout(function() {
                $(sun).addClass('d-none');
                $(sun).attr('style', 'left:100px');
                $(moon).removeClass('d-none');
                $(moon).animate({right: "+=100", left: "0"}, 500, 'swing');
            }, 500);
            timeout = setTimeout(function() {
                $(this_span).removeClass('pe-none');
            }, 1000);
        }
        
    });

    $('.wrap_scroll').on('resize scroll', function() {
        if(width >= 992){
            if(counter == 0) {
                if ($('#language_container').isInViewport()) {
                    $('.language_bar_in').each(function(){
                        counter = 1;
                        $(this).prop('Counter',0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 3000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).attr('style', 'width:' + Math.ceil(now) + '%');
                                $(this).text(Math.ceil(now) + '%');
                            }
                        });
                    })
                }
            }
        }
    });

    $('.carousel_interests').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 1000,
        focusOnSelect: true,
        centerMode: true,
        pauseOnFocus: true,
        arrows: false,
        centerPadding: '10px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.carousel_interests_text'
      });

      $('.carousel_interests_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 1000,
        asNavFor: '.carousel_interests',
        focusOnSelect: true
      });

    $('.mobile_button').on('click', function(){
        let target = $(this).data('target');
        let scroll = $(this).data('scroll');
        let direction = $(this).data('direction');
        let content = $(this).data('content');
        $(content).fadeTo(800, 1);
        $(target).attr('style', direction);
        $(scroll).addClass('wrap_main');
        if((check === 0) && (scroll === '.wrap_skills')){
            $('.language_bar_in').each(function(){
                counter = 1;
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).attr('style', 'width:' + Math.ceil(now)+'%');
                        $(this).text(Math.ceil(now) + '%');
                    }
                });
            })
            check = 1;
        }
    });

    $('.back_button').on('click', function(){
        let target = $(this).data('target');
        let scroll = $(this).data('scroll');
        let direction = $(this).data('direction');
        let content = $(this).data('content');
        $(scroll).removeClass('wrap_main');
        $(content).fadeTo(400, 0);
        $(target).attr('style', direction);
    });
    

});
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
  
$(document).ready(function(){

    let avatar = $('#avatar');
    let avatar_open = 'img/avatar_open.png';
    let avatar_close = 'img/avatar_close.png';
    let avatar_pain = 'img/avatar_pain.png';
    let avatar_talking_open = 'img/avatar_talking_open.png';
    let avatar_talking_close = 'img/avatar_talking_close.png';
    let avatar_rocket_first = 'img/avatar_rocket_first.png';
    let avatar_rocket_second = 'img/avatar_rocket_second.png';
    let avatar_rocket_third = 'img/avatar_rocket_third.png';
    let avatar_rocket_fifth = 'img/avatar_rocket_fifth.png';
    let avatar_tired_1 = 'img/avatar_tired_1.png';
    let avatar_tired_2 = 'img/avatar_tired_2.png';
    let avatar_tired_3 = 'img/avatar_tired_3.png';

    let timeout = null;
    let y = 0;
    let stop = 0;
    let width = $(window).width();

    $(document).on('mousemove', function(e) {
        if(width >= 992){
            if(stop === 0){
                clearTimeout(timeout);
            
                timeout = setTimeout(function() {
                    stop = 1;
                    y = 0;
                    myIntervalTimer = setInterval(function(){
                        $(avatar).addClass('pe-none');
                        if(y === 3 || y === 12){
                            $(avatar).attr('src', avatar_tired_1);
                        }
                        if ((y === 7 || y === 15) ) {
                            $(avatar).attr('src', avatar_talking_close);
                        }
                        if(y === 18){
                            $(avatar).attr('src', avatar_tired_2);
                        }
                        if(y > 20 && y < 80){
                            if(y % 2 === 0){
                                $(avatar).attr('src', avatar_tired_2);
                            } else {
                                $(avatar).attr('src', avatar_tired_3);
                            }
                        }
                        if(y > 80 && y < 90){
                            $(avatar).attr('src', avatar_tired_2);
                        }
                        if(y > 90 && y < 100){
                            $(avatar).attr('src', avatar_tired_1);
                        }
                        if(y === 100){
                            $(avatar).attr('src', avatar_open);
                            $(avatar).removeClass('pe-none');
                            clearInterval(myIntervalTimer);
                            stop = 0;
                        }
                        y++;
                    }, 400);
                }, 10000);
            }
        }
    });

    $(window).on('resize', function(){
        width = $(window).width();
    });

    $(avatar).on('mouseout', function(){
        $(this).attr('src', avatar_open);
    });
    $(avatar).on('mouseover', function(){
        clearTimeout(timeout);
        $(this).attr('src', avatar_close);
    });
    $(avatar).on('click', function(){
        let avatar = $(this);
        clearTimeout(timeout);
        stop = 1;
        let ref;
        if(width >= 992){
            let x = randomIntFromInterval(1, 3);
            if(x == 1){
                let random = randomIntFromInterval(0, 1);
                y = 0;
                $(avatar).addClass('pe-none');
                ref = $(avatar).data('ref');
                $(ref).eq(random).removeClass('d-none');
                $(ref).eq(random).fadeTo('slow', 1);
                myIntervalTimer = setInterval(function(){
                    if(y % 2 === 0){
                        $(avatar).attr('src', avatar_talking_open);
                    } else {
                        $(avatar).attr('src', avatar_talking_close); 
                    }
                    if(y === 18){
                        $(ref).eq(random).fadeTo( "slow", 0);
                    }
                    if(y === 21){
                        $(ref).eq(random).addClass('d-none');
                        $(avatar).removeClass('pe-none');
                        $(avatar).attr('src', avatar_open);
                        clearInterval(myIntervalTimer);
                        stop = 0;
                    }
                    y++;
                }, 200);
            } else if (x === 2){
                y = 0;
                $(avatar).addClass('pe-none');
                let avatar_svg_active = $(avatar).data('active');
                let rocket_container = $(avatar).data('rocket-container');
                let space_container = $(avatar).data('space-container');
                let space_avatar = $(avatar).data('space-avatar');
                let space_avatar_active = $(space_avatar).data('active');
                let space_fire = $(avatar).data('space-fire');
                let space_fire_active = $(space_fire).data('active');
                let nyan_cat = $(avatar).data('nyan-cat');
                let nyan_cat_active = $(nyan_cat).data('active');
                let fire_rocket = $(avatar).data('fire-rocket');
                let fire_rocket_active = $(fire_rocket).data('active');
                let smoke_rocket = $(avatar).data('smoke-rocket');
                let rocket_man = $(avatar).data('rocket-man');
                let rocket_man_active = $(rocket_man).data('active');
                $('.switch_light').animate({right: "-=1000"}, 500, 'linear');
                $('.switch_light').addClass('pe-none');
                let lights_check = $('.switch_light').data('check');
                $(rocket_container).removeClass('d-none');
                $(fire_rocket).fadeTo('slow', 1);
                $(smoke_rocket).fadeTo('slow', 1);
                myIntervalTimer = setInterval(function(){
                    if(y === 3){
                        $('body').attr('style', 'overflow-x: hidden;');
                        $(avatar).attr('src', avatar_rocket_first);
                    }
                    if ((y === 8) ) {
                        $(avatar).addClass(avatar_svg_active);
                        $(fire_rocket).addClass(fire_rocket_active);
                        $(avatar).attr('src', avatar_rocket_second);
                    }
                    if(y === 12){
                        $(smoke_rocket).fadeTo('slow', 0);
                        $('.wrap').animate({backgroundColor: 'rgb(11,4,20);', color: '#FDFFFC', borderColor: 'rgb(11,4,20);'}, 500, 'swing');
                        $('.language_link').animate({color: '#FDFFFC', borderColor:'white'}, 100, 'swing');
                        $('.switch_light').animate({color: '#FDFFFC', borderColor:'white'}, 100, 'swing');
                        $(avatar).attr('src', avatar_rocket_third);
                    }
                    if(y === 15){
                        $('.wrap').addClass('wrap_gradient');
                        $(space_avatar).removeClass('d-none');
                        $(space_fire).removeClass('d-none');
                        $(space_avatar).fadeTo('slow', 1);
                        $(space_fire).fadeTo('slow', 1);
                    }
                    if(y === 19){
                        $(space_avatar).addClass(space_avatar_active);
                        $(space_fire).addClass(space_fire_active);
                        $(rocket_man).addClass(rocket_man_active);
                        $(nyan_cat).addClass(nyan_cat_active);
                        $(space_container).removeClass('d-none');
                        $(space_container).fadeTo('slow', 1);
                    }
                    if(y === 47){
                        $(space_avatar).attr('src', avatar_rocket_third);
                    }
                    if(y === 48){
                        $(space_avatar).fadeTo('slow', 0);
                        $(space_fire).fadeTo('slow', 0);
                    }
                    if(y === 53){
                        $(space_avatar).removeClass(space_avatar_active);
                        $(space_fire).removeClass(space_fire_active);
                        $(space_avatar).addClass('d-none');
                        $(space_fire).addClass('d-none');
                    }
                    if(y === 59){
                        $(smoke_rocket).fadeTo('slow', 1);
                        $(avatar).attr('src', avatar_rocket_fifth);
                    }
                    if(y === 72){
                        $('.wrap').removeClass('wrap_gradient');
                        $(fire_rocket).removeClass(fire_rocket_active);
                        $(avatar).removeClass(avatar_svg_active);
                    }
                    if(y === 74){
                        $(smoke_rocket).fadeTo('slow', 0);
                        $(fire_rocket).fadeTo('slow', 0);
                        $(space_container).fadeTo('slow', 0);
                        if(lights_check === 1){
                            $('.wrap').animate({backgroundColor : '#FDFFFC', color: '#2a2a2a', borderColor: '#2a2a2a'}, 500, 'swing');
                            $('.language_link').animate({color: '#2a2a2a', borderColor:'black'}, 100, 'swing');
                            $('.switch_light').animate({color: '#2a2a2a', borderColor:'black'}, 100, 'swing');
                        } else {
                            $('.wrap').animate({backgroundColor: 'rgb(20,20,30)', borderColor:'rgb(15, 15, 25)', color: '#FDFFFC'}, 500, 'swing');
                            $('.language_link').animate({color: '#FDFFFC', borderColor:'white'}, 100, 'swing');
                            $('.switch_light').animate({color: '#FDFFFC', borderColor:'white'}, 100, 'swing');
                        }
                        $(avatar).attr('src', avatar_talking_close);
                    }
                    if(y === 77){
                        $('body').attr('style', '');
                        $(space_container).addClass('d-none');
                        $(rocket_container).addClass('d-none');
                        $(rocket_man).removeClass(rocket_man_active);
                        $(nyan_cat).removeClass(nyan_cat_active);
                        $(avatar).attr('src', avatar_open);
                        $(avatar).removeClass('pe-none');
                        if(lights_check === 1){
                            $('.wrap').attr('style', '');
                        }
                        $('.switch_light').removeClass('pe-none');
                        $('.switch_light').animate({right: "+=1000"}, 500, 'linear');
                        clearInterval(myIntervalTimer);
                        stop = 0;
                    }
                    y++;
                }, 200);
            } else {
                $(avatar).attr('src', avatar_pain);
                stop = 0;
            }
        } else {
            $(avatar).attr('src', avatar_pain);
            stop = 0;
        }
    });
});
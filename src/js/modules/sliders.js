
const sliders = () => {
    $('.mainslider__photos').slick({
        dots: true, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        arrows: false
    });
    $('.next').each(function(i){
        $(this).on('click', function() {
            $('.mainslider__photos').eq(i).slick('slickNext');
        });
    });
    $('.prev').each(function(i){
        $(this).on('click', function() {
            $('.mainslider__photos').eq(i).slick('slickPrev');
        });
    });
    
    $('.giftset__preview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.giftset__nav',
        draggable: false
    });
    
    $('.giftset__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        asNavFor: '.giftset__preview',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        adaptiveHeight: false,
        draggable: false,
        centerPadding: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                vertical: false,
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }
        ]
    });
    
    
    $('.drawing__slider').slick({
        slidesToScroll: 4,
        slidesToShow: 4,
        dots: false,
        infinite: true,
        speed: 500,
        prevArrow: `<button type="button" class="slick-prev">
                        <svg class="arrow__left" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19.9956L3 10.8723L11 1.74902" stroke="black" stroke-opacity="0.9" stroke-width="4"/>
                        </svg>
                    </button>`,
        nextArrow: `<button type="button" class="slick-next">
                        <svg class="arrow__right" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 1.74902L10 10.8723L2 19.9956" stroke="black" stroke-opacity="0.9" stroke-width="4"/>
                        </svg>                        
                    </button>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
};

export default sliders;

$(document).ready(function() {
    let srcWidth = window.screen.availWidth; 
    window.addEventListener('resize', function () {
        srcWidth = window.screen.availWidth;
    });

    // Main page slider

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
    try {
            // SeoText Main
    const describeText = document.querySelectorAll('.describe__text'),
    describeForm = document.querySelector('.describe__form');

    describeText[1].style.display = 'none';
    document.querySelector('.describe__text:first-child > ul ').style.listStyleType = 'none';
    let opened = false;
    describeText.forEach(item => {
        item.addEventListener('click', () => {
            if (!opened) {
                describeForm.classList.toggle('describe__form-active');
                $('.describe__text').eq(1).slideToggle('slow');
                describeText[0].classList.toggle('describe__text-pb50');
                document.querySelector('.describe__text > ul > li >span').style.opacity = '1';
                document.querySelector('.describe__text > ul > li >span').innerHTML = '.';
                $('.describe__text > ul ').css({'list-style-type':'disc', 'padding-left':'16px'});
                opened = !opened;
            } else {
                describeForm.classList.toggle('describe__form-active');
                $('.describe__text').eq(1).slideToggle('slow');
                describeText[0].classList.toggle('describe__text-pb50');
                document.querySelector('.describe__text > ul > li >span').style.opacity = '.7';
                document.querySelector('.describe__text > ul > li >span').innerHTML = '...читать все';
                $('.describe__text > ul ').css({'list-style-type':'none', 'padding-left':'0px'});
                opened = !opened;
            }
        });
    });
    }catch(e) {}

    // Search Menu
    const formS = document.querySelector('.searchfield'),
        searchItem = document.querySelector('.navigation__search'),
        searchClose = document.querySelector('.searchfield__close'),
        searchInput = document.querySelector('.searchfield input');

    searchItem.addEventListener('click', ()=> {
        formS.classList.add('searchfield__active');
        searchItem.classList.add('navigation__search-active');
        searchItem.closest('.container').style = 'overflow: hidden; padding: 11px 0;';
        setTimeout(() => {searchInput.focus();}, 300);
    });

    searchClose.addEventListener('click', () => {
        formS.classList.remove('searchfield__active');
        searchItem.classList.remove('navigation__search-active');
        searchItem.closest('.container').style = 'overflow: initial; padding: 11px 0;';
    });

    if (searchItem.hasAttribute('data-search')) {
        searchItem.style.pointerEvents = 'none';
    }
    document.body.addEventListener('click', (e) => {
        if (formS.classList.contains('searchfield__active') && e.target != formS && e.target != formS.getElementsByTagName('input')[0] && e.target != searchClose && e.target != searchItem && e.target != searchItem.getElementsByTagName('img')[0] ) {
            formS.classList.remove('searchfield__active');
            searchItem.classList.remove('navigation__search-active');
            searchItem.closest('.container').style = 'overflow: initial; padding: 11px 0;';
        }
    });

    //Menu tooltip
    try {

        if (srcWidth > 768) {
        
            let cart = document.querySelector('.navigation__cart'),
                cartTooltip = document.querySelector('.tooltip__cart');
            
            let showTooltip = function () {
                if (cartTooltip.style.display == 'flex') {
                    cartTooltip.style.display = 'none';
                } else {
                    cartTooltip.style.display = 'flex';
                }
            };
            cart.addEventListener('click', showTooltip);
            if (cart.hasAttribute('data-cart')) {
                cart.removeEventListener('click', showTooltip);
            }
        
            let bodyItem = document.body;
            bodyItem.addEventListener('click', (e) => {
                if (cartTooltip.style.display == 'flex' && e.target != cartTooltip && e.target != cart && e.target.parentNode != cart && !e.target.parentNode.classList.contains('navigation__cart-badge')) {
                    cartTooltip.style.display = 'none';
                }
            });
        } else {
            $('[data-menu="catalog"]:first').on('click', () => {
                $('[data-menu="catalog"]:eq(1)').fadeToggle('slow');
            });
            $('[data-menu="services"]:first').on('click', () => {
                $('[data-menu="services"]:eq(1)').fadeToggle('slow');
            });
            const activateMenu = (trigger, target, classToAdd) => {
                document.querySelector(`${trigger}`).addEventListener('click', () => {
                    document.querySelector(`${target}`).classList.add(`${classToAdd}`);
                });
            };
            const deactivateMenu = (trigger, target, classToRemove) => {
                document.querySelector(`${trigger}`).addEventListener('click', () => {
                    document.querySelector(`${target}`).classList.remove(`${classToRemove}`);
                });
            };

            activateMenu('.hamburger', '.navigation', 'navigation__active');
            deactivateMenu('.navigation__close', '.navigation', 'navigation__active');
            activateMenu('.open__filters', '.filter', 'filter__active');
            deactivateMenu('.filter__close', '.filter', 'filter__active');
        }

    } catch(e) {}

    // Popup phones
    $('[data-mask=rus]').mask('+7 (999) 999 99 99');

    try {
        const showModal = function(trigger, modal) {
            const clicked = document.querySelector(`.${trigger}`);
            clicked.addEventListener('click', function() {
                document.querySelector('.overlay').style.display = 'block';
                document.querySelectorAll('.popup').forEach((item)=>{
                    item.style.display = 'none';
                });
                $(`.${modal}`).fadeIn('slow');
                $(`.${modal}`).find('input').focus();
            });
            const close = $(`.${modal}`).find('.close');
            close.on('click', () => {
                $(`.${modal}`).fadeOut();
                $('.overlay').fadeOut();
            });
            document.querySelector('.overlay').addEventListener('click', (e) => {
                if(e.target.classList.contains('overlay')) {

                    $(`.${modal}`).fadeOut();
                    $('.overlay').fadeOut();
                }
            });
            
        };
        showModal('callme', 'popup__call');
    } catch(e){}

    try {
        const goldHover = document.querySelectorAll('[data-hover]');
        goldHover.forEach((item, i) => {
            item.addEventListener('mouseenter', () => {
                switch (item.getAttribute('data-hover')) {
                    case '1':
                    item.style.background = 'url("img/btn_hover_1.jpg") center center no-repeat';
                    item.style.backgroundSize = 'cover';
                    break;
                    case '2':
                    item.style.background = 'url("img/btn_hover_2.jpg") center center no-repeat';
                    item.style.backgroundSize = 'cover';
                    break;
                    case '3':
                    item.style.background = 'url("img/btn_hover_3.jpg") center center no-repeat';
                    item.style.backgroundSize = 'cover';
                    break;
                    case '4':
                    item.style.background = 'url("img/btn_hover_4.jpg") center center no-repeat';
                    item.style.backgroundSize = 'cover';
                    break;
                }
            });
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = '#000';
                item.style.backgroundImage = 'none';
            });
        });

    } catch(e) {}

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

   try {
    $('.giftinfo__descr-question').on('click', function() {
        $(this).next('.tooltip__item').fadeToggle();
    });

    const itemDescrTrigger = document.querySelector('.giftset__descr > span'),
          itemDescrFull = document.querySelector('.giftset__descr-full');
    itemDescrTrigger.addEventListener('click', function() {
        this.remove();
        itemDescrFull.style.display = 'block';
    });

    document.body.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tooltip__item') && !e.target.classList.contains('giftinfo__descr-question') && !e.target.parentNode.classList.contains('giftinfo__descr-question')) {
            $('.tooltip__item').fadeOut();
        }
    });
   } catch(e) {}

    try {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 15000,
            values: [ 75, 10000 ],
            slide: function( event, ui ) {
            $('#from').val(ui.values[ 0 ]);
            $('#to').val(ui.values[ 1 ]);
            }
        });
    
        $('#from').val($( "#slider-range" ).slider( "values", 0 ));
        $('#to').val($( "#slider-range" ).slider( "values", 1 ));

        $('#from').change(function() {
            $( "#slider-range" ).slider( "values", +$('#from').val() );
        });
    } catch(e){}

    $('.catalogpage__checkbox, label').on('click', function(e) {
        e.stopPropagation();
    });
    $('.catalogpage__sorttitle, .toggleprof').on('click', function() {
        if($(this).hasClass('disabled')) {
            return false;
        }
        $(this).parent().find('.toggle').toggleClass('toggle-active');
        $(this).parent().find('.catalogpage__slidelist').slideToggle();
    });
    $('.toggle').on('click', function(e) {
        e.stopPropagation();
        if($(this).hasClass('disabled')) {
            return false;
        }
        $(this).toggleClass('toggle-active');
        $(this).next('.catalogpage__slidelist').slideToggle();
    });


    $('.catalogpage__question').on('click', function() {
        $(this).next('.tooltip__filter').fadeToggle();
    });

    document.body.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tooltip__filter') && !e.target.classList.contains('catalogpage__question')) {
            $('.tooltip__filter').fadeOut();
        }
    });

    try {
        const cartItem = document.querySelectorAll('.cart__item'),
            cartTotal = document.querySelector('.cart__total'),
            cartTotalPrice = document.querySelector('.cart__total > span'),
            cartCount = document.querySelector('.cart__count'),
            cartTotalEdition = document.querySelector('.cart__count > span'),
            clearCart = document.querySelector('.cart__clear'),
            cartField = document.querySelector('.cart__field'),
            cartBtn = document.querySelector('.cart .button');

        const changeTotal = function() {
            let allEditions = document.querySelectorAll('.edition__count'),
                allPrices = document.querySelectorAll('.cart__item-totalprice'),
                a = 0,
                b = 0;

            for(let i = 0; i < allPrices.length; i++) {
                a += +allEditions[i].value;
                b += parseFloat(allPrices[i].innerHTML);
            }
            cartTotalEdition.innerHTML = a + ' шт';
            cartTotalPrice.innerHTML = b + ' руб';
        };

        clearCart.addEventListener('click', () => {
            for (let i = 0; i < cartItem.length; i++) {
                cartItem[i].remove();
            }
            cartField.classList.add('cart__field-deleted');
            cartField.innerHTML = 'Ваша корзина пока пуста';
            cartBtn.remove();
            cartCount.remove();
            cartTotal.remove();
            clearCart.remove();
            changeTotal();
        });

        cartItem.forEach(function(item){
            item.addEventListener('click', function(e){
                const itemPrice = item.querySelector('.cart__item-price'),
                    plus = item.querySelector('.plus'),
                    minus = item.querySelector('.minus'),
                    editionCount = item.querySelector('.edition__count'),
                    totalPrice = item.querySelector('.cart__item-totalprice');
                
                editionCount.addEventListener('input', function() {
                    totalPrice.innerHTML = parseFloat(itemPrice.innerHTML) * this.value + ' руб';
                    changeTotal();
                });
                
                if (e.target == minus) {
                    if (editionCount.value > 0) {
                        editionCount.value = +editionCount.value - 1;
                        totalPrice.innerHTML = parseFloat(itemPrice.innerHTML) * editionCount.value + ' руб';
                        changeTotal();
                    }
                }

                if ( e.target == plus) {
                    if (editionCount.value > 0) {
                        editionCount.value = +editionCount.value + 1;
                        totalPrice.innerHTML = parseFloat(itemPrice.innerHTML) * editionCount.value + ' руб';
                        changeTotal();
                    }
                    if (editionCount.value == 0) {
                        editionCount.value = 1;
                        totalPrice.innerHTML = parseFloat(itemPrice.innerHTML) * editionCount.value + ' руб';
                        changeTotal();
                    }
                }
                
                if (e.target.classList.contains('cart__item-clear')) {
                    e.target.parentNode.remove();
                    let items = document.querySelectorAll('.cart__item');
                    if (items.length === 0) {
                        cartField.classList.add('cart__field-deleted');
                        cartField.innerHTML = 'Ваша корзина пока пуста';
                        cartBtn.remove();
                        cartCount.remove();
                        cartTotal.remove();
                        clearCart.remove();
                    }
                    changeTotal();
                }
                if (e.target.parentNode.classList.contains('cart__item-clear')) {
                    e.target.parentNode.parentNode.remove();
                    let items = document.querySelectorAll('.cart__item');
                    if (items.length === 0) {
                        cartField.classList.add('cart__field-deleted');
                        cartField.innerHTML = 'Ваша корзина пока пуста';
                        cartBtn.remove();
                        cartCount.remove();
                        cartTotal.remove();
                        clearCart.remove();
                    }
                    changeTotal();
                }
            });
        });


        
    } catch(e){}

    // Count in item page
    try {
        const giftSetForm = document.querySelector('.giftset__form');
        giftSetForm.addEventListener('click', function(e){
            const plus = document.querySelector('.plus'),
                minus = document.querySelector('.minus'),
                editionCount = giftSetForm.querySelector('input');
            
            if (e.target == minus) {
                if (editionCount.value > 0) {
                    editionCount.value = +editionCount.value - 1;
                }
            }

            if ( e.target == plus) {
                if (editionCount.value > 0) {
                    editionCount.value = +editionCount.value + 1;
                }
                if (editionCount.value == 0) {
                    editionCount.value = 1;
                }
            }

        });
    } catch(e) {

    }



    //Maps 
    try {
        const addressItem = document.querySelectorAll('.address__item'),
            addressMap = document.querySelectorAll('.address__maps-item');

        addressItem.forEach(function(item, i) {
            item.addEventListener('click', () => {
                for (let i = 0; i < addressItem.length; i++) {
                    addressItem[i].classList.remove('address__item-active');
                }
                item.classList.add('address__item-active');
                if (i == 0) {
                    addressMap[0].style.display = 'block';
                    addressMap[1].style.display = 'none';
                } else {
                    addressMap[1].style.display = 'block';
                    addressMap[0].style.display = 'none';
                }
            });
        });
        
    } catch(e) {}

    try {
        $( ".delivery__accordion" ).accordion({
            collapsible: true,
            active: false,
            icons: false,
            disabled: true
        });
        $( ".accordion__item" ).accordion({
            collapsible: true,
            active: false,
            icons: false,
        });
        $('.delivery__accordion h2.ui-accordion-header').click(function(){
            $(this).next().slideToggle();
            $(this).find('img').toggleClass('rotated');
            
        });
    } catch(e){}

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
    try {
        document.getElementById('trigger').addEventListener('click', () => {
            $('#triggerForm').slideToggle();
        });
    } catch(e) {}
    

    try {
        const tab = document.querySelectorAll('.giftinfo__nav-item'),
            info = document.querySelector('.giftinfo__nav'),
            tabContent = document.querySelectorAll('.giftinfo__descr-item');

        const hideTabContent = function(a) {
                for (let i = a; i < tabContent.length; i++) {
                    tabContent[i].classList.remove('showtab');
                    tabContent[i].classList.add('hidetab');
                }
            };
         
        hideTabContent(1);
        
        const showTabContent = function(b) {
                if (tabContent[b].classList.contains('hidetab')) {
                    tabContent[b].classList.remove('hidetab');
                    tabContent[b].classList.add('showtab');
                    for (let i = 0; i < tab.length; i++) {
                        tab[i].classList.remove('giftinfo__nav-active');
                    }
                    tab[b].classList.add('giftinfo__nav-active');
                }
            };
        
        info.addEventListener('click', function(event) {
            const target = event.target;
            if (target && target.classList.contains('giftinfo__nav-item')) {
                for(let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
    
        });
    } catch(e){}

    //Feedback form
    $('#feedbackform').on('click', function(){
        $(this).hide();
        $('.feedback__form').slideDown('slow');
    });
    $('.feedback__form-right-reset').on('click', function() {
        $('.feedback__form').slideUp('slow');
        $('#feedbackform').fadeIn('slow');
    });

    $(".pageup").click(function () {
        let elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top;
        $("html").animate({scrollTop: destination}, 800);
        return false;
    });

    $(window).scroll(function(event){
        if($(this).scrollTop()>1650){
            $(".pageup").fadeIn();
            } else {
            $(".pageup").fadeOut();
        }
    });

    try {
        const elements = document.documentElement,
            body = document.body,
            link = document.querySelector('.pageup');
        function calcScroll() {
            link.addEventListener('click', function(event) {
            let scrollTop = Math.round(body.scrollTop || elements.scrollTop);
            if (this.hash !== '') {
                event.preventDefault();
                let hashElement = document.getElementById(this.hash.substring(1)),
                    hashElementTop = 0;
                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }
                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
            });
        }
        calcScroll();

        let timeInterval = 1, 
            prevScrollTop,
            speed;

        function smoothScroll(from, to, hash) {
            if (to > from) {
                speed = 10;
            } else {
                speed = -10;
            }
        let move = setInterval(function() {
            let scrollTop = Math.round(body.scrollTop || elements.scrollTop);
                if (
                prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
                ) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
                } else {
                body.scrollTop += speed;
                elements.scrollTop += speed;
                prevScrollTop = scrollTop;
                }
        }, timeInterval);
        }
    } catch(e){}
});
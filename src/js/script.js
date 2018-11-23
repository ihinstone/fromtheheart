$(document).ready(function() {
    let srcWidth = window.screen.availWidth; 
    window.addEventListener('resize', function () {
        srcWidth = window.screen.availWidth;
    });

    // Main page slider
    $('.mainslider__slick').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        swipe: false,
        prevArrow: `<button type="button" class="slick-prev">
                        <svg class="arrow__left" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19.9956L3 10.8723L11 1.74902" stroke="black" stroke-opacity="0.9" stroke-width="4"/>
                        </svg>
                    </button>`,
        nextArrow: `<button type="button" class="slick-next">
                        <svg class="arrow__right" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 1.74902L10 10.8723L2 19.9956" stroke="black" stroke-opacity="0.9" stroke-width="4"/>
                        </svg>                        
                    </button>`
      });
    
    $('.mainslider__photos').slick({
        dots: true, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        arrows: false
    });

    // SeoText Main
    $('.describe__text').eq(1).hide();
    $('.describe__text:first-child').on('click', () => {
        $('.describe__text').eq(1).slideDown('slow');
        $('.describe__text > ul > li >span').css('opacity',  '1');
    });

    // Search Menu
    $('.navigation__search').on('click', () => {
        $('.searchfield').fadeIn();
        $('.navigation__search').addClass('navigation__search-active');
    });
    $('.searchfield__close').on('click', () => {
        $('.searchfield').fadeOut();
        $('.navigation__search').removeClass('navigation__search-active');
    });
    let searchItem = document.querySelector('.navigation__search');
    if (searchItem.hasAttribute('data-search')) {
        searchItem.style.pointerEvents = 'none';
    }

    //Menu tooltip
    try {
        let catalogMenu = document.querySelectorAll('[data-menu=catalog]'),
        servicesMenu = document.querySelectorAll('[data-menu=services]');

        if (srcWidth > 768) {
            $('[data-menu=catalog]:first').mouseenter(function() {
                event.preventDefault();
                // if (catalogMenu[1].style.display == 'flex') {
                    // catalogMenu[1].style.display = 'none';
                // } else {
                    catalogMenu[1].style.display = 'flex';
                // }
        
                if(servicesMenu[1].style.display == 'flex') {
                    servicesMenu[1].style.display = 'none';
                }
            });

            $('[data-menu=catalog]:first').mouseleave(function() {
                event.preventDefault();
                // if (catalogMenu[1].style.display == 'flex') {
                    // catalogMenu[1].style.display = 'none';
                // } else {
                event.preventDefault();
                if (catalogMenu[1].style.display == 'flex') {
                    catalogMenu[1].style.display = 'none';
                }
            });
        
            $('[data-menu=catalog]:eq(1)').mouseleave(function() {
                event.preventDefault();
                if (catalogMenu[1].style.display == 'flex') {
                    catalogMenu[1].style.display = 'none';
                }
            });
        
            $('[data-menu=services]:first').mouseenter(function() {
                event.preventDefault();
                // if (servicesMenu[1].style.display == 'flex') {
                    // servicesMenu[1].style.display = 'none';
                // } else {
                    servicesMenu[1].style.display = 'flex';
                // }
        
                if(catalogMenu[1].style.display == 'flex') {
                    catalogMenu[1].style.display = 'none';
                }
            });
            $('[data-menu=services]:first').mouseleave(function() {
                event.preventDefault();
                if (servicesMenu[1].style.display == 'flex') {
                    servicesMenu[1].style.display = 'none';
                }
            });
            $('[data-menu=services]:eq(1)').mouseleave(function() {
                event.preventDefault();
                if (servicesMenu[1].style.display == 'flex') {
                    servicesMenu[1].style.display = 'none';
                }
            });
        
        
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
                console.log('1');
                cart.removeEventListener('click', showTooltip);
            }
        
            let bodyItem = document.body;
            bodyItem.addEventListener('click', (e) => {
                if (cartTooltip.style.display == 'flex' && e.target != cartTooltip && e.target != cart && e.target.parentNode != cart && !e.target.parentNode.classList.contains('navigation__cart-badge')) {
                    cartTooltip.style.display = 'none';
                }
            });
        } else {
            $('[data-menu=catalog]:first').on('click', () => {
                $('[data-menu=catalog]:eq(1)').fadeToggle('slow');
            });
            $('[data-menu=services]:first').on('click', () => {
                $('[data-menu=services]:eq(1)').fadeToggle('slow');
            });
            $('.hamburger').on('click', () => {
                $('.navigation').addClass('navigation__active');
            });
            $('.navigation__close').on('click', () => {
                $('.navigation').removeClass('navigation__active');
            });
            $('.open__filters').on('click', () => {
                $('.filter').addClass('filter__active');
            });
            $('.filter__close').on('click', () => {
                $('.filter').removeClass('filter__active');
            });
        }

    
    // Popup phones
    let popupPhoneForm = document.querySelector('.popup__call-phoneblock');

        popupPhoneForm.addEventListener('click', (e) => {
            let changeCountry = document.querySelectorAll('.popup__call-wrap'),
                changePhone = document.querySelectorAll('.popup__call-phone'),
                popupSvgDown = document.querySelectorAll('.popup__call-svg'),
                changeCountryName = document.querySelectorAll('.popup__call-country');
            if (e.target == popupSvgDown[0] || e.target == changeCountryName[0] || e.target.tagName == "path") {
                    if (changePhone[1].style.visibility == 'visible'){
                        changePhone[1].style.visibility = 'hidden';
                    } else {
                        changePhone[1].style.visibility = 'visible';
                    }
        
                    if(popupSvgDown[0].classList.contains('popup__call-svg-active')) {
                        popupSvgDown[0].classList.remove('popup__call-svg-active');
                    } else {
                        popupSvgDown[0].classList.add('popup__call-svg-active');
                    }  
            }

            if (e.target == changePhone[1] || e.target == popupSvgDown[1] || e.target == changeCountryName[1] || e.target.classList.contains('secondCountry')) {
                    let clonePhone = changePhone[0].cloneNode(true);
                    changePhone[1].classList.remove('popup__call-phone-hidden');
                    changePhone[1].style.borderBottom = '1px solid black';
                    changePhone[1].getElementsByTagName('input')[0].classList.remove('secondCountry');
                    changePhone[1].getElementsByTagName('input')[0].setAttribute('required', 'true');
                    popupPhoneForm.removeChild(changePhone[0]);
                    clonePhone.classList.add('popup__call-phone-hidden');
                    clonePhone.getElementsByTagName('input')[0].classList.add('secondCountry');
                    clonePhone.getElementsByTagName('input')[0].value = '';
                    clonePhone.getElementsByTagName('input')[0].removeAttribute('required');
                    clonePhone.querySelector('.popup__call-svg').style.visibility = 'hidden';
                    clonePhone.querySelector('.popup__call-svg').classList.remove('popup__call-svg-active');
                    clonePhone.style.border = 'none';
                    clonePhone.style.visibility = "hidden";
                
                    popupPhoneForm.append(clonePhone);
                    popupSvgDown[0].classList.remove('popup__call-svg-active');
                    popupSvgDown[1].style.visibility = 'visible';

            }
            $('[data-mask=rus]').mask('+7 (999) 999 99 99');
            $('[data-mask=bel]').mask('+375 (99) 999 99 99');
        });
    } catch(e) {}

    try {
        let showModal = function(trigger, modal) {
            let clicked = document.querySelector(`.${trigger}`);
            clicked.addEventListener('click', function() {
                document.querySelector('.overlay').style.display = 'block';
                document.querySelectorAll('.popup').forEach((item)=>{
                    item.style.display = 'none';
                });
                // document.querySelector(`.${modal}`).style.display = 'block';
                $(`.${modal}`).fadeIn('slow');
            });
            let close = $(`.${modal}`).find('.close');
            close.on('click', () => {
                $(`.${modal}`).fadeOut();
                $('.overlay').fadeOut();
            });
        }
        showModal('callme', 'popup__call');
    } catch(e){}

    try {
        let goldHover = document.querySelectorAll('[data-hover]');
        for (let i = 0; i < goldHover.length; i++) {
            goldHover[i].addEventListener('mouseenter', () => {
                switch (goldHover[i].getAttribute('data-hover')) {
                    case '1':
                    goldHover[i].style.background = 'url("img/btn_hover_1.jpg") center center no-repeat';
                    goldHover[i].style.backgroundSize = 'cover';
                    break;
                    case '2':
                    goldHover[i].style.background = 'url("img/btn_hover_2.jpg") center center no-repeat';
                    goldHover[i].style.backgroundSize = 'cover';
                    break;
                    case '3':
                    goldHover[i].style.background = 'url("img/btn_hover_3.jpg") center center no-repeat';
                    goldHover[i].style.backgroundSize = 'cover';
                    break;
                    case '4':
                    goldHover[i].style.background = 'url("img/btn_hover_4.jpg") center center no-repeat';
                    goldHover[i].style.backgroundSize = 'cover';
                    break;
                }
            });
            goldHover[i].addEventListener('mouseleave', () => {
                goldHover[i].style.backgroundColor = '#000';
                goldHover[i].style.backgroundImage = 'none';
            });
            
        }
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
    let questionInfoIcon = document.querySelectorAll('.giftinfo__descr-question'),
        questionTooltip = document.querySelectorAll('.tooltip__item');

    questionInfoIcon.forEach((item, i) => {
        item.addEventListener('click', () => {
            console.log(1);
            if (questionTooltip[i].style.display == 'block') {
                questionTooltip[i].style.display = 'none';
            } else {
                questionTooltip[i].style.display = 'block';
            }
        });
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

    $('.toggle').on('click', function() {
        if($(this).hasClass('disabled')) {
            return false;
        }
        if ($(this).text() == '-') {
            $(this).text('+');
        } else {
            $(this).text('-');
        }
        $(this).next('.catalogpage__slidelist').slideToggle();
    });

    $('.catalogpage__question').on('click', function() {
        $(this).next('.tooltip__filter').fadeToggle();
    });

    try {
        let cartItem = document.querySelectorAll('.cart__item'),
            cartTotalPrice = document.querySelector('.cart__total > span'),
            cartTotalEdition = document.querySelector('.cart__count > span'),
            clearCart = document.querySelector('.cart__clear'),
            cartField = document.querySelector('.cart__field');

        let changeTotal = function() {
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
            // cartField.innerHTML = 'Ваша корзина пока пуста';
            changeTotal();
        });

        cartItem.forEach(function(item){
            item.addEventListener('click', function(e){
                let itemPrice = item.querySelector('.cart__item-price'),
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
                    console.log(cartItem.length)
                    if (cartItem.length === 0) {
                        cartField.innerHTML = 'Ваша корзина пока пуста';
                    }
                    changeTotal();
                }
                if (e.target.parentNode.classList.contains('cart__item-clear')) {
                    e.target.parentNode.parentNode.remove();
                    if (cartItem.length === 0) {
                        cartField.innerHTML = 'Ваша корзина пока пуста';
                    }
                    changeTotal();
                }
            });
        });


        
    } catch(e){}

    // Count in item page
    try {
        let giftSetForm = document.querySelector('.giftset__form');
        giftSetForm.addEventListener('click', function(e){
            let plus = document.querySelector('.plus'),
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
        let addressItem = document.querySelectorAll('.address__item'),
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
                    </button>`
        });

    $('#trigger').on('click', function(){
        $(this).parent().hide();
        $('#triggerForm').slideToggle();
    });

    try {
        let tab = document.querySelectorAll('.giftinfo__nav-item'),
            info = document.querySelector('.giftinfo__nav'),
            tabContent = document.querySelectorAll('.giftinfo__descr-item');

        let hideTabContent = function(a) {
                for (let i = a; i < tabContent.length; i++) {
                    tabContent[i].classList.remove('showtab');
                    tabContent[i].classList.add('hidetab');
                }
            };
         
        hideTabContent(1);
        
        let showTabContent = function(b) {
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
            let target = event.target;
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

});
const item = () => {
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
        
        // Count in item page
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
        
        // Tabs
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

        // Zoom picture
        $('.zoomed').imagezoomsl({
            zoomrange: [2, 2]
         });
    } catch(e) {}
    
};

export default item;
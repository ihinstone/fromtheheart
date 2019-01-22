const menu = () => {
    try {
        let srcWidth = window.screen.availWidth; 
        window.addEventListener('resize', function () {
            srcWidth = window.screen.availWidth;
        });

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
};

export default menu;
const cart = () => {
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
};
export default cart;
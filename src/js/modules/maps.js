const maps = () => {
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
};
export default maps;
const goldHover = () => {
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

    try{
        const catalogPhoto = document.querySelectorAll('.catalog__item-photo');
        catalogPhoto.forEach((item, i) => {
            item.addEventListener('mouseenter', () => {
                item.nextElementSibling.classList.add('catalog__pdf-hovered');
            });
            item.addEventListener('mouseleave', () => {
                item.nextElementSibling.classList.remove('catalog__pdf-hovered');
            });
        });
    } catch(e){}
};

export default goldHover;
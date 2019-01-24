const seoText = () => {
    try {
        // SeoText Main
        const describeText = document.querySelectorAll('.describe__text'),
        describeForm = document.querySelector('.describe__form');
    
        describeText[1].style.display = 'none';
        let opened = false;
        describeText.forEach(item => {
            item.addEventListener('click', () => {
                if (!opened) {
                    describeForm.classList.toggle('describe__form-active');
                    $('.describe__text').eq(1).slideToggle('slow');
                    describeText[0].classList.toggle('describe__text-pb50');
                    document.querySelector('.describe__text > ul > li >span').style.opacity = '1';
                    document.querySelector('.describe__text > ul > li >span').innerHTML = '.';
                    opened = !opened;
                } else {
                    describeForm.classList.toggle('describe__form-active');
                    $('.describe__text').eq(1).slideToggle('slow');
                    setTimeout(() => {
                        describeText[0].classList.toggle('describe__text-pb50');
                    }, 300);
                    document.querySelector('.describe__text > ul > li >span').style.opacity = '.7';
                    document.querySelector('.describe__text > ul > li >span').innerHTML = '...читать все';
                    opened = !opened;
                }
            });
        });
        }catch(e) {}
};

export default seoText;
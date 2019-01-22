const modal = () => {
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
};

export default modal;
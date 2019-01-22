const forms = () => {
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

        document.getElementById('trigger').addEventListener('click', () => {
            $('#triggerForm').slideToggle();
        });

            //Feedback form
        $('#feedbackform').on('click', function(){
            $(this).hide();
            $('.feedback__form').slideDown('slow');
        });
        $('.feedback__form-right-reset').on('click', function() {
            $('.feedback__form').slideUp('slow');
            $('#feedbackform').fadeIn('slow');
        });
    } catch(e){}
};
export default forms;
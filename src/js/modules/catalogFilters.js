const catalogFilters = () => {
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
};
export default catalogFilters;
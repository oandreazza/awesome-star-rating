describe("Rating Start core", function(){


    beforeEach(function(){
        var $container = $("<div id='rating'></div>")
        var $ratingValue = $('<span id="value"></span>')

        $('body').append($container, $ratingValue);

        $container.rating();

        $container.on('rating:rate','.rating-option', function(event, value,identifier, fillRating){
            $ratingValue.html(value)
            fillRating()
        });
    })

    it('should create container with 5 stars as default', function(){
        expect($('.rating-container .rating-option').length).toBe(5)
    });

    it('should colorize the star clicked', function(){
        $('.rating-container .rating-option').eq(3).trigger('click');
        expect($('.rating-container .filled').length).toBe(2)
    });

    it('should print the value of the star clicked', function(){
        $('.rating-container .rating-option').eq(3).trigger('click');
        expect($('#value').text()).toBe('2')
    });

    afterEach(function() {
        $('#rating').remove();
    });

});
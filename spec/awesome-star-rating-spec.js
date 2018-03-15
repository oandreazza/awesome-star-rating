describe("Rating Start core", function(){


    beforeEach(function(){
        var $container = $("<div id='rating'></div>")

        $('body').append($container);

        $container.rating();

    })

    it('should create container with 5 stars as default', function(){
        expect($('.rating-container .rating-option').length).toBe(5)
    });

});
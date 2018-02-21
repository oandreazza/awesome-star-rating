(function( $ ){

    var identifier;
    var numberOfOptions;

    $.fn.rating = function( options ) {

       return this.each(function(){
         
            var settings = $.extend({
                length: 5,
                identifier: null,
                ratingValue: 0
            }, options)

            identifier = settings.identifier;
            numberOfOptions = settings.length;
    
            var containerRating = createContainer();
            $(containerRating).append(createOptions())
            fillOptions(settings.ratingValue,$(containerRating))
            this.append(containerRating)
        })
    }

    createOptions = function(){
        var options = [];
        var ratingValue = numberOfOptions;
        for (var i=0; i < numberOfOptions; i++){
            var span = document.createElement("span");
            $(span).addClass("rating-option").attr('data-rating', ratingValue).on('click',{ ratingValue, identifier }, rate)
            options.push($(span));
            ratingValue--;
        }
        return options;
    }

    createContainer = function () {
        var container = document.createElement('div');
        container.className = 'rating-container'
        return container
      }

    rate = function ( event ) {
        var container = $(this).parents('.rating-container');
        $(this).trigger('rating:rate', [event.data.ratingValue, event.data.identifier, function(){
            fillOptions(event.data.ratingValue, container)
        }])
    }

    clearOptions = function(container){
         container.find('.rating-option').removeClass('filled');
    }

    fillOptions = function(ratingValue, container){
        var filledOptions = container.find('.filled').length;
        clearOptions(container);
        if (ratingValue !== filledOptions)
            for(var i = 1; i <= ratingValue; i++){
                container.find('.rating-option[data-rating="'+i+'"]').addClass('filled');
            }
    }

}( jQuery ));
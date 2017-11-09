// =================================================================
// 	Hello Lamp Post
// 	Global Javascript
// =================================================================

jQuery.fn.extend({
    toggleText: function (a, b){
        var that = this;
            if (that.text() != a && that.text() != b){
                that.text(a);
            }
            else
            if (that.text() == a){
                that.text(b);
            }
            else
            if (that.text() == b){
                that.text(a);
            }
        return this;
    }
});

$(document).on('click', '.menu a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -110
    }, 500);
});

$( ".js-to-top" ).on( "click", function() {
	$('html, body').animate({
    	scrollTop: $(".hero").offset().top -110
	}, 600);
	return false;
});

$( ".accordian-item" ).on( "click", function() {
  if ( $(this).hasClass('active') ) {
  	$(this).removeClass('active');
	} else {
    $( ".accordian-item" ).removeClass('active');
  	$(this).toggleClass('active');
  }
});

$( ".js-scroll-down-button" ).on( "click", function() {
	$('html, body').animate({
    	scrollTop: $(".process").offset().top
	}, 600);
	return false;
});

$( ".js-learn-more" ).on( "click", function() {
	$(this).toggleClass("active");
	$(this).toggleText('Visa Mer', 'Visa Mindre');
	$(".how-to-play").toggleClass("active");
	$(".what-to-expect").toggleClass("active");
	$('html, body').animate({
    	scrollTop: $(".how-to-play").offset().top -110
	}, 600);
	return false;
});

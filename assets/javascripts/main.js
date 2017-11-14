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

// Lazy Load The Image

$(document).on('click', '.menu a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -55
    }, 500);
});

$(document).on('click', '.link-exit', function(event){
    event.preventDefault();
    $("#notification").addClass("inactive");
});

// Lazy Load The Image
$("img.lazy").lazyload({
	threshold : 500,
	effect : "fadeIn"
});

$( ".js-to-top" ).on( "click", function() {
	$('html, body').animate({
    	scrollTop: $(".hero").offset().top -55
	}, 600);
	return false;
});

$(document).on('click', '.js-contact', function(event){
  $('html, body').animate({
      scrollTop: $(".contact").offset().top -55
  }, 600);
	return false;
});

$( ".js-scroll-down-button" ).on( "click", function() {
	$('html, body').animate({
    	scrollTop: $("#about").offset().top - 57
	}, 600);
	return false;
});

$(document).on('click', '.hamburger', function(event){
  event.preventDefault();
  $(this).toggleClass("active");
  $(".menu").toggleClass("active");
});

$( ".js-learn-more" ).on( "click", function() {
	$(this).toggleClass("active");
	$(this).toggleText('Show More', 'Show Less');
	$(".how-to-play").toggleClass("active");
	$(".what-to-expect").toggleClass("active");
	$('html, body').animate({
    	scrollTop: $(".how-to-play").offset().top
	}, 600);
	return false;
});

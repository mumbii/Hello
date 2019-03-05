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

//Burger menu button

$(document).on('click', '.menu a', function(event){
    //event.preventDefault();

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

//Back to Top button
$( ".js-to-top" ).on( "click", function() {
	$('html, body').animate({
    	scrollTop: $(".hero").offset().top -55
	}, 600);
	return false;
});

//Goes to contact section
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


//Toggles section with more or less information
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



//expanding projects
  function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}


//Expand to see more Projects 
function myFunction() {
  var expand = document.getElementById("expand");
  var more = document.getElementById("more");
  var btnText = document.getElementById("Btn");

  if (expand.style.display === "none") {
    expand.style.display = "inline";
    btnText.innerHTML = "More Projects";
    more.style.display = "none";
  }
  else {
    expand.style.display = "none";
    btnText.innerHTML = "Less Projects";
    more.style.display = "inline";
  }
}


//Scroll reveal
  window.sr = ScrollReveal();
  sr.reveal('.herotext', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
  });
  sr.reveal('.abouttext', {
    duration: 3000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
  });
  sr.reveal('.bgphone', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px',
    viewFactor: 0.2
  });
  sr.reveal('.process-item', {
    duration: 1000,
    origin: top,
    viewFactor: 0.2
  });
  sr.reveal('.locationtext', {
    duration: 1500,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
  });
  sr.reveal('.left', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
  });
  sr.reveal('.right', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
  });
  sr.reveal('.contact', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
  });

$(document).ready(function() {
    $(".nav center").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('.nav center').addClass('black');
    }

    else {
          $('.nav center').removeClass('black');
    }
})



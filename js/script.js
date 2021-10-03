function offsetAnchor() {
    if (location.hash.length !== 0 && (window.innerHeight + window.scrollY) < document.body.scrollHeight) {
        window.scrollTo(window.scrollX, window.scrollY - 49);
    }
}
  
$(document).on('click', 'a[href^="#"]', function(event) {
    window.setTimeout(function() {
        offsetAnchor();
    }, 0);
});

$(window).bind('scroll', function() {
    if($(window).scrollTop() >= $('#contact').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(6)').show();
        console.log("contact");
    } else if($(window).scrollTop() >= $('#portfolio').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(5)').show();
        console.log("portfolio");
    } else if($(window).scrollTop() >= $('#formation').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(4)').show();
        console.log("formation");
    } else if($(window).scrollTop() >= $('#competences').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(3)').show();
        console.log("competences");
    } else if($(window).scrollTop() >= $('#aPropos').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(2)').show();
        console.log("aPropos");
    } else {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(1)').show();
        console.log("accueil");
    }
});
    
window.setTimeout(offsetAnchor, 0);
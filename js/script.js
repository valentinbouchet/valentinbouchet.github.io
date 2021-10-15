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

$(window).bind('resize', function() {
    if ($(window).width() > 780) {
        $('body header nav ul li').show();
        return;
    }
    if($(window).scrollTop() >= $('#contact').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(6)').show();
    } else if($(window).scrollTop() >= $('#portfolio').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(5)').show();
    } else if($(window).scrollTop() >= $('#formation').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(4)').show();
    } else if($(window).scrollTop() >= $('#competences').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(3)').show();
    } else if($(window).scrollTop() >= $('#aPropos').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(2)').show();
    } else {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(1)').show();
    }
});

$(window).bind('scroll', function() {
    if ($(window).width() > 780) {
        $('body header nav ul li').show();
        return;
    }
    if($(window).scrollTop() >= $('#contact').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(6)').show();
    } else if($(window).scrollTop() >= $('#portfolio').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(5)').show();
    } else if($(window).scrollTop() >= $('#formation').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(4)').show();
    } else if($(window).scrollTop() >= $('#competences').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(3)').show();
    } else if($(window).scrollTop() >= $('#aPropos').offset().top - 50) {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(2)').show();
    } else {
        $('body header nav ul li').hide();
        $('body header nav ul li:nth-of-type(1)').show();
    }
});


$(document).ready(function () {
    $('body header nav ul li a').click(function(e) {
        if ($(window).width() < 780){
            e.preventDefault();
            $(this).css("background-color", "grey");
        }
    });
});

let alertContact = () => {
    alert("Cette fonctionnalité est en cours de développement donc n'est pas encore disponible. Merci de votre compréhension")
}
    
window.setTimeout(offsetAnchor, 0);
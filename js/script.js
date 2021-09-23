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
  
window.setTimeout(offsetAnchor, 0);
function slowScroll (id){
    var offset = 60;

    $('html, body').animate({
        scrollTop: $(id).offset ().top - offset
    }, 500);
    if(burgerMenu.classList.contains('_active')){
        document.body.classList.remove('_lock');
        burgerMenu.classList.remove('_active');
        menu.classList.remove('_active');
    }
    return false;
}
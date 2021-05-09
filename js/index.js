window.onload = () => {
    $('#about-me').hide();
}

// Menu is initially closed
var menuShown = false;

$('#about-btn-show').on('click', () => {
    if (! menuShown) {
        menuShown = true;
        $('#about-me').slideDown()
        $('#about-btn-show span').css('background-color', 'silver');
    } else {
        menuShown = false;
        $('#about-me').slideUp();
        $('#about-btn-show span').css('background-color', 'transparent');
    }
    $('#about-btn-show').toggleClass("aboutMeBtnClicked");
    console.log("Menu Status:" + menuShown);
});

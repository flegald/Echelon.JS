$(function() {
    var $center = $("#center"), degree = 0, timer;
    rotate();
    function rotate() {

        $center.css({ '-webkitTransform': 'rotate(' + degree + 'deg)'});
        $center.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
        timer = setTimeout(function() {
            ++degree; rotate();
        },10);
    }

    setTimeout(function() {
        clearTimeout(timer);
        $('#right').animate({
            left: '+=200px'
        }, 2000);
        $('#left').animate({
            left: '-=200px'
        }, 2000);
        $('#center').animate({
            left: '+=200px'
        }, 2000);
    }, 2000);

});

setTimeout(function() {
    window.location.href = 'puzzle4.html';
}, 5000);

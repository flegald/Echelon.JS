var door = document.getElementById('door');
var prize = document.getElementById('prize');

var tempName = localStorage.getItem('AgentName');
var tempAlias = localStorage.getItem('AgentAlias');
var userName = JSON.parse(tempName);
var userAlias = JSON.parse(tempAlias);

var putAlias = document.getElementById('putAlias');

var writeAlias = function() {
  putAlias.innerHTML = userAlias;
};

writeAlias();

$('#door').on('click', function() {

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

  setTimeout(function(){
    prize.className = 'visible';
  }, 4000);

});

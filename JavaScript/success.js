var currentStage;
getLocal();

if (currentStage < 11) {
  window.location.href = 'index.html';
  alert('Cheater');
} else {

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

    $('#slugHover').hover(function() {
        $('#center').css({ "-webkit-filter" : "brightness(190%)"});
        $('#left').css({ "-webkit-filter" : "brightness(190%)"});
        $('#right').css({ "-webkit-filter" : "brightness(190%)"});
        $('#left').css({ "-webkit-filter" : "drop-shadow(0px 0px 3px #fff)"});
        $('#right').css({ "-webkit-filter" : "drop-shadow(0px 0px 3px #fff)"});
        // $('#slugHover').css({"z-index": "3"});
    }, function() {
        $('#center').css({ "-webkit-filter" : "brightness(100%)"});
        $('#left').css({ "-webkit-filter" : "brightness(100%)"});
        $('#right').css({ "-webkit-filter" : "brightness(100%)"});
        // $('#slugHover').css({"z-index": "5"});


    });

    // filter: drop-shadow(5px 5px 10px #ccc);

    $('#slugHover').on('click', function() {


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

      $('#slugHover').off('click');
      $('#slugHover').unbind('mouseenter mouseleave');

    });



}

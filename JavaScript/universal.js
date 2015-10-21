


function disableButt (id) {
    var subButton = document.getElementsByClassName('timeButt');
    subButton.disabled = false;
    var check = document.getElementById(id);
    if (check.className === 'hidden') {
        subButton.disabled = true;
        alert('You Ran Out of Time');
        window.location.href = ('index.html');
    }
}



function timerAll(secsRemain, id){
var check = document.getElementById(id);
var interval = setInterval(function() {
    document.getElementById('timer').innerHTML = --secsRemain;

    if (secsRemain <= 0)
    {
        document.getElementById('timer').innerHTML = 'Time is up';
        clearInterval(interval);
        disableButt(id);
    } else if ((secsRemain > 0) && (check.className !== 'hidden')){
        document.getElementById('timer').innerHTML = secsRemain;   
    }
}, 1000);
}




	
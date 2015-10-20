// "Timer" change var secsRemain to change time limit.
//section with timer needs id of "timer"
// All this does is display the numbers

var secsRemain = 90;
var interval = setInterval(function() {
    document.getElementById('timer').innerHTML = --secsRemain;

    if (secsRemain <= 0)
    {
        document.getElementById('timer').innerHTML = 'Time is up';
        clearInterval(interval);
    }
}, 1000);


//This is the actual timer
//make sure your submit button has an id of "subButt"
//change where the user is redirected to on line 26 in the empty ''
//The time limit is the number on line 30
//make sure the display timer and this timer match
var subButton = document.getElementById('subButt');
subButton.disabled = false;

function disableButt () {
	subButton.disabled = true;
	alert('You Ran Out of Time');
	window.location.href = ('http://www.google.com');
}

	setTimeout(disableButt, 90000);
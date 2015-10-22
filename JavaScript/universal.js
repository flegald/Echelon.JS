var interval;

function stopTimer() {
    clearInterval(interval);
}

function timerAll(secsRemain){
    document.getElementById('timer').innerHTML = secsRemain;
    interval = setInterval(function() {
        document.getElementById('timer').innerHTML = --secsRemain;

        if (secsRemain <= 0)
        {
            document.getElementById('timer').innerHTML = 'Time is up';
            stopTimer();
            disableButtons();
            alert('You Ran Out of Time');
            window.location.href = ('Fail.html');
        }
    }, 1000);
}

var currentStage = 0;

function localize(stageNum) {
    currentStage = stageNum;
    var tempWins = JSON.stringify(currentStage);
    localStorage.setItem("WillFerrell", tempWins);
}
function getLocal() {
    var tempWins = localStorage.getItem("WillFerrell");
    currentStage = JSON.parse(tempWins);
}

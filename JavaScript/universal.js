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
<<<<<<< HEAD

//Added by Mike- Don's code for getting names for final page.
function getUserName() {
  var tempName = localStorage.getItem('AgentName');
  var tempAlias = localStorage.getItem('AgentAlias');
  var userName = JSON.parse(tempName);
  var userAlias = JSON.parse(tempAlias);
}




=======
>>>>>>> da617b789e970f9b46779eb4f4fb5fa5d03bd027

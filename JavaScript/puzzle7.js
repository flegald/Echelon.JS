var currentStage;
getLocal();

if (currentStage < 7) {
  window.location.href = 'index.html';
  alert('Cheater');
} else {

  var trueButton = document.getElementById('ans-true');
  var falseButton = document.getElementById('ans-false');

  var disableButtons = function() {
    trueButton.disabled = true;
    falseButton.disabled = true;    
  };

  timerAll(90);

  // event listener for correct answer
  trueButton.addEventListener('click', function(e){
    e.preventDefault();
    localize(8);
    document.getElementById('res-correct').className = 'visible';
    disableButtons();
    stopTimer();
  });

  // event listener for wrong answer
  falseButton.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('res-wrong').className = 'visible';
    disableButtons();
    stopTimer();
  });

  document.getElementById('cont').addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'puzzle8.html';
  });

  document.getElementById('return-button').addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'Fail.html';
  });
}

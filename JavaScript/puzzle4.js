var currentStage;
getLocal();

if (currentStage < 4) {
  window.location.href = 'index.html';
  console.log("Cheater");
} else {
  // timerAll(90, 'res-contain');

  var trueButton = document.getElementById('ans-true');
  var falseButton = document.getElementById('ans-false');

  // event listener for correct answer
  falseButton.addEventListener('click', function(e){
    e.preventDefault();
    localize(5);
    document.getElementById('res-correct').className = 'visible';
    trueButton.disabled = true;
    falseButton.disabled = true;
  });

  // event listener for wrong answer
  trueButton.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('res-wrong').className = 'visible';
    trueButton.disabled = true;
    falseButton.disabled = true;
  });

  document.getElementById('cont').addEventListener('click', function(){
    window.location.href = 'puzzle5.html';
  });

  document.getElementById('return-button').addEventListener('click', function(){
    window.location.href = 'Fail.html';
  });
}

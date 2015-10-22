var currentStage;
getLocal();

if (currentStage < 7) {
  window.location.href = 'index.html';
  console.log("Cheater");
} else {
  // timerAll( 90, 'res-contain');

  var trueButton = document.getElementById('ans-true');
  var falseButton = document.getElementById('ans-false');

  // event listener for correct answer
  trueButton.addEventListener('click', function(e){
    e.preventDefault();
    localize(8);
    trueButton.disabled = true;
    falseButton.disabled = true;
    document.getElementById('res-correct').className = 'visible';
  });

  // event listener for wrong answer
  falseButton.addEventListener('click', function(e){
    e.preventDefault();
    trueButton.disabled = true;
    falseButton.disabled = true;
    document.getElementById('res-wrong').className = 'visible';
  });

  document.getElementById('cont').addEventListener('click', function(){
    window.location.href = 'puzzle8.html';
  });

  document.getElementById('return-button').addEventListener('click', function(){
    window.location.href = 'Fail.html';
  });
}

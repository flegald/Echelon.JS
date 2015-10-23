var currentStage;
getLocal();

if (currentStage < 5) {
  window.location.href = 'index.html';
  alert('Cheater');
} else {

  var buttonRight = document.getElementById('correct-button');
  var buttonGo = document.getElementById('cont');
  var wrongA = document.getElementById('wrong-a');
  var wrongB = document.getElementById('wrong-b');
  var wrongC = document.getElementById('wrong-c');
  var resCorrect = document.getElementById('res-correct');
  var resWrong = document.getElementById('res-wrong');

  var disableButtons = function() {
    buttonRight.disabled = true;
    wrongA.disabled = true;
    wrongB.disabled = true;
    wrongC.disabled = true;
  }

  timerAll(90);

  buttonRight.addEventListener('click', function(e){
    e.preventDefault();
    resCorrect.className = 'visible';
    localize(6);
    disableButtons();
    stopTimer();
  });

  wrongA.addEventListener('click', function(e){
    e.preventDefault();
    resWrong.className = 'visible';
    disableButtons();
    stopTimer();
  });

  wrongB.addEventListener('click', function(e){
    e.preventDefault();
    resWrong.className = 'visible';
    disableButtons();
    stopTimer();
  });

  wrongC.addEventListener('click', function(e){
    e.preventDefault();
    resWrong.className = 'visible';
    disableButtons();
    stopTimer();
  });

  document.getElementById('return-button').addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'Fail.html';
  });

  buttonGo.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href="puzzle6.html";
  });

}


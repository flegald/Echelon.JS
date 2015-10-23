var currentStage;
getLocal();

if (currentStage < 8) {
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
    localize(9);
    resCorrect.className = 'visible';
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

  buttonGo.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href="puzzle9.html";
  });
  document.getElementById('return-button').addEventListener('click', function(e){
    event.preventDefault();
    window.location.href = 'Fail.html';
  });
}


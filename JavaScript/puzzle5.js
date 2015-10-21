var buttonRight = document.getElementById('correct-button');
var buttonGo = document.getElementById('cont');
var wrongA = document.getElementById('wrong-a');
var wrongB = document.getElementById('wrong-b');
var wrongC = document.getElementById('wrong-c');
var resCorrect = document.getElementById('res-correct');
var resWrong = document.getElementById('res-wrong');
var resContain = document.getElementById('res-contain');

timerAll(90, 'res-contain');

buttonRight.addEventListener('click', function(e){
  e.preventDefault();
  resContain.className = 'visible';
  resCorrect.className = 'visible';
  buttonGo.className = 'visible';
  buttonRight.className = 'hidden';
  wrongA.className = 'hidden';
  wrongB.className = 'hidden';
  wrongC.className = 'hidden';
});

buttonGo.addEventListener('click', function(){
  window.location.href="puzzle6.html";
});

wrongA.addEventListener('click', function(e){
  e.preventDefault();
  resContain.className = 'visible';
  resWrong.className = 'visible';
  buttonRight.className = 'hidden';
  wrongA.className = 'hidden';
  wrongB.className = 'hidden';
  wrongC.className = 'hidden';
});
wrongB.addEventListener('click', function(e){
  e.preventDefault();
  resContain.className = 'visible';
  resWrong.className = 'visible';
  buttonRight.className = 'hidden';
  wrongA.className = 'hidden';
  wrongB.className = 'hidden';
  wrongC.className = 'hidden';
});
wrongC.addEventListener('click', function(e){
  e.preventDefault();
  resContain.className = 'visible';
  resWrong.className = 'visible';
  buttonRight.className = 'hidden';
  wrongA.className = 'hidden';
  wrongB.className = 'hidden';
  wrongC.className = 'hidden';
});


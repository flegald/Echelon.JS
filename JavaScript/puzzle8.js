var buttonRight = document.getElementById('correct-button');
var buttonGo = document.getElementById('cont');
var wrongA = document.getElementById('wrong-a');
var wrongB = document.getElementById('wrong-b');
var wrongC = document.getElementById('wrong-c');
var resCorrect = document.getElementById('res-correct');
var resWrong = document.getElementById('res-wrong');
var resContain = document.getElementById('res-contain');

var currentStage;
getLocal();

if (currentStage < 8) {
  window.location.href = 'index.html';
  console.log("Cheater");
} else {

  timerAll( 90, 'res-contain');

  buttonRight.addEventListener('click', function(e){
    e.preventDefault();
    localize(9);
    resContain.className = 'visible';
    resCorrect.className = 'visible';
    buttonGo.className = 'visible';
    buttonRight.className = 'hidden';
    wrongA.className = 'hidden';
    wrongB.className = 'hidden';
    wrongC.className = 'hidden';
  });

<<<<<<< HEAD
document.getElementById('return-button').addEventListener('click', function(e){
  event.preventDefault();
  window.location.href = 'Fail.html';
})

=======
  buttonGo.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href="puzzle9.html";
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

}
>>>>>>> master

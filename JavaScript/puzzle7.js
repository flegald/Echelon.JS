var trueButton = document.getElementById('ans-true');
var falseButton = document.getElementById('ans-false');

var currentStage;
getLocal();

if (currentStage < 7) {
  window.location.href = 'index.html';
  console.log("Cheater");
} else {

<<<<<<< HEAD
var contButton = document.getElementById('cont');
contButton.addEventListener('click', function(){
  window.location.href = 'puzzle8.html';
});

document.getElementById('return-button').addEventListener('click', function(e){
  event.preventDefault();
  window.location.href = 'Fail.html';
})
=======
  timerAll( 90, 'res-contain');

  trueButton.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('res-contain').className = 'visible';
    trueButton.className = 'hidden';
    falseButton.className = 'hidden';
    document.getElementById('res-correct').className = 'visible';
    localize(8);
  });
  falseButton.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('res-contain').className = 'visible';
    trueButton.className = 'hidden';
    falseButton.className = 'hidden';
    document.getElementById('res-wrong').className = 'visible';
  });

  var contButton = document.getElementById('cont');
  contButton.addEventListener('click', function(){
    window.location.href = 'puzzle8.html';
  });

}
>>>>>>> master

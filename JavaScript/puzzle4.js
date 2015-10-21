<<<<<<< HEAD
timerAll(90, 'res-contain');


var submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function(e){
  e.preventDefault();
  if (document.getElementById('ans-false').checked) {
    document.getElementById('res-correct').className = 'visible';
    document.getElementById('res-contain').className = 'visible';
    document.getElementById('return-button').className = 'hidden';
  } else {
    document.getElementById('res-wrong').className = 'visible';
    document.getElementById('res-contain').className = 'visible';
  }
  submitButton.className = 'hidden';
});

var contButton = document.getElementById('cont');
contButton.addEventListener('click', function(){
  window.location.href = 'puzzle5.html';
});

document.getElementById('return-button').addEventListener('click', function(e){
event.preventDefault();
window.location.href = 'Fail.html';
})
=======

var currentStage;
getLocal();

if (currentStage < 4) {
  window.location.href = 'index.html';
  console.log("Cheater");
} else {


  timerAll(90, 'res-contain');

  var submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', function(e){
    e.preventDefault();
    if (document.getElementById('ans-false').checked) {
      localize(5);
      document.getElementById('res-correct').className = 'visible';
      document.getElementById('res-contain').className = 'visible';
    } else {
      document.getElementById('res-wrong').className = 'visible';
      document.getElementById('res-contain').className = 'visible';

    }
    submitButton.className = 'hidden';
  });

  var contButton = document.getElementById('cont');
  contButton.addEventListener('click', function(){
    window.location.href = 'puzzle5.html';
  });

}
>>>>>>> master

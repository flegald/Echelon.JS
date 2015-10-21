var trueButton = document.getElementById('ans-true');
var falseButton = document.getElementById('ans-false');

trueButton.addEventListener('click', function(e){
  e.preventDefault();
  trueButton.className = 'hidden';
  falseButton.className = 'hidden';
  document.getElementById('res-correct').className = 'visible';
});
falseButton.addEventListener('click', function(e){
  e.preventDefault();
  trueButton.className = 'hidden';
  falseButton.className = 'hidden';
  document.getElementById('res-wrong').className = 'visible';
});

var contButton = document.getElementById('cont');
contButton.addEventListener('click', function(){
  window.location.href = 'puzzle8.html';
});

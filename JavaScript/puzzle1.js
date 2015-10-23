var currentStage;
getLocal();

var wroAns = document.getElementById('ans-True');
var corAns = document.getElementById('ans-False');
var showCor = document.getElementById('res-correct');
var showWro = document.getElementById('res-wrong');
var cont =  document.getElementById('cont');

var disableButtons = function() {
  wroAns.disabled = true;
  corAns.disabled = true;
};

timerAll(90);

corAns.addEventListener('click', function(e){
	e.preventDefault();
	showCor.className = ('visible');
  localize(2);
  disableButtons();
  stopTimer();
});

wroAns.addEventListener('click', function(e){
	e.preventDefault();
	showWro.className = ('visible');
  disableButtons();
  stopTimer();
});

document.getElementById('return-button').addEventListener('click', function(e){
	e.preventDefault();
  window.location = 'Fail.html';
});

cont.addEventListener('click', function(e){
  e.preventDefault();
  window.location = "puzzle2.html";
});




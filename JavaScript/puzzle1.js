var wroAns = document.getElementById('ans-True');
var corAns = document.getElementById('ans-False');
var showCor = document.getElementById('res-correct');
var showWro = document.getElementById('res-wrong');
var cont =  document.getElementById('cont')

var currentStage;
getLocal();


// timerAll(90,'end');

corAns.addEventListener('click', function(e){
	event.preventDefault();
	showCor.className = ('visible');
  localize(2);
	});


wroAns.addEventListener('click', function(e){
	event.preventDefault();
	showWro.className = ('visible');
});

document.getElementById('return-button').addEventListener('click', function(e){
	window.location = 'Fail.html';
});

cont.addEventListener('click', function(e){
  window.location = "puzzle2.html";
});




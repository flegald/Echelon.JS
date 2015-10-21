var wroAns = document.getElementById('wroButt');
var corAns = document.getElementById('corButt');
var show = document.getElementById('end');
var cont =  document.getElementById('cont')

var currentStage = 1;
localize(1);
console.log(currentStage);

timerAll(90,'end');

corAns.addEventListener('click', function(e){
	event.preventDefault();
	show.className = ('visible');
  document.getElementById('wrong').className = ('hidden');
  wroAns.className = ('hidden');
  corAns.className = ('hidden');

  document.getElementById('return-button').className = "hidden";

  localize(2);

});


wroAns.addEventListener('click', function(e){
	event.preventDefault();
	show.className = ('visible');
	document.getElementById("correct").className = ('hidden');
	document.getElementById('cont').className = ('hidden');
 	wroAns.className = ('hidden');
  corAns.className = ('hidden');
 
});

document.getElementById('return-button').addEventListener('click', function(e){
	window.location = 'Fail.html';
});

cont.addEventListener('click', function(e){
  window.location = "puzzle2.html";
});




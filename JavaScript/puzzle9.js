var anOne = document.getElementById('aOne');
var anTwo = document.getElementById('aTwo');
var submitButt = document.getElementById('subButt');
var showCor = document.getElementById('res-correct');
var showWro = document.getElementById('res-wrong');
var cont = document.getElementById('cont')

var currentStage;
getLocal();

if (currentStage < 9) {
  window.location.href = 'index.html';
  console.log("Cheater");

} else {

  timerAll( 90, 'hide');

  submitButt.addEventListener('click', function(e){
    event.preventDefault();
    if ((anOne.value == 12 && anTwo.value == 'undefined') || (anOne.value == 12 && anTwo.value == 'Undefined')){
    	showCor.className = ('visible');
      localize(10);
    } else {
    	showWro.className = ('visible');
    }
  });

  cont.addEventListener('click', function(e){
    window.location = "puzzle10.html";
  });

  document.getElementById('return-button').addEventListener('click', function(e){
  	event.preventDefault();
  	window.location = 'Fail.html';
  });
}

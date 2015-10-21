var anOne = document.getElementById('aOne');
var anTwo = document.getElementById('aTwo');
var submitButt = document.getElementById('subButt');
var show = document.getElementById('hide');
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
    	show.className = ('visible');
    	document.getElementById('wroAns').className = ('hidden');
      submitButt.className = "hidden";
      localize(10);
      document.getElementById('return-button').className = 'hidden';
    } else {
    	show.className = ('visible');
    	document.getElementById('corAns').className = ('hidden');
    	document.getElementById('cont').className = ('hidden');
      submitButt.className = "hidden";
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

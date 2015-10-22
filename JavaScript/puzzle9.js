var currentStage;
getLocal();

if (currentStage < 9) {
  alert('Cheater');
  window.location.href = 'index.html';
} else {

  var anOne = document.getElementById('aOne');
  var anTwo = document.getElementById('aTwo');
  var submitButt = document.getElementById('subButt');
  var showCor = document.getElementById('res-correct');
  var showWro = document.getElementById('res-wrong');
  var cont = document.getElementById('cont');

  var disableButtons = function() {
    anOne.disabled = true;
    anTwo.disabled = true;
    submitButt.disabled = true;
  };

  timerAll(90);

  submitButt.addEventListener('click', function(e){
    e.preventDefault();
    if ((anOne.value == 12 && anTwo.value == 'undefined') || (anOne.value == 12 && anTwo.value == 'Undefined')){
    	showCor.className = ('visible');
      localize(10);
      disableButtons();
      stopTimer();
    } else {
    	showWro.className = ('visible');
      disableButtons();
      stopTimer();
    }
  });

  cont.addEventListener('click', function(e){
    e.preventDefault();
    window.location = "interm3.html";
  });

  document.getElementById('return-button').addEventListener('click', function(e){
  	e.preventDefault();
  	window.location = 'Fail.html';
  });
}

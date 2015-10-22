var currentStage;
getLocal();

if (currentStage < 3) {
  window.location.href = 'index.html';
  alert('Cheater');
} else {

	var anOne = document.getElementById('aOne');
	var anTwo = document.getElementById('aTwo');
	var anThree = document.getElementById('aThree');
	var subButton = document.getElementById('subButt');
	var showCor = document.getElementById('res-correct');
	var showWro = document.getElementById('res-wrong');
	var contin = document.getElementById('cont');

	var disableButtons = function() {
		anOne.disabled = true;
		anTwo.disabled = true;
		anThree.disabled = true;
		subButton.disabled = true;
	}

	timerAll(90);

	subButton.addEventListener('click', function(e){
		event.preventDefault();
		if ((anOne.value == "'morals'" && anTwo.value == "'cpu'" && anThree.value == "'emotion'") || (anOne.value == 'morals' && anTwo.value == 'cpu' && anThree.value == 'emotion') || (anOne.value == '"morals"' && anTwo.value == '"cpu"' && anThree.value == '"emotion"') ){
			showCor.className = ('visible');
			localize(4);
			disableButtons();
			stopTimer();
		} else {
			showWro.className = ('visible');
			disableButtons();
			stopTimer();
		}
	});

	contin.addEventListener('click', function(e){
		e.preventDefault();
		window.location.href = ('interm1.html');
	});

	document.getElementById('return-button').addEventListener('click', function(e){
		e.preventDefault();
		window.location.href = ('Fail.html');
	});
}


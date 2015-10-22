var anOne = document.getElementById('aOne');
var anTwo = document.getElementById('aTwo');
var anThree = document.getElementById('aThree');
var subButton = document.getElementById('subButt');
var showCor = document.getElementById('res-correct');
var showWro = document.getElementById('res-wrong');
var contin = document.getElementById('cont');

var currentStage;
getLocal();

if (currentStage < 3) {
  window.location.href = 'index.html';
  console.log("Cheater");
} else {


	subButton.addEventListener('click', function(e){
		event.preventDefault();
		if ((anOne.value == "'morals'" && anTwo.value == "'cpu'" && anThree.value == "'emotion'") || (anOne.value == 'morals' && anTwo.value == 'cpu' && anThree.value == 'emotion') || (anOne.value == '"morals"' && anTwo.value == '"cpu"' && anThree.value == '"emotion"') 
		){
			showCor.className = ('visible');
			localize(4);
		} else {
			showWro.className = ('visible');
		}
		})

	contin.addEventListener('click', function(e){
		event.preventDefault();
		window.location.href = ('puzzle4.html');
	})

	document.getElementById('return-button').addEventListener('click', function(e){
		event.preventDefault();
		window.location.href = ('Fail.html');
	});

}


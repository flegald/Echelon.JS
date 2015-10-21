var submitButton = document.getElementById('submit-button');

<<<<<<< HEAD
timerAll( 90, 'res-contain');

submitButton.addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('res-contain').className = 'visible';
  submitButton.className = 'hidden';
  var textInput = document.getElementById('text-input').value;
  if (textInput === '121') {
    document.getElementById('res-correct').className = 'visible';
  } else {
    document.getElementById('res-wrong').className = 'visible';
  }
});
document.getElementById('return-button').addEventListener('click', function(e){
	event.preventDefault();
	window.location.href = 'Fail.html';
})
=======
var currentStage;
getLocal();

if (currentStage < 10) {
  window.location.href = 'index.html';
  console.log("Cheater");
} else {

  timerAll( 90, 'res-contain');

  submitButton.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('res-contain').className = 'visible';
    submitButton.className = 'hidden';
    var textInput = document.getElementById('text-input').value;
    if (textInput === '121') {
      document.getElementById('res-correct').className = 'visible';
    } else {
      document.getElementById('res-wrong').className = 'visible';
    }
  });

}
>>>>>>> master

var submitButton = document.getElementById('submit-button');

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

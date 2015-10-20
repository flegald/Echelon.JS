var submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function(e){
  e.preventDefault();
  submitButton.className = 'hidden';
  var textInput = document.getElementById('text-input').value;
  if (textInput === '121') {
    document.getElementById('res-correct').className = 'visible';
  } else {
    document.getElementById('res-wrong').className = 'visible';
  }
});

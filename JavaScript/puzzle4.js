var submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function(e){
  e.preventDefault();
  if (document.getElementById('ans-true').checked) {
    document.getElementById('res-correct').className = 'visible';
  } else {
    document.getElementById('res-wrong').className = 'visible';
  }
  submitButton.className = 'hidden';
});

var contButton = document.getElementById('cont-button');
contButton.addEventListener('click', function(){
  window.location.href = 'puzzle5.html';
});

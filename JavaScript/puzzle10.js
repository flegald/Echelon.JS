var currentStage;
getLocal();

if (currentStage < 10) {
  window.location.href = 'index.html';
  console.log("Cheater");
} else {

  // timerAll( 90, 'res-contain');

  var submitButton = document.getElementById('submit-button');
  
  submitButton.addEventListener('click', function(e){
    e.preventDefault();
    submitButton.disabled = true;
document.getElementById('text-input').disabled = true;
    var textInput = document.getElementById('text-input').value;
    if (textInput === '121') {
      document.getElementById('res-correct').className = 'visible';
    } else {
      document.getElementById('res-wrong').className = 'visible';
    }
  });

  document.getElementById('cont').addEventListener('click', function(){
    window.location.href = '';
  });

  document.getElementById('return-button').addEventListener('click', function(){
    window.location.href = 'Fail.html';
  });
}


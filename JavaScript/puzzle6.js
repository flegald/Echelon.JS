var currentStage;
getLocal();

if (currentStage < 6) {
  window.location.href = 'index.html';
  alert('Cheater');
} else {

  var ans1 = document.getElementById('ans1');
  var submit = document.getElementById('submit');
  var wrong = document.getElementById('res-wrong');
  var correct = document.getElementById('res-correct');

  var disableButtons = function() {
    ans1.disabled = true;
   
    submit.disabled = true;
  }

  timerAll(90);

  submit.addEventListener('click', function(e){
    event.preventDefault();
    var str1 = ans1.value.replace(/\s/g, '');
  
    if(str1 === 'this.') {
      correct.className="visible";
      localize(7);
      disableButtons();
      stopTimer();
    } else {
      wrong.className="visible";
      disableButtons();
      stopTimer();
    }
  });

  document.getElementById('cont').addEventListener('click', function(e) {
    e.preventDefault();
    window.location = "interm2.html";
  });

  document.getElementById('return-button').addEventListener('click', function(e){
    e.preventDefault();
    window.location = "Fail.html";
  });

}


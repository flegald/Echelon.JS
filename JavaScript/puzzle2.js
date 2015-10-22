var currentStage;
getLocal();
console.log(currentStage);

if (currentStage < 2) {
  window.location.href = 'index.html';
  alert('Cheater');
} else {

  // Add Event Listen buttons functions:
  var ansa = document.getElementById('ansa');
  var ansb = document.getElementById('ansb');
  var ansc = document.getElementById('ansc');
  var ansd = document.getElementById('ansd');
  var correct = document.getElementById('res-correct');
  var wrong = document.getElementById('res-wrong');

  var disableButtons = function () {
    ansa.disabled = true;
    ansb.disabled = true;
    ansc.disabled = true;
    ansd.disabled = true;
  };

  timerAll(90);

  // Event Listeners for Answers
  ansa.addEventListener('click', function(e) {
    event.preventDefault();
    localize(3);
    correct.className="visible";
    disableButtons();
    stopTimer();
  });

  ansb.addEventListener('click', function(e) {
    event.preventDefault();
    wrong.className="visible";
    disableButtons();
    stopTimer();
  });

  ansc.addEventListener('click', function(e) {
    event.preventDefault();
    wrong.className="visible";
    disableButtons();
    stopTimer();
  });

  ansd.addEventListener('click', function(e){
    event.preventDefault();
    wrong.className="visible";
    disableButtons();
    stopTimer();
  });

//Continue and Returns buttons.
  document.getElementById('return-button').addEventListener('click', function(e){
    e.preventDefault();
    window.location = 'Fail.html';
  });

  document.getElementById('cont').addEventListener('click', function(e) {
    e.preventDefault();
    window.location= "puzzle3.html";
  });
}

var currentStage;
getLocal();

if (currentStage < 6) {
  window.location.href = 'index.html';
  alert('Cheater');
} else {

  var ans1 = document.getElementById('ans1');
  var ans2 = document.getElementById('ans2');
  var ans3 = document.getElementById('ans3');
  var ans4 = document.getElementById('ans4');
  var submit = document.getElementById('submit');
  var wrong = document.getElementById('res-wrong');
  var correct = document.getElementById('res-correct');

  var disableButtons = function() {
    ans1.disabled = true;
    ans2.disabled = true;
    ans3.disabled = true;
    ans4.disabled = true;
    submit.disabled = true;
  }

  timerAll(90);

  submit.addEventListener('click', function(e){
    event.preventDefault();
    var str1 = ans1.value.replace(/\s/g, '');
    var str2 = ans2.value.replace(/\s/g, '');
    var str3 = ans3.value.replace(/\s/g, '');
    var str4 = ans4.value.replace(/\s/g, '');
    if(str1 === 'this.terra=terra;' &&
       str2 === 'this.beam=beam;' &&
       str3 === 'this.xtype=xtype;' &&
       str4 === 'this.dream=function(){') {
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
    window.location = "puzzle7.html";
  });

  document.getElementById('return-button').addEventListener('click', function(e){
    e.preventDefault();
    window.location = "Fail.html";
  });

}


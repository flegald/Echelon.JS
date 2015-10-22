var currentStage;
getLocal();
console.log(currentStage);

if (currentStage < 2) {
  window.location.href = 'index.html';
  console.log("Cheater");
} else {

  timerAll( 90, 'response');

  //Add Event Listen buttons functions:
  var ansa = document.getElementById('ansa');
  var ansb = document.getElementById('ansb');
  var ansc = document.getElementById('ansc');
  var ansd = document.getElementById('ansd');
  var cont = document.getElementById('cont');
  var correct = document.getElementById('res-correct');
  var wrong = document.getElementById('res-wrong');

  //Event Lisnters for Answers
  ansa.addEventListener('click', function(e) {
    event.preventDefault();
    localize(3);
    correct.className="visible";
    ansa.className="hidden";
    ansb.className="hidden";
    ansc.className="hidden";
    ansd.className="hidden";
    document.getElementById('return-button').className = 'hidden';

  });

  ansb.addEventListener('click', function(e) {
    event.preventDefault();
    wrong.className="visible";
    cont.className="hidden";
    ansa.className="hidden";
    ansb.className="hidden";
    ansc.className="hidden";
    ansd.className="hidden";
    });
  ansc.addEventListener('click', function(e) {
    event.preventDefault();
    wrong.className="visible";
    cont.className="hidden";
    ansa.className="hidden";
    ansb.className="hidden";
    ansc.className="hidden";
    ansd.className="hidden";

  });

  ansd.addEventListener('click', function(e){
    event.preventDefault();
    wrong.className="visible";
    cont.className="hidden";
    ansa.className="hidden";
    ansb.className="hidden";
    ansc.className="hidden";
    ansd.className="hidden";

  });

//Continue and Returns buttons.
  document.getElementById('return-button').addEventListener('click', function(e){
    window.location = 'Fail.html';
  });

  cont.addEventListener('click', function(e) {
    window.location= "puzzle3.html";
  });

}

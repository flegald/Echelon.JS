var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');
var ans3 = document.getElementById('ans3');
var ans4 = document.getElementById('ans4');
var submit = document.getElementById('submit');
var cont = document.getElementById('continue');
var wrong = document.getElementById('wrong');

submit.addEventListener('click', function(e){
  event.preventDefault();
  if(ans1.value === 'this.terra=terra;' &&
     ans2.value === 'this.beam=beam;' &&
     ans3.value === 'this.xtype=xtype;' &&
     ans4.value === 'this.dream=function(){') {
  response.className="visible";
  submit.className="hidden";
} else {
  wrong.className="visible";
};
});

cont.addEventListener('click', function(e) {
  event.preventDefault();
  window.location ="http://google.com";
});

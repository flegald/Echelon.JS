var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');
var ans3 = document.getElementById('ans3');
var ans4 = document.getElementById('ans4');
var submit = document.getElementById('submit');
var cont = document.getElementById('cont');
var wrong = document.getElementById('wrong');

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
  response.className="visible";
  submit.className="hidden";
} else {
  wrong.className="visible";
};
});

cont.addEventListener('click', function(e) {
  event.preventDefault();
  window.location ="puzzle7.html";
});

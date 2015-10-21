var anOne = document.getElementById('aOne');
var anTwo = document.getElementById('aTwo');
var submitButt = document.getElementById('subButt');
var show = document.getElementById('hide');
var cont = document.getElementById('cont')


submitButt.addEventListener('click', function(e){
event.preventDefault();
if ((anOne.value == 12 && anTwo.value == 'undefined') || (anOne.value == 12 && anTwo.value == 'Undefined')){
	show.className = ('visible');
	document.getElementById('wroAns').className = ('hidden');
  submitButt.className = "hidden";
} else {
	show.className = ('visible');
	document.getElementById('corAns').className = ('hidden');
	document.getElementById('cont').className = ('hidden');
  submitButt.className = "hidden";
}

});

cont.addEventListener('click', function(e){
  window.location = "puzzle10.html";
});

var wroAns = document.getElementById('wroButt');
var corAns = document.getElementById('corButt');
var show = document.getElementById('end');
var cont =  document.getElementById('cont')


corAns.addEventListener('click', function(e){
	event.preventDefault();
	show.className = ('visible');
  document.getElementById('wrong').className = ('hidden');
  wroAns.className = ('hidden');
  corAns.className = ('hidden');

});


wroAns.addEventListener('click', function(e){
	event.preventDefault();
	show.className = ('visible');
	document.getElementById("correct").className = ('hidden');
	document.getElementById('cont').className = ('hidden');
 	wroAns.className = ('hidden');
  corAns.className = ('hidden');
});



cont.addEventListener('click', function(e){
  window.location= "puzzle2.html";
});




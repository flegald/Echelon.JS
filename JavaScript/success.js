var door = document.getElementById('door');
var prize = document.getElementById('prize');
var open = document.getElementById('open');
var vdoor = document.getElementById('vaultdoor');

var tempName = localStorage.getItem('AgentName');
var tempAlias = localStorage.getItem('AgentAlias');
var userName = JSON.parse(tempName);
var userAlias = JSON.parse(tempAlias);


var putAlias = document.getElementById('putAlias');

var writeAlias = function() {
  putAlias.innerHTML=userAlias;
};

writeAlias();
vdoor.addEventListener('click', function(e){
  door.className ="hidden";
  prize.className ="visible";
});


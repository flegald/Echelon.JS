var door = document.getElementById('door');
var prize = document.getElementById('prize');
var open = document.getElementById('open');
var vdoor = document.getElementById('vaultdoor');

getUserName();

vdoor.addEventListener('click', function(e){
  door.className ="hidden";
  prize.className ="visible";
});



var input = document.getElementById('input');



submit.addEventListener('click', function() {
  var x = input.value;
  var y = x.replace(/\s/g, '');
  if (y == 'varfoo=function(){password}') {
    alert('Access Granted');
    console.log('Worked');
  }  else {
    alert('Access Denied! Please Enter correct Username and Password.');
    console.log('Did not work');
  };
});

//&& password2.value === function() {var x == 12345};

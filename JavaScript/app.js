// set typing speed and wait times
var typeWait = 1000;
var typeGap = 1000;
var typeSpeed = 70;

var cursorChar = '&#9608;';

var typeWriter = function(id) {
  var loc = document.getElementById(id);
  var fullText = loc.innerHTML;
  var letter = 0;
  var timeOut;

  // this function types one letter per call, then calls the subsequent typeLetter()
  var typeLetter = function() { 
    timeOut = setTimeout(function() {
      loc.className = 'visible';
      letter += 1;
      var showText = fullText.substring(0, letter);

      // stops the function from recurring when all letters are typed
      if (letter === fullText.length) {
        loc.innerHTML = '&gt;&gt; ' + showText;
      } else {
        loc.innerHTML = '&gt;&gt; ' + showText + '<span class="typed-cursor">' + cursorChar + '</span>';
        typeLetter();
      }
    }, typeSpeed);
  };
  typeLetter();

  // show cursor on next line
  var typeTime = fullText.length * typeSpeed + 100;
  setTimeout(function() {
    document.getElementById('cursor-line').className = 'visible';
  }, typeTime);
};

setTimeout(function() {
  document.getElementById('cursor-line').className = 'hidden';
  typeWriter('line1');
}, typeWait);

var delayTime1 = typeWait 
  + document.getElementById('line1').innerHTML.length * typeSpeed 
  + 50 + typeGap;

setTimeout(function() {
  document.getElementById('cursor-line').className = 'hidden';
  typeWriter('line2');
}, delayTime1);

var delayTime2 = document.getElementById('line2').innerHTML.length * typeSpeed + typeGap;

setTimeout(function() {
  document.getElementById('accept-button').className = 'visible';
}, delayTime1 + delayTime2);

// Specific for Fail.html button
setTimeout(function() {
  document.getElementById('return-button').className = 'visible';
}, delayTime1 + delayTime2);


// keypress and click listeners for moving to the first puzzle
$(document).keypress(function(key){
  console.log(key.which);
  if (key.which == 13 || key.which == 121) {
    window.location.href = 'http://www.google.com';
  }
});

$('#accept-button').on('click', function(){
  window.location.href = 'puzzle1.html';
});

// Button specific to the Fail.html page redirecting to the index
$('#return-button').on('click', function(){
  window.location.href = 'index.html';
});

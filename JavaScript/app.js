// set typing speed and wait times
var typeWait = 1000;
var typeGap = 1000;
var typeSpeed = 40;

var cursorChar = '&#9608;';

var originText;
if (document.getElementById('agent-login')) {
  originText = [document.getElementById('line1').innerHTML, document.getElementById('line2').innerHTML];
}
if (document.getElementById('return-button')) {
  originText = [('...... ' + localStorage.getItem('AgentAlias') + document.getElementById('line1').innerHTML), document.getElementById('line2').innerHTML];
}

var currentTimeout;
var showCursor;

var typeWriter = function(id, order) {
  var loc = document.getElementById(id);
  var fullText = originText[order];
  var letter = 0;

  // this function types one letter per call, then calls the subsequent typeLetter()
  var typeLetter = function() {
    currentTimeout = setTimeout(function() {
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
  showCursor = setTimeout(function() {
    document.getElementById('cursor-line').className = 'visible';
  }, typeTime);
};

var typeLine1 = setTimeout(function() {
  document.getElementById('cursor-line').className = 'hidden';
  typeWriter('line1', 0);
}, typeWait);

var delayTime1 = typeWait
  + originText[0].length * typeSpeed
  + 50 + typeGap;

var typeLine2 = setTimeout(function() {
  document.getElementById('cursor-line').className = 'hidden';
  typeWriter('line2', 1);
}, delayTime1);

var delayTime2 = originText[1].length * typeSpeed + typeGap;

// specific for index.html
var showLogin;
if (document.getElementById('agent-login')) {
  showLogin = setTimeout(function() {
    document.getElementById('agent-login').className = 'visible';
  }, delayTime1 + delayTime2);
}

// Specific for Fail.html
var showReturnButton;
if (document.getElementById('return-button')) {
  showReturnButton = setTimeout(function() {
    document.getElementById('return-button').className = 'visible';
  }, delayTime1 + delayTime2);
}

// stops all timeouts
var skip = function() {
  clearTimeout(currentTimeout);
  clearTimeout(showCursor);
  clearTimeout(typeLine1);
  clearTimeout(typeLine2);
  clearTimeout(showLogin);
};

// rewrite text with value stored on page load
var rewriteText = function(id, order) {
  var loc = document.getElementById(id);
  loc.innerHTML = '&gt;&gt; ' + originText[order];
  loc.className = 'visible';
};

// trigger skip and rewrite on pressing enter or spacebar
$(document).keypress(function(key){
  if (key.which === 13 || key.which === 32) {
    skip();
    rewriteText('line1', 0);
    rewriteText('line2', 1);
    document.getElementById('cursor-line').className = 'visible';
    
    // restoring element specific to page
    if (document.getElementById('agent-login')) {
      document.getElementById('agent-login').className = 'visible';
    }
    if (document.getElementById('return-button')) {
      document.getElementById('return-button').className = 'visible';
    }
  }
});

// keypress and click listeners for moving to the first puzzle
// $(document).keypress(function(key){
//   console.log(key.which);
//   if (key.which == 13 || key.which == 121) {
//     window.location.href = 'http://www.google.com';
//   }
// });

// Button specific to the Fail.html page redirecting to the index
$('#return-button').on('click', function(){
  window.location.href = 'index.html';
});

// For showing Alias name in Fail.html
// document.getElementById('line1').innerHTML = '......' + localStorage.getItem('AgentAlias') + ' you have proven yourself in need of more practice to reach the goal';

//Reset local storage
var currentStage;
localize(1);

//Add user name to localStorage

if (document.getElementById('user-button')) {
  var userButton = document.getElementById('user-button');
  userButton.addEventListener('click', function(e) {
    var agentName = document.getElementById('agent-name');
    var agentAlias = document.getElementById('agent-alias');
    var error = document.getElementById('input-error');
    e.preventDefault();
    if (agentName.value == '' || agentAlias.value == '') {
      error.className = 'visible';
    } else {
      tempAgentName = JSON.stringify(agentName.value);
      tempAgentAlias = JSON.stringify(agentAlias.value);
      localStorage.setItem('AgentName', tempAgentName);
      localStorage.setItem('AgentAlias', tempAgentAlias);
      agentName.value = '';
      agentAlias.value = '';
      window.location.href = 'puzzle1.html';
    }
  });
}

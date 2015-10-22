var dec1 = document.getElementById('dec1');
var agenta = document.getElementById('agenta');
var agent1 = document.getElementById('agent1');

var dec2 = document.getElementById('dec2');
var agentb = document.getElementById('agentb');
var agent2 = document.getElementById('agent2');

var dec3 = document.getElementById('dec3');
var agentc = document.getElementById('agentc');
var agent3 = document.getElementById('agent3');

var dec4 = document.getElementById('dec4');
var agentd = document.getElementById('agentd');
var agent4 = document.getElementById('agent4');

dec1.addEventListener('click', function(e) {
  event.preventDefault();
  agent1.className="hidden";
  agenta.className="visible";
});

dec2.addEventListener('click', function(e) {
  event.preventDefault();
  agent2.className="hidden";
  agentb.className="visible";
});

dec3.addEventListener('click', function(e) {
  event.preventDefault();
  agent3.className="hidden";
  agentc.className="visible";
});

dec4.addEventListener('click', function(e) {
  event.preventDefault();
  agent4.className="hidden";
  agentd.className="visible";
});

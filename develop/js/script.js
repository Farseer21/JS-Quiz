var distance= 1000*60*10


var submitAnswer = function() {

  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
       }
  }
  
  var submitAnswer = function(valore, rightanswer(scripting"),wrongAnswer) {
    if (valore == rightanswer) 
        window.alert("Correct");
    else (valore == wrongAnswer) 
          window.alert("Wrong");
    }
    };

var x = setInterval(function() {
  var setInterval =(distance % (1000 * 60 * 10));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 

  document.getElementById("demo").innerHTML = 
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Times Up!";
  }
} , 1000);
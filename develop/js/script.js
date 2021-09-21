var distance= (1000*60)
//var countDownStart = distance("x-1000")
var questions= (1,2,3,4,5)
var y= questions++ 
//var rightanswer= ("Question1"==="Scripting", "question2"==="here")
////var correct= "question"+"x++"
//var x = (x++) math.random (max === x++ > 5)

var submitAnswer1 =function() {
 var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) 
      if (radios[i].checked) {
         val === radios[i].value; 
         break
      }
  
      if (val == "" ) {
        alert('please select choice answer');
      } else if ( val == "Scripting" ) {
        alert('Answer is correct !');
      } else {
        alert('Answer is wrong');
      }
       while (y>5){(y++) 
          
      };



  var submitAnswer2 =function() {
        var radios = document.getElementsByName('choice');
         var val= "";
         for (var i = 0, length = radios.length; i < length; i++) 
             if (radios[i].checked) {
                val === radios[i].value; 
                break
             }
         
             if (val == "" ) {
               alert('please select choice answer');
             } else if ( val == "The lowest constant common denominator
             " ) {
               alert('Answer is correct !');
             }; 
               else {
               alert('Answer is wrong');
             };
              while (y>5){(y++) 
                 
             };    


    
   
 

var x = setInterval = function (){
  let  countDownStart =(distance % (1000 * 60 * 10))- length;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
};
  function countdown_init() {
    countDownStart = (distance)
};
  document.getElementById("timer").innerHTML = 
  minutes + "m " + seconds + "s ";

  function countDownStart() { (distance - 1000)
  
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Times Up!";
  }}1000;
  

};

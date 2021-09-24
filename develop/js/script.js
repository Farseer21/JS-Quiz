const durationInMinutes = 2;


//  var x = setInterval {
//   let  countDownStart =(distance % (1000 * 60 * 10))- length;
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//  };

//  updateClock();
//  var timeinterval = setInterval(updateClock, 1000); }

//   document.getElementById("timer").innerHTML = 
//   minutes + "m " + seconds + "s ";
  
// if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("timer").innerHTML = "Times Up!";
//    }
// };
  
//  }


const questions = [ (x == 1) 
  {
    question: "JavaScript is ______ Language.",
    id: 1,
    a: "scripting",
    b: "semantic",
    c: "java",
    d: "html",
    answer: "a"
  },
  { 
    question: "What is negative Infinity?",
    id: 2,
    a: "The newest Star Wars Film",
    b: "An infinite amount of nothing",
    c: "An infinity stone",
    d: "The lowest common denominator",
    answer: "d"
  }, 
  {
    question: "When linking a Javascript file to an html page what directly preceeds the path?",
    id: 3,
    a: "src",
    b: "href",
    c: "type",
    d: "none of the above",
    answer: "a"
  },  
  {
    question: "What are JavaScript Data Types?",
    id: 4,
    a: "string",
    b: "number",
    c: "boolean",
    d: "all of of the above",
    answer: "d",
  },
  {
    question: "What is the use of isNaN function? ",
    id: 5,
    a: "A way to debug code.",
    b: "A way to check for illegal integers.",
    c: "A way to alter existing elements.",
    d: "A way to add new elements.",
    answer: "b"
  }
];

const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionCounter = document.getElementById("Counter");
const scoreBox = document.getElementById("score");

console.log(questions);
let questioncounter = 0;
let score = 0;

let acceptingAnswers= true;

function startGame() {
  questioncounter=0;
  score=0;
  acceptingAnswers= true;
  getNewQuestions();
};

const getNewQuestions= ()=> {

  if(availableQuestions.length==0){
    alert("Thanks for playing")
    return;
  }
};

  questioncounter++;
  questionCounterText.innerText='$(questionCounter)'
  currentQuestion=availableQuestions[0];
  question.innerText="";

  answers.forEach(answer) => {
    answer.innerText= currentQuestion[answer.dataset["answer"]];
    
  });

  answers.forEach((answer)=>){
    answer.addEventListener("click",(e) => {
      acceptingAnswers=false;
      const clickedAnswer = e.target;
      const answerLetter= clickedAnswer.datatset["answer"];
      
      let classToApply="incorrect";

      if( answerLetter===currentQuestion.answer)
         score++;
         scoreText.innerText=score;
         classToApply="correct";
    }
    clickedAnswer.parentElement.classlist.add(classToApply)

    setTimeout(()=> {
      clickedAnswer.parentElement.classlist.remove(classToApply);
       getNewQuestion();
       acceptingAnswers=true;
    }, 1000);
    });
  });
  availableQuestions.shift();
});

startgame();
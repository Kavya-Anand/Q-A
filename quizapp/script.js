const quizDB = [
    {
        question:"Q1: Which type of JavaScript language is",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        d:"High-level",
        ans:"ans2"  
    },
    {
        question:"Q2:  In JavaScript, what is a block of statement?",
        a:"Conditional block",
        b:"both conditional block and a single statement",
        c:"block that combines a number of statements into a single compound statement",
        d:"block that contains a single statement",
        ans:"ans3"  
    },
    {
        question:"Q3: The \"function\" and \"var\" are known as:",
        a:"Declaration statements",
        b:"Data types",
        c:"Keywords",
        d:"prototypes",
        ans:"ans1"  
    },
    {
        question:"Q4:Which of the following variables takes precedence over the others if the names are the same?",
        a:"The local element",
        b:"Global variable",
        c:"Both of them",
        d:"None of these",
        ans:"ans1"  
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0; 

const loadQuestion = () => {

const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer();

  if(checkedAnswer === quizDB[questionCount].ans){
      score++;
  };

  questionCount++;

  deselectAll();

  if(questionCount < quizDB.length){
      loadQuestion(); 
  }
  else{
     showScore.innerHTML = `
     <h3> You scored ${score}/${quizDB.length} ✌️</h3>
     <button class="btn" onclick = "location.reload()">Play Again</button>
     `;
     showScore.classList.remove('scoreArea');
  }

});

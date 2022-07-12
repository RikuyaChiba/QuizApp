const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);



function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer() {

}

const questions = [
    {
        question: 'Who is a soccer player?',
        answers: [
            {text: 'Ichiro Suzuki', correct: false},
            {text: 'Michael Jordan', correct: false},
            {text: 'Lionel Messi', correct: true},
            {text: 'Kitajima Kosuke', correct: false}
        ]
    },
    {
        question: 'Is web developement fun?',
        answers: [
            {text: 'Fun', correct: true},
            {text: 'Kinda', correct: false},
            {text: 'Not Fun', correct: false},
            {text: 'IDK', correct: false}
        ]
    },
    {
        question: 'What is 4 * 2 ?',
        answers: [
            {text: '8', correct: true},
            {text: '7', correct: false},
            {text: '3', correct: false},
            {text: '6', correct: false}
        ]
    },
    {
        question: 'Who is the best apex player?',
        answers: [
            {text: 'Noted', correct: false},
            {text: 'Imperial Hal', correct: true},
            {text: 'NRG Sweet', correct: false},
            {text: 'Dropped', correct: false}
        ]
    },

]
    

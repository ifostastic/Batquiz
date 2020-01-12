const STORE = [
    //1
    {
        question: 'What year did Batman first appear in comics?',
        answers: [
            '1939',
            '1945',
            '1922',
            '1968'
        ],
        correctAnswer:'1939'
    },
    //2
    {
        question: 'What is the name of Batman\'s car?',
        answers: [
            'The Batcar',
            'The Batwhip',
            'The Batmobile',
            'The Batwheel'
        ],
        correctAnswer: 'The Batmobile'
    },
    //3
    {
        question: 'Who is Batman\'s sidekick?',
        answers: [
            'Batboy',
            'Sparrow',
            'Speedy',
            'Robin'
        ],
        correctAnswer: 'Robin'
    },
    //4
    {
        question: 'Besides fighting crime, what does Batman do for his day job?',
        answers: [
            'Reporter at the Daily Planet',
            'CEO of Wayne Enterprises',
            'Owner of Queen Industries',
            'Software developer at S.T.A.R. Labs'
        ],
        correctAnswer: 'CEO of Wayne Enterprises'
    },
    //5
    {
        question: 'Who of the following have been Batman?',
        answers: [
            'James Gordon',
            'Bruce Wayne',
            'Dick Grayson',
            'All of the above'
        ],
        correctAnswer: 'All of the above'
    },
    //6
    {
        question: 'In what year did Batman make his first movie appearance?',
        answers: [
            '1989',
            '1966',
            '2005',
            '1945'
        ],
        correctAnswer: '1966'
    },
    //7
    {
        question: 'What is the name of Bruce Wayne\'s loyal butler?',
        answers: [
            'Manfred Buttersworth',
            'Alfred Pennyworth',
            'Richard Dollarsby',
            'Alfred Pennywise'
        ],
        correctAnswer: 'Alfred Pennyworth'
    },
    //8
    {
        question: 'Which dynamic duo created Batman?',
        answers: [
            'Stan Lee & Jack Kirby',
            'Jerry Siegel & Joe Shuster',
            'Bob Kane & Bill Finger',
            'Paul Norris & Mort Weisinger'
        ],
        correctAnswer: 'Bob Kane & Bill Finger'
    }
];

let score = 0; //will hold the score 
let qNum = 0; //holds the current question number

function questionsLeft() {
    //Checks to see if we've exhausted our total questions; if not, renders the next question, if yes, displays the final score screen.
}

function incScore() {
    //Increments score by 1
}

function incQuestion() {
    //Increments qNum by 1, to be pulled by nextSlide()
}

function startQuiz() {
    //Begins a quiz by rendering the first question
}

function renderQuestion() {
    //Renders the next question with data from STORE
}

function checkAnswer() {
    //Checks the users answer against the correctAnswer 
}

function correctAnswer() {
    //Displays correct answer, calls incScore
}

function wrongAnswer() {
    //Displays correct answer, does not incScore
}

function nextQuestion() {
    //Updates question number. Runs questionsLeft
}

function finalScore() {
    //Displays results
}

function restartQuiz() {
    //Allows the user to restart the quiz
}
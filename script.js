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
        question: "What is the name of Batman's car?",
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
        question: "Who is Batman's sidekick?",
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
        question: "What is the name of Bruce Wayne's loyal butler?",
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

//Checks to see if we've exhausted our total questions; if not, renders the next question, if yes, displays the final score screen.
function questionsLeft() {
    if (qNum < STORE.length) {
        renderQuestion(qNum);
    }
    else {
        finalScore();
    }
}

function incScore() {
    score++;
    $('#score').text(score);
}

function incQuestion() {
    qNum++;
    $('#questionNum').text(qNum + 1);
}

function startQuiz() {
    $('#start').on('click', function(event){
        event.preventDefault;
        $('#questionNum').text(1);
        questionsLeft();
    }
    );
}
//Renders the next question with data from STORE
function renderQuestion(qIndex) {
    let questionRender = $(`
    <form class="question form">
        <fieldset name="start-info">
            <p id="splash-text">${STORE[qIndex].question}</p>
        </fieldset>
    </form>
    `)

    let optionsRender = $(questionRender).find('fieldset');

    STORE[qIndex].answers.forEach(function (answerValue, answerIndex) {
        $(`<span class="option"><input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>${answerValue}</span>`).appendTo(optionsRender);
    });
    $(`<button type="submit" id="submit" >Submit Answer</button>`).appendTo(optionsRender);
    $("main").html(questionRender);
}

function checkAnswer() {
    $('body').on('click', '#submit', function(event) {
        event.preventDefault();
        let userAns = $('input[name=answer]:checked').val();
        if (!userAns) {
            alert("Please pick a choice.");
            return;
        }
        let correctAns = STORE[qNum].correctAnswer;
        if (userAns === correctAns) {
            correctAnswer();   
        }
        else {
            wrongAnswer();
        }
    });
}

function correctAnswer() {
    let correctRender = $(`
    <form class="answer form">
        <fieldset name="start-info">
            <p id="right-text">Good job! That is the correct answer!</p>
            <button type="submit" id="next">Next Question</button>
        </fieldset>
    </form>
    `);
    incScore();
    $("main").html(correctRender);
}

function wrongAnswer() {
    let wrongRender = $(`
    <form class="answer form">
        <fieldset name="start-info">
            <p id="wrong-text">Sorry, that is wrong. The correct answer is:</p>
            <p id="answer-text">${STORE[qNum].correctAnswer}</p>
            <button type="submit" id="next">Next Question</button>
        </fieldset>
    </form>
    `);
    $("main").html(wrongRender);
}

function nextQuestion() {
    $('body').on('click', '#next', function(event) {
        event.preventDefault();
        incQuestion();
        questionsLeft();
    });
}

function finalScore() {
    let finalRender = $(`<form class="final form">
    <fieldset name="start-info">
        <p id="final-text">All done! Your score is ${score}/10</p>
        <button type="submit" id="restart">Restart Quiz</button>
    </fieldset>
</form>
    `)
    $('main').html(finalRender);
}

function resetStats() {
    //Resets qNum and score to default values for a restarted quiz
    score = 0;
    qNum = 0;
    $('#score').text(0);
    $('#questionNum').text(0);
}

function restartQuiz() {
    $('body').on('click', '#restart', function(event) {
        resetStats();
        questionsLeft();
    })
}

function quizTime() {
    startQuiz();
    checkAnswer();
    nextQuestion();
    restartQuiz();
}

$(quizTime);
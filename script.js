const quizData = [
    {
        question: 'How many Infinity Stones are there?',
        a: '3',
        b: '5',
        c: '6',
        d: '10',
        correct: 'c'
    }, {
        question: 'What is the only food that cannot go bad?',
        a: 'Dark chocolate',
        b: 'Peanut butter',
        c: 'Canned tuna',
        d: 'Honey',
        correct: 'd'
    }, {
        question: 'Which was René Magritte’s first surrealist painting?',
        a: 'Not to Be Reproduced',
        b: 'Personal Values',
        c: 'The Lovers',
        d: 'The Lost Jockey',
        correct: 'd'
    }, {
        question: 'What 90s boy band member bought Myspace in 2011?',
        a: 'Nick Lachey',
        b: 'Justin Timberlake',
        c: 'Shawn Stockman',
        d: 'AJ McLean',
        correct: 'b'
    }, {
        question: 'What is the most visited tourist attraction in the world?',
        a: 'Eiffel Tower',
        b: 'Statue of Liberty',
        c: 'Great Wall of China',
        d: 'Colosseum',
        correct: 'c'
    }, {
        question: 'What’s the name of Hagrid’s pet spider?',
        a: 'Nigini',
        b: 'Crookshanks',
        c: 'Aragog',
        d: 'Mosag',
        correct: 'c'
    }, {
        question: 'What’s the heaviest organ in the human body?',
        a: 'Brain',
        b: 'Liver',
        c: 'Skin',
        d: 'Heart',
        correct: 'b'
    }, {
        question: 'Who made the third most 3-pointers in the Playoffs in NBA history?',
        a: 'Kevin Durant',
        b: 'JJ Reddick',
        c: 'Lebron James',
        d: 'Kyle Korver',
        correct: 'c'
    }, {
        question: 'Which of these EU countries does not use the euro as its currency?',
        a: 'Poland',
        b: 'Denmark',
        c: 'Sweden',
        d: 'All of the above',
        correct: 'd'
    }, {
        question: 'Which US city is the sunniest major city and sees more than 320 sunny days each year?',
        a: 'Phoenix',
        b: 'Miami',
        c: 'San Francisco',
        d: 'Austin',
        correct: 'a'
    }
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

// Load the quiz
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

// Get the selected answer
function getSelected() {
    const answerEls = document.querySelectorAll('.answer');
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

// Deselect all answers
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// Listener to check to see if answer is correct on click of submit button
submitBtn.addEventListener('click', () => {
    // Check to see the answer
    const answer = getSelected();

    if (answer) {
        // If answer is correct then increment score by 1
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        // If there are still questions left in the quiz load the next question
        if (currentQuestion < quizData.length) {
            loadQuiz();
        // Otherwise show final score
        } else {
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions correctly.</h2> <button onclick="location.reload()">Try Again</button`
        }
    }
});
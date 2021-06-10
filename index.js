

const quizeData = [
    {
        qustion: 'Which one is the capital of Bangladesh?',
        a: 'Rajshahi',
        b: 'Sylhet',
        c: 'Dhaka',
        d: 'Khulna',
        correct: 'c'
    },
    {
        qustion: 'What is the most popular programming language in 2021?',
        a: 'Python',
        b: 'Java',
        c: 'C',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        qustion: 'Who invented JavaScript?',
        a: 'Jeff Bezos',
        b: 'Joe Biden',
        c: 'Tom Cruise',
        d: 'Brendan Eich',
        correct: 'd'
    },
    {
        qustion: 'What does HTML stand for?',
        a: 'Hyper Text Transfer Protocol',
        b: 'Application Programming Interface',
        c: 'Hyper Text Markup Language',
        d: 'Helicopter Turbo Motor Link',
        correct: 'c'
    }
    ,
    {
        qustion: 'What year was JavaScript launched?',
        a: '2020',
        b: '1995',
        c: '2002',
        d: 'None of the above',
        correct: 'b'
    }
]

let quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const submitBtn = document.getElementById('submit')

let answerEls = document.getElementsByName('answer')

let currentQuiz = 0;

let score = 0;



function loadQuiz() {
    deselectAll()

    const currentQuizData = quizeData[currentQuiz]

    questionEl.innerText = currentQuizData.qustion

    a.nextElementSibling.innerText = currentQuizData.a
    b.nextElementSibling.innerText = currentQuizData.b
    c.nextElementSibling.innerText = currentQuizData.c
    d.nextElementSibling.innerText = currentQuizData.d


}
loadQuiz()

function getSelected() {
    let answer = undefined

    answerEls.forEach(function (answerEl) {
        if (answerEl.checked) {

            answer = answerEl.id;
        }
    })

    return answer;
}

function deselectAll() {
    answerEls.forEach(function (answerEl) {
        answerEl.checked = false
    })
}


submitBtn.addEventListener('click', function () {
    const answers = getSelected()

    if (answers) {

        

        if (quizeData[currentQuiz].correct == answers) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizeData.length) {
            loadQuiz()
        } else {

           if(score == quizeData.length){
            quiz.innerHTML = `<h2 class="result">Congratulation! <br> You answered all the questions correctly.<br><br> Your score is ${score*10}.</h2> <button class="button" onclick="location.reload()">Reload</button>`
           }else{
            quiz.innerHTML = `<h2 class="result"> You answered correctly at ${score}/${quizeData.length} and your score is ${score*10}</h2><button class="button" onclick="location.reload()">Reload</button>`
           }
        }



    } else{
        alert('Please select an answer to see next question.')
    }

})



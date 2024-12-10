const quizQuestions = [
    {
        question: "What does a red traffic light mean?",
        options: ["Stop", "Go", "Yield", "Slow down"],
        correct: 0,
    },
    {
        question: "What is the speed limit in a school zone?",
        options: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correct: 1,
    },
    {
        question: "What should you do when approaching a stop sign?",
        options: ["Yield", "Come to a complete stop", "Slow down", "Honk"],
        correct: 1,
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersContainer = document.getElementById("answers-container");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result");
const restartButton = document.getElementById("restart-button");

function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("answer-button");
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

function selectAnswer(selectedIndex) {
    const correctIndex = quizQuestions[currentQuestionIndex].correct;
    const buttons = answersContainer.getElementsByClassName("answer-button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if (i === correctIndex) {
            buttons[i].style.backgroundColor = "green";
        } else {
            buttons[i].style.backgroundColor = "red";
        }
    }

    if (selectedIndex === correctIndex) {
        score++;
    }
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultText.textContent = `You got ${score} out of ${quizQuestions.length} correct!`;
}

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    loadQuestion();
});

loadQuestion();

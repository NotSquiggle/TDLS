// Questions and Answers
const questions = [
    {
        category: "General Driving Rules",
        question: "What is the maximum speed limit on most Tennessee interstate highways unless otherwise posted?",
        answers: ["55 mph", "65 mph", "70 mph (Correct)", "75 mph"],
        correct: 2
    },
    {
        category: "General Driving Rules",
        question: "When are you required to use your vehicle's headlights?",
        answers: ["Only at night", "During fog, rain, or snow", "From sunset to sunrise and in bad weather (Correct)", "Anytime you feel like it"],
        correct: 2
    },
    // ... Add more questions here
];

// DOM Elements
const categoryEl = document.getElementById("category");
const questionEl = document.getElementById("question");
const answersContainer = document.getElementById("answers-container");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;

// Load Question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Display category and question
    categoryEl.textContent = `Category: ${currentQuestion.category}`;
    questionEl.textContent = currentQuestion.question;

    // Display answers
    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = index;

        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));
        answersContainer.appendChild(label);

        input.addEventListener("change", () => {
            nextButton.disabled = false;
        });
    });

    // Disable the button initially
    nextButton.disabled = true;
}

// Handle Next Question
nextButton.addEventListener("click", () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    loadQuestion();
});

// Initialize the quiz
loadQuestion();

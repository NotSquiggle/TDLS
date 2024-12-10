// Question Pool
const questionCategories = {
    "General Driving Rules": [
        "What is the maximum speed limit on most Tennessee interstate highways unless otherwise posted?",
        "When are you required to use your vehicle's headlights?",
        "What does a flashing red traffic light mean?",
        "How many feet in advance should you signal before making a turn?",
        "Who has the right-of-way at a 4-way stop when two vehicles arrive at the same time?"
    ],
    "Traffic Signs and Signals": [
        "What shape and color is a warning sign?",
        "What does a yellow diamond-shaped sign with a deer symbol indicate?",
        "What does a solid yellow line on your side of the road mean?",
        "What should you do when approaching a stop sign with no white stop line on the road?",
        "What does a green arrow on a traffic light indicate?"
    ],
    "Defensive Driving": [
        "How far should you stay behind the vehicle in front of you in ideal conditions?",
        "What is the proper response if your vehicle begins to skid?",
        "When driving in foggy conditions, what type of headlights should you use?",
        "What should you do if another driver is tailgating you?",
        "Why is it important to check your blind spots before changing lanes?"
    ],
    "Alcohol and Drugs": [
        "What is the legal Blood Alcohol Concentration (BAC) limit for drivers aged 21 and older in Tennessee?",
        "What are the penalties for a first-time DUI conviction in Tennessee?",
        "How long does it take your body to process the alcohol in one standard drink?",
        "Can you refuse a breathalyzer test in Tennessee, and what happens if you do?",
        "What is the impact of mixing alcohol with prescription or over-the-counter drugs?"
    ],
    "Sharing the Road": [
        "How much space should you allow when passing a bicyclist?",
        "What should you do when approaching a school bus with flashing red lights?",
        "When is it legal to pass another vehicle on the right?",
        "What should you do if an emergency vehicle with flashing lights is approaching?",
        "What precautions should you take when driving near large trucks?"
    ],
    "Parking and Special Situations": [
        "What is the minimum distance your vehicle must be parked from a fire hydrant?",
        "Is it legal to park in front of a driveway?",
        "When is it acceptable to park on the side of the highway?",
        "What steps should you take if you are involved in an accident?",
        "What should you do if your vehicle stalls on a railroad track?"
    ]
};

// DOM Elements
const categoryEl = document.getElementById('category');
const questionEl = document.getElementById('question');
const nextButton = document.getElementById('next-button');

// Function to get a random category and question
function loadRandomQuestion() {
    // Get random category
    const categories = Object.keys(questionCategories);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    // Get random question from category
    const questions = questionCategories[randomCategory];
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    // Display category and question
    categoryEl.textContent = `Category: ${randomCategory}`;
    questionEl.textContent = randomQuestion;

    // Disable the button temporarily
    nextButton.disabled = true;

    // Enable the button after a moment
    setTimeout(() => (nextButton.disabled = false), 500);
}

// Event listener for the "Next Question" button
nextButton.addEventListener('click', () => {
    loadRandomQuestion();
});

// Load the first random question when the page loads
loadRandomQuestion();

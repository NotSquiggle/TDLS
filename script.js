// Full Questions and Answers
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
    {
        category: "General Driving Rules",
        question: "What does a flashing red traffic light mean?",
        answers: ["Stop, then proceed when safe (Correct)", "Slow down and yield", "Proceed with caution", "It’s malfunctioning"],
        correct: 0
    },
    {
        category: "General Driving Rules",
        question: "How many feet in advance should you signal before making a turn?",
        answers: ["25 feet", "50 feet", "100 feet (Correct)", "200 feet"],
        correct: 2
    },
    {
        category: "General Driving Rules",
        question: "Who has the right-of-way at a 4-way stop when two vehicles arrive at the same time?",
        answers: ["The vehicle on the right (Correct)", "The vehicle on the left", "The larger vehicle", "The vehicle going straight"],
        correct: 0
    },
    {
        category: "Traffic Signs and Signals",
        question: "What shape and color is a warning sign?",
        answers: ["Circular and red", "Diamond-shaped and yellow (Correct)", "Rectangular and green", "Octagonal and orange"],
        correct: 1
    },
    {
        category: "Traffic Signs and Signals",
        question: "What does a yellow diamond-shaped sign with a deer symbol indicate?",
        answers: ["Deer are forbidden in the area", "A zoo is nearby", "Deer crossing area ahead (Correct)", "Slippery road ahead"],
        correct: 2
    },
    {
        category: "Traffic Signs and Signals",
        question: "What does a solid yellow line on your side of the road mean?",
        answers: ["You can pass at any time", "Passing is allowed with caution", "Passing is not allowed (Correct)", "Only trucks may pass"],
        correct: 2
    },
    {
        category: "Traffic Signs and Signals",
        question: "What should you do when approaching a stop sign with no white stop line on the road?",
        answers: ["Stop where the stop sign is located", "Stop at the edge of the intersection (Correct)", "Roll through if no vehicles are present", "Only slow down"],
        correct: 1
    },
    {
        category: "Traffic Signs and Signals",
        question: "What does a green arrow on a traffic light indicate?",
        answers: ["Yield to all traffic before turning", "You must stop before proceeding", "Proceed in the direction of the arrow (Correct)", "Wait for the green light"],
        correct: 2
    },
    {
        category: "Defensive Driving",
        question: "How far should you stay behind the vehicle in front of you in ideal conditions?",
        answers: ["1 second", "2-3 seconds (Correct)", "4-5 seconds", "10 feet"],
        correct: 1
    },
    {
        category: "Defensive Driving",
        question: "What is the proper response if your vehicle begins to skid?",
        answers: ["Slam on the brakes", "Turn the wheel sharply in the opposite direction", "Steer in the direction of the skid (Correct)", "Accelerate to regain traction"],
        correct: 2
    },
    {
        category: "Defensive Driving",
        question: "When driving in foggy conditions, what type of headlights should you use?",
        answers: ["High beams", "Low beams (Correct)", "Hazard lights", "No headlights"],
        correct: 1
    },
    {
        category: "Defensive Driving",
        question: "What should you do if another driver is tailgating you?",
        answers: ["Brake suddenly", "Increase your speed", "Move to another lane when safe (Correct)", "Ignore them"],
        correct: 2
    },
    {
        category: "Defensive Driving",
        question: "Why is it important to check your blind spots before changing lanes?",
        answers: ["Mirrors show all areas clearly", "Blind spots only matter for large vehicles", "To see vehicles or objects not visible in mirrors (Correct)", "To check for traffic signals"],
        correct: 2
    },
    {
        category: "Alcohol and Drugs",
        question: "What is the legal Blood Alcohol Concentration (BAC) limit for drivers aged 21 and older in Tennessee?",
        answers: ["0.02%", "0.05%", "0.08% (Correct)", "0.10%"],
        correct: 2
    },
    {
        category: "Alcohol and Drugs",
        question: "What are the penalties for a first-time DUI conviction in Tennessee?",
        answers: ["A small fine and no license suspension", "Up to 48 hours in jail and license suspension (Correct)", "Permanent loss of license", "Only a warning"],
        correct: 1
    },
    {
        category: "Alcohol and Drugs",
        question: "How long does it take your body to process the alcohol in one standard drink?",
        answers: ["15 minutes", "1 hour (Correct)", "2 hours", "30 minutes"],
        correct: 1
    },
    {
        category: "Alcohol and Drugs",
        question: "Can you refuse a breathalyzer test in Tennessee, and what happens if you do?",
        answers: ["Yes, and there are no consequences", "Yes, but your license will be suspended (Correct)", "No, refusal is not allowed", "Yes, but you’ll receive a warning"],
        correct: 1
    },
    {
        category: "Alcohol and Drugs",
        question: "What is the impact of mixing alcohol with prescription or over-the-counter drugs?",
        answers: ["There is no effect", "It enhances driving ability", "It can be dangerous and impair your ability to drive (Correct)", "It reduces alcohol's effect"],
        correct: 2
    },
    {
        category: "Sharing the Road",
        question: "How much space should you allow when passing a bicyclist?",
        answers: ["1 foot", "3 feet (Correct)", "5 feet", "No minimum requirement"],
        correct: 1
    },
    {
        category: "Sharing the Road",
        question: "What should you do when approaching a school bus with flashing red lights?",
        answers: ["Slow down but do not stop", "Stop only if you are traveling behind it", "Stop and remain stopped until the lights stop flashing (Correct)", "Pass carefully if no children are visible"],
        correct: 2
    },
    {
        category: "Sharing the Road",
        question: "When is it legal to pass another vehicle on the right?",
        answers: ["When the vehicle is turning left (Correct)", "When the vehicle is going too slow", "Anytime on the highway", "Never"],
        correct: 0
    },
    {
        category: "Sharing the Road",
        question: "What should you do if an emergency vehicle with flashing lights is approaching?",
        answers: ["Continue driving at your current speed", "Pull to the right and stop (Correct)", "Speed up to get out of the way", "Ignore it"],
        correct: 1
    },
    {
        category: "Sharing the Road",
        question: "What precautions should you take when driving near large trucks?",
        answers: ["Avoid driving in their blind spots (Correct)", "Follow closely for drafting", "Pass as quickly as possible without signaling", "Drive beside them for better visibility"],
        correct: 0
    },
    {
        category: "Parking and Special Situations",
        question: "What is the minimum distance your vehicle must be parked from a fire hydrant?",
        answers: ["5 feet", "10 feet", "15 feet (Correct)", "20 feet"],
        correct: 2
    },
    {
        category: "Parking and Special Situations",
        question: "Is it legal to park in front of a driveway?",
        answers: ["Yes, if no one complains", "Yes, during the daytime", "No, it is never legal (Correct)", "Only if you’re in your own driveway"],
        correct: 2
    },
    {
        category: "Parking and Special Situations",
        question: "When is it acceptable to park on the side of the highway?",
        answers: ["Anytime", "Only in an emergency (Correct)", "During heavy traffic", "Never"],
        correct: 1
    },
    {
        category: "Parking and Special Situations",
        question: "What steps should you take if you are involved in an accident?",
        answers: ["Exchange information and leave the scene", "Call 911, remain at the scene, and exchange information (Correct)", "Leave if no one is injured", "Take photos and leave"],
        correct: 1
    },
    {
        category: "Parking and Special Situations",
        question: "What should you do if your vehicle stalls on a railroad track?",
        answers: ["Stay in the car and call for help", "Try to restart the car immediately", "Exit the vehicle and move away from the tracks (Correct)", "Wave at the train to stop"],
        correct: 2
    }
];

// DOM Elements
const categoryEl = document.getElementById("category");
const questionEl = document.getElementById("question");
const answersContainer = document.getElementById("answers-container");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;

// Function to Load a Question
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

    nextButton.disabled = true;
}

// Next Question Handler
nextButton.addEventListener("click", () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    loadQuestion();
});

// Initialize
loadQuestion();

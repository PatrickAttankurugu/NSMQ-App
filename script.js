// script.js
const questions = [
    { question: "What is the chemical symbol for water?", answer: "h2o" },
    { question: "What is the value of pi to 2 decimal places?", answer: "3.14" },
    { question: "What planet is known as the red planet?", answer: "mars" },
    { question: "What is the powerhouse of the cell?", answer: "mitochondria" },
    { question: "What is the speed of light in m/s?", answer: "299792458" }
];

let currentQuestionIndex = -1;

function startQuiz() {
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('question').innerText = "Loading question...";
    askQuestion();
}

function askQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    const questionText = questions[currentQuestionIndex].question;
    document.getElementById('question').innerText = questionText;
    speak(questionText);
}

function submitAnswer() {
    showPopup();
}

function showPopup() {
    document.getElementById('answer-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('answer-popup').style.display = 'none';
}

function processAnswer() {
    const userAnswer = document.getElementById('popup-answer').value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById('response').innerText = "Correct! You have been awarded 10 points.";
        speak("Correct! You have been awarded 10 points.");
    } else {
        document.getElementById('response').innerText = `Incorrect. The correct answer is ${correctAnswer}.`;
        speak(`Incorrect. The correct answer is ${correctAnswer}.`);
    }
    closePopup();
    document.getElementById('popup-answer').value = "";
}

function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.voice = speechSynthesis.getVoices().find(voice => voice.name.includes("Female"));
    window.speechSynthesis.speak(msg);
}

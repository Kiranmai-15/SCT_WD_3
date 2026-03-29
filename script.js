function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}
const quiz = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "Which is a programming language?",
        options: ["HTML", "CSS", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "4-9-7+6" = ?",
        options: ["-6", "-8", "10"],
        answer: "-6"
        
    },
    { 
        question:"What is the natural hardest substance on earth?",
        options:["Diamond","Gold","Silver"],
        answer:"Diamond"
    },
    
];

let index = 0;
let score = 0;
let selectedBtn = null;

const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", nextQuestion);

function loadQuestion() {
    const q = quiz[index];
    document.getElementById("question").innerText = q.question;

    let optionsHTML = "";
    q.options.forEach(opt => {
        optionsHTML += `<button onclick="selectAnswer(this, '${opt}')">${opt}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;

    updateProgress();
}

function selectAnswer(btn, ans) {
    if (selectedBtn) selectedBtn.classList.remove("selected");
    btn.classList.add("selected");
    selectedBtn = btn;
    selectedBtn.value = ans;
}

function nextQuestion() {
    if (selectedBtn && selectedBtn.value === quiz[index].answer) {
        score++;
    }

    index++;
    selectedBtn = null;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "🎉 Quiz Completed!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = "Your Score: " + score + "/" + quiz.length;
        document.getElementById("progress-bar").style.width = "100%";
    }
}

function updateProgress() {
    let progress = (index / quiz.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

loadQuestion();

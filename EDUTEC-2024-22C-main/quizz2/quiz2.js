const questions = [
    
    {
        text: "Para a função y = −2x² + 4x + 1, qual é a coordenada y do vértice?",
        options: [
            { text: "1", correct: false },
            { text: "3", correct: true },
            { text: "-1", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        text: "Qual é a forma padrão da equação de uma função do 2º grau?",
        options: [
            { text: "y = ax + b", correct: false },
            { text: "y = ax³ + bx² + c", correct: false },
            { text: "y = a(x − h)² + k", correct: false },
            { text: "y = ax² + bx + c", correct: true }
        ]
    },
    {
        text: "Determine o eixo de simetria da função f(x) = −x² + 6x − 8",
        options: [
            { text: "X = 3", correct: true },
            { text: "X = -3", correct: false },
            { text: "X = 2", correct: false },
            { text: "X = -2", correct: false }
        ]
    },
    {
        text: "Qual é o vértice da parábola representada pela função f(x) = 2x² −8x + 6?",
        options: [
            { text: "X = (12, -5)", correct: false },
            { text: "X = (-16, 7)", correct: false },
            { text: "X = (4, 8)", correct: false },
            { text: "X = (2, -2)", correct: true }
        ]
    },
    {
        text: "A função f(x) = x² −2x −3 tem um mínimo local em:",
        options: [
            { text: "X = 1", correct: true },
            { text: "X = 10", correct: false },
            { text: "X = 5", correct: false },
            { text: "X = -7", correct: false }
        ]
    },
    {
        text: "Encontre o discriminante da função f(x) = x² −6x + 9",
        options: [
            { text: "X = -1", correct: false },
            { text: "X = 0", correct: true },
            { text: "X = 10", correct: false },
            { text: "X = 8", correct: false }
        ]
    },
    {
        text: "Qual o valor de X em f(x) = 2x² −8x + 6 onde a função atinge seu mínimo?",
        options: [
            { text: "X = -8", correct: false },
            { text: "X = 5", correct: false },
            { text: "X = 2", correct: true },
            { text: "X = 3", correct: false }
        ]
    },
    {
        text: "A função f(x) = −x² + 4x − 3 intercepta o eixo Y em qual ponto?",
        options: [
            { text: "X = (20, 10)", correct: false },
            { text: "X = (0, -3)", correct: true },
            { text: "X = (-5, 10)", correct: false },
            { text: "X = (45, 11)", correct: false }
        ]
    },
    {
        text: "A função f(x) = −x² + 6x + 2 tem seu valor máximo em qual ponto?",
        options: [
            { text: "X = (3, 11)", correct: true },
            { text: "X = (5, 4)", correct: false },
            { text: "X = (-3, -7)", correct: false },
            { text: "X = (8, 5)", correct: false }
        ]
    },
    {
        text: "Qual é o discriminante da função f(x) = 4x² −4x + 1?",
        options: [
            { text: "X = 4", correct: false },
            { text: "X = -11", correct: false },
            { text: "X = -5", correct: false },
            { text: "X = 0", correct: true }
        ]
    }

];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-number').innerText = `Questão ${currentQuestionIndex + 1} / ${questions.length}`;
    document.getElementById('question-text').innerText = question.text;

    const optionsContainer = document.querySelector('.options');
    optionsContainer.innerHTML = ''; // Limpa as opções anteriores

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.innerHTML = `<strong>${option.text}</strong>`;
        button.dataset.correct = option.correct;
        button.addEventListener('click', selectOption);
        optionsContainer.appendChild(button);
    });

    // Desabilita o botão "PRÓXIMA" inicialmente
    document.getElementById('next-button').disabled = true;
}

function selectOption(event) {
    const selectedButton = event.target.closest('button');
    const correct = selectedButton.dataset.correct === 'true';

    if (correct) {
        correctAnswers++;
    }

    document.querySelectorAll('.option').forEach(button => {
        button.classList.add(button.dataset.correct === 'true' ? 'correct' : 'incorrect');
        button.disabled = true;
    });

    
    document.getElementById('next-button').disabled = false;
}

document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        localStorage.setItem('correctAnswers', correctAnswers);
        window.location.href = '../resultado2/resultado2.html'; 
    }
});


loadQuestion();







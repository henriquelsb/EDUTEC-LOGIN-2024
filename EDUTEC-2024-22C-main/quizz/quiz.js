const questions = [
    {
        text: "Encontre o valor de f(x) = x² + 3x – 10 para que f(x) = 0",
        options: [
            { text: "X1 = 2 / X2 = -5", correct: true },
            { text: "X1 = -8 / X2 = 9", correct: false },
            { text: "X1 = 3 / X2 = 7", correct: false },
            { text: "X1 = 11 / X2 = 4", correct: false }
        
        ]
    },

        {
            
            text: "O conjunto solução que torna equação x² + 5x –14 = 0 verdadeira é:",
            options: [
                { text: "S = {1,7}", correct: false },
                { text: "S = {3,4}", correct: false },
                { text: "S = {2,-7}", correct: true },
                { text: "S = {8,3}", correct: false }
            ]
        
    },

    {
        text: "Encontre as raízes da seguinte equação quadrática: 2x² + 3x -5 = 0",
        options: [
            { text: "X1 = 4 / X2 = 8", correct: false },
            { text: "X1 = 1 / X2 = -2,5", correct: true },
            { text: "X1 = 10 / X2 = 5", correct: false },
            { text: "X1 = 15 / X2 = 2", correct: false }
        ]
    },
    {
        text: "Determine os valores de X para a equação: 3x² − 12x + 9 = 0",
        options: [
            { text: "X1 = 5 / X2 = 25", correct: false },
            { text: "X1 = 10 / X2 = -2", correct: false },
            { text: "X1 = 12 / X2 = -17", correct: false },
            { text: "X1 = 3 / X2 = 1", correct: true }
        ]
    },
    {
        text: "Determine os valores de X1 e X2 para a equação abaixo: 4x² −4x −8 = 0",
        options: [
            { text: "X1 = 10 / X2 = -0,25", correct: false },
            { text: "X1 = -15 / X2 = 8", correct: false },
            { text: "X1 = 2 / X2 = -1", correct: true },
            { text: "X1 = -9 / X2 = 12", correct: false }
        ]
    },
    {
        text: "Encontre as raízes X1 e X2 da equação: x² −9x + 20 = 0",
        options: [
            { text: "X1 = 0,5 / X2 = -0,15", correct: false },
            { text: "X1 = 5 / X2 = 4", correct: true },
            { text: "X1 = 10 / X2 = 8", correct: false },
            { text: "X1 = -5 / X2 = 16", correct: false }
        ]
    },
    {
        text: "Determine X1 e X2 para a equação quadrática: 5x² + 10x + 5 = 0",
        options: [
            { text: "X1 = 8 / X2 = 5", correct: false },
            { text: "X1 = -17 / X2 = 3", correct: false },
            { text: "X1 = -30 / X2 = -9", correct: false },
            { text: "X1 = -1 / X2 = -1", correct: true }
        ]
    },
    {
        text: "Calcule X1 e X2 para a equação quadrática: x² −5x −6 = 0",
        options: [
            { text: "X1 = 6 / X2 = -1", correct: true },
            { text: "X1 = 10 / X2 = 10", correct: false },
            { text: "X1 = 8 / X2 = -22", correct: false },
            { text: "X1 = -5 / X2 = 0", correct: false }
        ]
    },
    {
        text: "Determine os valores de X1 e X2 para a equação: 4x² + 12x + 9 = 0",
        options: [
            { text: "X1 = 10 / X2 = 12", correct: false },
            { text: "X1 = -1,5 / X2 = -1,5", correct: true },
            { text: "X1 = -24 / X2 = 2", correct: false },
            { text: "X1 = 8 / X2 = 1", correct: false }
        ]
    },

    {
        text: "Resolva a seguinte equação  x² −5x + 6 = 0  e encontre as raízes X1 e X2:",
        options: [
            { text: "X1 = 7 / X2 = 10", correct: false },
            { text: "X1 = -0,25 / X2 = -0,25", correct: false },
            { text: "X1 = 3 / X2 = 2", correct: true },
            { text: "X1 = 12 / X2 = -1", correct: false }
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
        window.location.href = '../resultado/resultado.html'; 
    }
});


loadQuestion();

document.addEventListener('DOMContentLoaded', () => {
    const correctAnswers = localStorage.getItem('correctAnswers');
    const totalQuestions = 10;
    const percentage = (correctAnswers / totalQuestions) * 100;

    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('score').textContent = `VOCÊ ACERTOU ${correctAnswers}/${totalQuestions}`;
});

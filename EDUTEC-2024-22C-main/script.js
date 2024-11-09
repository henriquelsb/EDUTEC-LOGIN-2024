
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('logo').src = './imagens/logo_modo_noturno.svg';
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const logo = document.getElementById('logo');
    if (document.body.classList.contains('dark-mode')) {
        logo.src = './imagens/logo_modo_noturno.svg';
        localStorage.setItem('dark-mode', 'true');
    } else {
        logo.src = './imagens/logo.svg';
        localStorage.setItem('dark-mode', 'false');
    }
});

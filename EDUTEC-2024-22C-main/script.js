if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('logo').src = './imagens/logo_modo_noturno.svg';
    document.querySelector('.login').src = './imagens/login_modo_noturno.png';
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const logo = document.getElementById('logo');
    const loginButton = document.querySelector('.login');
    if (document.body.classList.contains('dark-mode')) {
        logo.src = './imagens/logo_modo_noturno.svg';
        loginButton.src = './imagens/login_modo_noturno.png';
        localStorage.setItem('dark-mode', 'true');
    } else {
        logo.src = './imagens/logo.svg';
        loginButton.src = './imagens/login.png';
        localStorage.setItem('dark-mode', 'false');
    }
});

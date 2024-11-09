document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const logo = document.getElementById('logo');

    // Verifica se o modo noturno está salvo no localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.src = "../../imagens/icone_lua.svg";
        themeToggle.alt = "Lua";
        logo.src = "../../imagens/logo_modo_noturno.svg";
    } else {
        body.classList.add('light-theme');
        themeToggle.src = "../../imagens/icone_sol.svg";
        themeToggle.alt = "Sol";
        logo.src = "../../imagens/logo.svg";
    }

    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggle.src = "../../imagens/icone_lua.svg";
            themeToggle.alt = "Lua";
            logo.src = "../../imagens/logo_modo_noturno.svg";
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggle.src = "../../imagens/icone_sol.svg";
            themeToggle.alt = "Sol";
            logo.src = "../../imagens/logo.svg";
            localStorage.setItem('theme', 'light');
        }
    });
});

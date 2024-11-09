document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const logo = document.getElementById('logo');
    const setas = document.querySelectorAll('.seta img');

    
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
        themeToggle.src = '../imagens/icone_lua.svg';
        themeToggle.alt = 'Lua';
        logo.src = '../imagens/logo_modo_noturno.svg';
        setas.forEach(seta => {
            seta.src = '../imagens/seta_modo_noturno.png';
        });
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        
        localStorage.setItem('dark-mode', isDarkMode);

        if (isDarkMode) {
            themeToggle.src = '../imagens/icone_lua.svg';
            themeToggle.alt = 'Lua';
            logo.src = '../imagens/logo_modo_noturno.svg';
            setas.forEach(seta => {
                seta.src = '../imagens/seta_modo_noturno.png';
            });
        } else {
            themeToggle.src = '../imagens/icone_sol.svg'; 
            themeToggle.alt = 'Sol';
            logo.src = '../imagens/logo.svg';
            setas.forEach(seta => {
                seta.src = '../imagens/seta.png';
            });
        }
    });
});

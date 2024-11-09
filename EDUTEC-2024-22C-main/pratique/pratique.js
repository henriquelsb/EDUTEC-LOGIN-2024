document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
        themeToggle.src = '../imagens/icone_lua.svg';
        themeToggle.alt = 'Lua';
        document.querySelector('.logo').src = '../imagens/logo_modo_noturno.svg';
        document.querySelector('.img-fb').src = '../imagens/imagem_delta_mn.svg';
        document.querySelector('.img-fq').src = '../imagens/imagem_funcao_quadrática_mn.svg';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        localStorage.setItem('dark-mode', isDarkMode);

        if (isDarkMode) {
            themeToggle.src = '../imagens/icone_lua.svg';
            themeToggle.alt = 'Lua';
            document.querySelector('.logo').src = '../imagens/logo_modo_noturno.svg';
            document.querySelector('.img-fb').src = '../imagens/imagem_delta_mn.svg'
             document.querySelector('.img-fq').src = '../imagens/imagem_funcao_quadrática_mn.svg'
        } else {
            themeToggle.src = '../imagens/icone_sol.svg';
            themeToggle.alt = 'Sol';
            document.querySelector('.logo').src = '../imagens/logo.svg';
            document.querySelector('.img-fb').src = '../imagens/imagem_delta.svg';
            document.querySelector('.img-fq').src = '../imagens/imagem_funcao_quadrática.svg';
        }
    });
});

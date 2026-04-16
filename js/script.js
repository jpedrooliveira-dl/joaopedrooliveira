document.addEventListener('DOMContentLoaded', () => {
    // Efeito de digitação
    const titulo = document.querySelector('#typing-effect');
    if (titulo) {
        const textoOriginal = titulo.innerText;
        titulo.innerHTML = '';
        let i = 0;
        const velocidadeDigitacao = 100;
        
        const nomeDestacado = "João Pedro";
        const inicioDestaque = textoOriginal.indexOf(nomeDestacado);

        function typeWriter() {
            if (i < textoOriginal.length) {
                if (inicioDestaque !== -1 && i >= inicioDestaque) {
                    const textoAntes = textoOriginal.substring(0, inicioDestaque);
                    const textoDestacado = textoOriginal.substring(inicioDestaque, i + 1);
                    titulo.innerHTML = textoAntes + '<span class="highlight">' + textoDestacado + '</span>';
                } else {
                    titulo.innerHTML = textoOriginal.substring(0, i + 1);
                }
                
                i++;
                setTimeout(typeWriter, velocidadeDigitacao);
            }
        }
        typeWriter();
    }

    // Lógica para alternar Tema Claro/Escuro
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Checa preferência salva no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'light') {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateThemeIcon('dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                updateThemeIcon('light');
            }
        });
    }

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            // Ícone de Lua
            themeIcon.className = 'fas fa-moon'
        } else {
            // Ícone de Sol
            themeIcon.className = 'fas fa-sun'
        }
    }

    // Fecha o menu ao clicar em um link
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) {
                menuToggle.checked = false;
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');

    // Cria o observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Opcional: remover o observador após a animação acontecer 1 vez
                // observer.unobserve(entry.target);
            }
        });
    }, {
        // A animação dispara quando 15% do item aparecer na tela
        threshold: 0.15
    });

    // Diz ao observador para ficar de olho em cada elemento escondido
    hiddenElements.forEach((el) => observer.observe(el));
});
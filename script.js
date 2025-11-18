document.addEventListener('DOMContentLoaded', () => {
    // Efeito de digitação
    const titulo = document.querySelector('#typing-effect');
    if (titulo) {
        const textoOriginal = titulo.innerText;
        titulo.innerText = '';
        let i = 0;
        const velocidadeDigitação = 100;

        function typeWriter() {
            if (i < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(typeWriter, velocidadeDigitação);
            }
        }
        typeWriter();
    }

    // Efeito de hover na imagem do WhatsApp
    const imagem = document.getElementById('minhaImagem');
    if (imagem) {
        const novaUrl = './img/whatsapp-ciano.png';
        const imgUrlOriginal = './img/whatsapp-preto.png';

        imagem.addEventListener('mouseover', () => {
            imagem.src = novaUrl;
        });

        imagem.addEventListener('mouseout', () => {
            imagem.src = imgUrlOriginal;
        });
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
});
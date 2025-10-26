document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('#typing-effect')
    const textoOriginal = titulo.innerText
    titulo.innerText = ''

    let i = 0
    const velocidadeDigitação = 100

    function typeWriter() {
        if(i < textoOriginal.length) {
            titulo.textContent += textoOriginal.charAt(i)
            i++
            setTimeout(typeWriter, velocidadeDigitação)
        } else {    

        }
    }

    typeWriter()
})
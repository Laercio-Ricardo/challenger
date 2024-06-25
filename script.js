document.addEventListener('DOMContentLoaded', function() {
    const textoOriginal = document.querySelector('#textoOriginal');
    const textoCriptografado = document.querySelector('#textoCriptografado');
    const imagemAviso = document.querySelector('#imagemAviso');
    const textoAviso = document.querySelector('#textoAviso');

    textoOriginal.addEventListener('input', function() {
        if (textoOriginal.value.trim() === '') {
            imagemAviso.style.display = 'block';
            textoAviso.style.display = 'block';
        } else {
            imagemAviso.style.display = 'none';
            textoAviso.style.display = 'none';
        }
    });

    function criptografar() {
        let texto = textoOriginal.value.toLowerCase();
        if (!/^[a-z\s]*$/.test(texto)) {
            alert('Apenas letras minúsculas e sem caracteres especiais são permitidas.');
            return;
        }
        texto = texto.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        textoCriptografado.value = texto;
    }

    function descriptografar() {
        let texto = textoOriginal.value.toLowerCase();
        if (!/^[a-z\s]*$/.test(texto)) {
            alert('Apenas letras minúsculas e sem caracteres especiais são permitidas.');
            return;
        }
        texto = texto.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        textoCriptografado.value = texto;
    }

    function copiarTexto() {
        textoCriptografado.select();
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência.');
    }

    window.criptografar = criptografar;
    window.descriptografar = descriptografar;
    window.copiarTexto = copiarTexto;
});

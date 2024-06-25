document.addEventListener('DOMContentLoaded', function() {
    const textoOriginal = document.querySelector('#textoOriginal');
    const textoCriptografado = document.querySelector('#textoCriptografado');
    const imagemAviso = document.querySelector('#imagemAviso');
    const textoAviso = document.querySelector('#textoAviso');
    const mensagemErro = document.querySelector('#mensagemErro');

    textoOriginal.addEventListener('input', function() {
        if (textoOriginal.value.trim() === '') {
            imagemAviso.style.display = 'block';
            textoAviso.style.display = 'block';
            mensagemErro.textContent = ''; // Limpa mensagem de erro
        } else {
            imagemAviso.style.display = 'none';
            textoAviso.style.display = 'none';
            validarTexto(); // Chama a função para validar o texto
        }
    });

    function validarTexto() {
        let texto = textoOriginal.value.trim(); // Remove espaços em branco no início e fim
        if (!/^[a-z\s]*$/.test(texto)) {
            mostrarErro('Apenas letras minúsculas e espaços são permitidos.');
        } else {
            mensagemErro.textContent = ''; // Limpa mensagem de erro se estiver válida
        }
    }

    function criptografar() {
        let texto = textoOriginal.value.trim().toLowerCase(); // Converte para minúsculas e remove espaços em branco no início e fim
        // Verifica se o texto contém apenas letras minúsculas e espaços
        if (!/^[a-z\s]*$/.test(texto)) {
            mostrarErro('Apenas letras minúsculas e espaços são permitidos.');
            return;
        }
        mensagemErro.textContent = ''; // Limpa mensagem de erro
        texto = texto.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        textoCriptografado.value = texto;
    }

    function descriptografar() {
        let texto = textoOriginal.value.trim().toLowerCase(); // Converte para minúsculas e remove espaços em branco no início e fim
        // Verifica se o texto contém apenas palavras criptografadas
        if (!/^(enter|imes|ai|ober|ufat|\s)*$/.test(texto)) {
            mostrarErro('Apenas palavras criptografadas são permitidas.');
            return;
        }
        mensagemErro.textContent = ''; // Limpa mensagem de erro
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
        Swal.fire({
            icon: 'success',
            title: 'Texto copiado!',
            showConfirmButton: false,
            timer: 1500
        });
        textoCriptografado.setSelectionRange(0, 0); // Remove a seleção de texto
    }

    function mostrarErro(mensagem) {
        mensagemErro.textContent = mensagem; // Exibe mensagem de erro
    }

    window.criptografar = criptografar;
    window.descriptografar = descriptografar;
    window.copiarTexto = copiarTexto;
});

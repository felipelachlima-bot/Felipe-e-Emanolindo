// Aguarda o documento carregar
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mensagem-form');
    const muralContainer = document.getElementById('mural-container');

    // Manipula o envio do formulário do Mural da Empatia
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const autorInput = document.getElementById('autor-input');
        const textoInput = document.getElementById('texto-input');

        const autor = autorInput.value.trim() || 'Anônimo';
        const texto = textoInput.value.trim();

        if (texto !== '') {
            // Cria um novo elemento de postagem
            const novoPost = document.createElement('div');
            novoPost.classList.add('post');

            novoPost.innerHTML = `
                <p class="post-texto">"${texto}"</p>
                <span class="post-autor">— ${autor}</span>
            `;

            // Adiciona o novo post no topo do mural
            muralContainer.prepend(novoPost);

            // Limpa os campos do formulário
            autorInput.value = '';
            textoInput.value = '';
        }
    });
});
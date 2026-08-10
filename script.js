document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidade do Modo Escuro
    const themeBtn = document.getElementById('toggle-theme');
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeBtn.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
        });
    }

    // 2. Mural de Mensagens
    const form = document.getElementById('mensagem-form');
    const muralContainer = document.getElementById('mural-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const autorInput = document.getElementById('autor-input');
        const textoInput = document.getElementById('texto-input');

        const autor = autorInput.value.trim() || 'Anônimo';
        const texto = textoInput.value.trim();

        if (texto !== '') {
            const novoPost = document.createElement('div');
            novoPost.classList.add('post');

            novoPost.innerHTML = `
                <p class="post-texto">"${texto}"</p>
                <span class="post-autor">— ${autor}</span>
            `;

            muralContainer.prepend(novoPost);

            autorInput.value = '';
            textoInput.value = '';
        }
    });
});
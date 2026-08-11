document.addEventListener('DOMContentLoaded', () => {

    // 1. MODALIDADE TEMA ESCURO / CLARO
    const btnTheme = document.getElementById('btn-theme');
    const themeIcon = document.querySelector('.theme-icon');

    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeIcon.textContent = isDark ? '☀️' : '🌙';
    });

    // 2. CONTROLE DE TAMANHO DE FONTE (ACESSIBILIDADE)
    let currentFontSize = 16; // em px
    const minFont = 12;
    const maxFont = 22;

    const btnDecrease = document.getElementById('btn-decrease-font');
    const btnReset = document.getElementById('btn-reset-font');
    const btnIncrease = document.getElementById('btn-increase-font');

    btnIncrease.addEventListener('click', () => {
        if (currentFontSize < maxFont) {
            currentFontSize += 2;
            document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
        }
    });

    btnDecrease.addEventListener('click', () => {
        if (currentFontSize > minFont) {
            currentFontSize -= 2;
            document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
        }
    });

    btnReset.addEventListener('click', () => {
        currentFontSize = 16;
        document.documentElement.style.setProperty('--base-font-size', '16px');
    });

    // 3. ASSISTENTE VIRTUAL IA
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-user-input');
    const chatBox = document.getElementById('chat-box');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        // Renderiza mensagem do usuário
        appendMessage('Você', text, 'user-msg');
        chatInput.value = '';

        // Simula resposta da IA com delay de digitação
        setTimeout(() => {
            const aiReply = generateAIResponse(text.toLowerCase());
            appendMessage('Assistente IA', aiReply, 'bot-msg');
        }, 500);
    });

    function appendMessage(author, message, className) {
        const msgElement = document.createElement('div');
        msgElement.classList.add('chat-msg', className);
        msgElement.innerHTML = `<span class="chat-author">${author}</span><p>${message}</p>`;
        chatBox.appendChild(msgElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function generateAIResponse(input) {
        if (input.includes('bullying') || input.includes('provocacao')) {
            return "O bullying não deve ser tolerado. Guardar para si só aumenta o peso. Converse com o orientador pedagógico da sua escola ou denuncie no canal de apoio da instituição.";
        } else if (input.includes('estudo') || input.includes('nota') || input.includes('foco')) {
            return "Uma dica prática: divida suas tarefas em blocos de 25 minutos de estudo ativo e 5 minutos de pausa (Técnica Pomodoro). Isso alivia a sobrecarga!";
        } else if (input.includes('ansiedade') || input.includes('medo') || input.includes('triste')) {
            return "Sentir-se sobrecarregado é humano. Lembre-se de dar uma pausa, respirar profundamente e buscar alguém de confiança para conversar. O CVV atende no número 188 se precisar de escuta.";
        } else if (input.includes('oi') || input.includes('ola')) {
            return "Olá! Como posso apoiar você hoje na sua jornada escolar?";
        } else {
            return "Entendi seu ponto. Lembre-se que este portal foi feito para ser um espaço de escuta e segurança. Como mais posso te ajudar?";
        }
    }

    // 4. MURAL DA EMPATIA
    const muralForm = document.getElementById('mural-form');
    const muralList = document.getElementById('mural-list');

    muralForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nomeInput = document.getElementById('mural-nome');
        const textoInput = document.getElementById('mural-texto');

        const nome = nomeInput.value.trim() || 'Anônimo';
        const texto = textoInput.value.trim();

        if (texto) {
            const newPost = document.createElement('div');
            newPost.classList.add('mural-item');
            newPost.innerHTML = `
                <p class="mural-text">"${texto}"</p>
                <span class="mural-author">— ${nome}</span>
            `;

            muralList.prepend(newPost);
            nomeInput.value = '';
            textoInput.value = '';
        }
    });

});
document.addEventListener('DOMContentLoaded', () => {

    // 1. TEMA DARK/LIGHT
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // 2. AUMENTO DE FONTE
    let fontSize = 16;
    const root = document.documentElement;

    document.getElementById('font-up').addEventListener('click', () => {
        if (fontSize < 24) { fontSize += 2; root.style.setProperty('--font-base', fontSize + 'px'); }
    });

    document.getElementById('font-down').addEventListener('click', () => {
        if (fontSize > 12) { fontSize -= 2; root.style.setProperty('--font-base', fontSize + 'px'); }
    });

    // 3. CHAT IA (SIMULAÇÃO)
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatOutput = document.getElementById('chat-output');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = chatInput.value.trim();
        if (!msg) return;

        // Adiciona msg do usuário
        addMessage(msg, 'user');
        chatInput.value = '';

        // Resposta da IA
        setTimeout(() => {
            const reply = getAIResponse(msg.toLowerCase());
            addMessage(reply, 'bot');
        }, 600);
    });

    function addMessage(text, side) {
        const div = document.createElement('div');
        div.className = `msg ${side}`;
        div.textContent = text;
        chatOutput.appendChild(div);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    function getAIResponse(input) {
        if (input.includes('bullying')) return "Bullying é sério. Se estiver passando por isso, fale com um professor agora. Você não está sozinho!";
        if (input.includes('ansiedade') || input.includes('triste')) return "Respire fundo. Coisas ruins passam. Se estiver difícil, ligue para o 188.";
        if (input.includes('estudo')) return "Dica: Tente estudar 25 minutos e descansar 5. Isso ajuda o cérebro a focar!";
        return "Estou aqui para te ouvir. Pode contar comigo!";
    }

    // 4. MURAL
    const muralForm = document.getElementById('mural-form');
    const muralCont = document.getElementById('mural-container');

    muralForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('mural-nome').value || "Anônimo";
        const msg = document.getElementById('mural-msg').value;

        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `<strong>${nome}</strong><p>${msg}</p>`;
        
        muralCont.prepend(post);
        muralForm.reset();
    });
});
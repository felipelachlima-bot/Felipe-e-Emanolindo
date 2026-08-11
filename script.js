/* Variáveis de Cores */
:root {
    --bg-color: #f0f4f8;
    --card-bg: #ffffff;
    --text-color: #2d3748;
    --primary: #4a90e2;
    --primary-hover: #357abd;
    --accent: #f39c12;
    --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Modo Escuro */
body.dark-mode {
    --bg-color: #1a202c;
    --card-bg: #2d3748;
    --text-color: #edf2f7;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
}

/* Cabeçalho */
header {
    background: var(--primary);
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 100;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 15px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.header-controles {
    display: flex;
    align-items: center;
    gap: 10px;
}

.color-label {
    font-size: 0.9rem;
    font-weight: bold;
}

#color-picker {
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    background: none;
}

.theme-btn {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
}

/* Banner */
.hero {
    background: var(--primary);
    color: white;
    text-align: center;
    padding: 3rem 1rem;
    filter: brightness(0.9);
}

/* Main Container */
.container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.card {
    background: var(--card-bg);
    padding: 1.8rem;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.card h2 {
    color: var(--primary);
    margin-bottom: 1rem;
}

/* Chat da IA */
.chat-container {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    background: var(--bg-color);
}

.chat-messages {
    height: 200px;
    padding: 1rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.message {
    padding: 0.6rem 1rem;
    border-radius: 8px;
    max-width: 80%;
}

.message.bot {
    background: var(--card-bg);
    align-self: flex-start;
    border-left: 4px solid var(--primary);
}

.message.user {
    background: var(--primary);
    color: white;
    align-self: flex-end;
}

.chat-form {
    display: flex;
    border-top: 1px solid #ccc;
}

.chat-form input {
    flex: 1;
    border: none;
    border-radius: 0;
}

.chat-form button {
    border-radius: 0;
}

/* Grid e Formulários */
.grid-ajuda {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-top: 1rem;
}

.box {
    background: rgba(74, 144, 226, 0.1);
    padding: 1rem;
    border-left: 4px solid var(--primary);
    border-radius: 4px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 1rem;
}

input, textarea {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    background: var(--card-bg);
    color: var(--text-color);
}

button {
    background: var(--primary);
    color: white;
    border: none;
    padding: 0.8rem;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    filter: brightness(0.9);
}

.mural-posts {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.post {
    background: rgba(243, 156, 18, 0.15);
    border-left: 4px solid var(--accent);
    padding: 1rem;
    border-radius: 6px;
}

.post-autor {
    display: block;
    margin-top: 5px;
    font-size: 0.85rem;
    opacity: 0.8;
}

footer {
    text-align: center;
    padding: 1.5rem;
    background: var(--primary);
    color: white;
    margin-top: 2rem;
}
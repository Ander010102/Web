
function apresentacao(){
    alert("Olá! Meu nome é Anderson e sou estudante Analise e Desenvolvimento de Sistemas na Fatec Carapicuiba.")
}
function alterarTitulo() {
    document.getElementById("titulo").innerHTML = "Portfólio Profissional - " + prompt("Digite seu nome:");
}
function destacarDestaque() {
    document.getElementById("eu").style.backgroundColor = "#efe8f7";
    document.getElementById("eu").style.border = "2px solid #3f2360";
    document.getElementById("eu").style.borderRadius = "10px";
}

let clique = 0;

function contarClique() {
    clique = clique + 1;
    document.getElementById("contador").innerHTML = clique;
}

const temaEscuro = {
    // Variáveis do :root no seu CSS
    variaveis: {
        "--fundo": "#14101f",
        "--superficie": "#1e1830",
        "--texto": "#ece6f5",
        "--texto-suave": "#b8aecb",
        "--borda": "#3a2f55",
        "--roxo": "#6d42a8",
        "--roxo-escuro": "#241a3d",
        "--roxo-claro": "#2e2347"
    },
    // Elementos que têm cor fixa no CSS (não usam variável)
    elementos: [
        ["header", "background-color", "#2a1d45"],
        ["footer", "background-color", "#1a1230"],
        ["h2, h3, h4, main a", "color", "#c9a8f0"],
        [".destaque", "background-color", "#3b2a5c"],
        [".destaque", "color", "#ece6f5"],
        [".projeto-card", "background-color", "#26203a"],
        [".projeto-card", "border-color", "#3a2f55"],
        [".hab-item", "background-color", "#2e2347"],
        [".hab-item", "color", "#ece6f5"],
        [".hab-item", "border-color", "#4a3d6b"],
        ["input, select, textarea", "background-color", "#14101f"],
        ["input, select, textarea", "color", "#ece6f5"],
        ["input, select, textarea", "border-color", "#4a3d6b"]
    ]
};

let escuroAtivo = false;

function modoEscuro() {
    escuroAtivo = !escuroAtivo;
    const raiz = document.documentElement;

    // 1. Variáveis de cor
    for (const nome in temaEscuro.variaveis) {
        if (escuroAtivo) {
            raiz.style.setProperty(nome, temaEscuro.variaveis[nome]);
        } else {
            raiz.style.removeProperty(nome); // volta ao tema claro do CSS
        }
    }

    // 2. Elementos com cor fixa
    temaEscuro.elementos.forEach(function ([seletor, propriedade, valor]) {
        document.querySelectorAll(seletor).forEach(function (el) {
            if (escuroAtivo) {
                el.style.setProperty(propriedade, valor);
            } else {
                el.style.removeProperty(propriedade);
            }
        });
    });
}

const botaoMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu-mobile");

function alternarMenu(abrir) {
    const aberto = menu.classList.toggle("aberto", abrir);
    botaoMenu.setAttribute("aria-expanded", aberto);
}

// Abre/fecha ao clicar no botão
botaoMenu.addEventListener("click", function () {
    alternarMenu();
});

// Fecha ao clicar em qualquer link do menu
menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        alternarMenu(false);
    });
});

// Fecha ao clicar fora do menu
document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !botaoMenu.contains(e.target)) {
        alternarMenu(false);
    }
});

// Fecha com a tecla Esc
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        alternarMenu(false);
    }
});

const formContato = document.getElementById("formContato");
const campoNome = document.getElementById("nomeContato");
const feedback = document.getElementById("feedback");

function mostrarFeedback(texto, tipo) {
    feedback.textContent = texto;  // textContent: o navegador trata como texto puro
    feedback.className = tipo;     // "erro" ou "sucesso"
}

// Desafio extra: validação em tempo real
campoNome.addEventListener("input", function () {
    if (this.value.trim().length < 3) {
        mostrarFeedback("Digite pelo menos 3 caracteres.", "erro");
    } else {
        mostrarFeedback("✅ Nome válido!", "sucesso");
    }
});

// Validação no envio
formContato.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = campoNome.value.trim();
    const email = document.getElementById("emailContato").value.trim();
    const mensagem = document.getElementById("mensagemContato").value.trim();

    if (nome.length < 3) {
        mostrarFeedback("❌ Nome deve ter pelo menos 3 caracteres.", "erro");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarFeedback("❌ E-mail inválido. Digite um e-mail válido.", "erro");
        return;
    }

    if (mensagem.length < 10) {
        mostrarFeedback("❌ Mensagem deve ter pelo menos 10 caracteres.", "erro");
        return;
    }

    // Mostra o nome digitado na tela: é isso que permite testar o XSS (Passo 4)
    mostrarFeedback("✅ Obrigado, " + nome + "! Mensagem enviada com sucesso.", "sucesso");
    formContato.reset();
});
document.getElementById("titulo").innerHTML = "Portfólio Atualizado";

alert("Bem-vindo(a) ao meu portfólio!");

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

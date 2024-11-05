// Cria um botão
var botao = document.createElement("button");
botao.innerHTML = "Ir para outra página";

// Adiciona o botão ao corpo da página
document.body.appendChild(botao);

// Função de redirecionamento
botao.addEventListener("click", function() {
    window.location.href = "https://web.whatsapp.com/"; // Substitua pela URL desejada
});

/*O que precisamos fazer? Quando passar o mouse encima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar, a imagem, o nome do texto grande do personagem que está selecionado
OBJETIVO 1 Quando passar o mouse en cima do personagem, na listagem devemos selecioná-lo
Passo1 Pegar os personagens no JS pra poder verificar quando o usuário passar o moouse encima de um deles
passo 2 Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
Passo 3 Verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
OBJETIVO 2 Quando passar o mouse encima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
Passo 1 Pegar o elemento do personagem grande pra adicionar as informações nele
Passo 2 Alterar a imagem do personagem grande 
Passo 3 Alterar o nome do personagem grande
Passo 4 Alterar a descrição do personagem grande */

//const itemCiclope = document.getElementById("ciclope"); busca um elemento de cada vez
//Com o querySelectorAll eu busco todos os itens de uma lista 
const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior: "smooth"});
        }


        const personagemSelecionado = document.querySelector(".selecionado");
        personagemSelecionado.classList.remove("selecionado");
        personagem.classList.add("selecionado");
        
        const imagemPersonagemGrande = document.querySelector(".personagem-grande");
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;


        const nomePersonagem = document.getElementById("nome-personagem");
        nomePersonagem.innerText = personagem.getAttribute("data-name");

        const descricaoPersonagem = document.getElementById("descricao-personagem");
        descricaoPersonagem.innerText = personagem.getAttribute("data-description");


    })

})






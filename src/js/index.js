

var escolherJogador = new Boolean(true);

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {

    personagem.addEventListener("mouseenter", () => {
      
      const QuemJogador1 = document.querySelector('.jogador-1-selecionado');
      const QuemJogador2 = document.querySelector('.jogador-2-selecionado');

        if (escolherJogador == true)
        { 
            const idSelecionado = personagem.attributes.id.value;

            if(idSelecionado === QuemJogador2.attributes.id.value ) return;
    
            const personagemSelecionado = document.querySelector(".jogador-1-selecionado");
            personagemSelecionado.classList.remove("jogador-1-selecionado");
    
            personagem.classList.add("jogador-1-selecionado");
    
            const imagemJogador1 = document.getElementById('personagem-jogador-1');
            imagemJogador1.src = `./src/imagens/big-${idSelecionado}.png`;
          
            const mudarNumPlayer = document.getElementById(`player-${idSelecionado}`);
            mudarNumPlayer.textContent = "1P";

            const nomeJogador1 = document.getElementById('nome-jogador-1');
            const nomeSelecionado = personagem.getAttribute('data-name');
            
            nomeJogador1.innerHTML = nomeSelecionado;

        }
        else {
          const idSelecionado = personagem.attributes.id.value;

          if(idSelecionado === QuemJogador1.attributes.id.value ) return;
  
          const personagemSelecionado = document.querySelector(".jogador-2-selecionado");
          personagemSelecionado.classList.remove("jogador-2-selecionado");
  
          personagem.classList.add("jogador-2-selecionado");
  
          const imagemJogador2 = document.getElementById('personagem-jogador-2');
          imagemJogador2.src = `./src/imagens/big-${idSelecionado}.png`;

          const mudarNumPlayer2 = document.getElementById(`player-${idSelecionado}`);
          mudarNumPlayer2.textContent = "2P";
        
          const nomeJogador2 = document.getElementById('nome-jogador-2');
          const nomeSelecionado = personagem.getAttribute('data-name');
          
          nomeJogador2.innerHTML = nomeSelecionado;
        }
    });
});

function ConteudoRecebeuClick()
{
    if(escolherJogador == true) escolherJogador = false;
    else escolherJogador = true
}
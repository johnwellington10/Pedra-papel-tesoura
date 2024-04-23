const jogadasDisponiveis = ["pedra", "papel", "tesoura"]
    let pontosUsuario = 0;
    let pontosComputador = 0;

    function jogar(jogadasUsuario) {

      const jogadaAleatoria = Math.floor(Math.random() * 3);
      const jogadaDoComputador = jogadasDisponiveis[jogadaAleatoria];

      if (jogadaDoComputador === jogadasUsuario) {
        alert("Empate, o computador escolheu o mesmo");
      } else if (jogadaDoComputador === 'pedra') {
        if (jogadasUsuario === 'papel') {
          alert("Ganhou, o computador escolheu pedra");
          pontosUsuario = pontosUsuario + 1;
        } else {
          alert("Perdeu, o computador escolheu pedra");
          pontosComputador = pontosComputador + 1;
        }
      } else if (jogadaDoComputador === "papel") {
        if (jogadasUsuario === "pedra") {
          alert("Perdeu, o computador escolheu papel");
          pontosComputador = pontosComputador + 1;
        }
      } else {
        if (jogadasUsuario === "pedra") {
          alert("Ganhou, o computador escolheu tesoura");
          pontosUsuario = pontosUsuario + 1;
        } else {
          alert("Perdeu, o computador escolheu tesoura");
          pontosComputador = pontosComputador + 1;
        }
      }

      document.querySelector('#usuario_pontuacao').innerText = pontosUsuario
      document.querySelector('#computador_pontuacao').innerText = pontosComputador

    }
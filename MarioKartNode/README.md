<h1>Mario Kart Node.JS</h1>

<table>
  <tr>
    <td>
      <img src="./docs/header.gif" alt="Mario Kart" width="200">
    </td>
    <td>
      <b>Objetivo:</b>
      <p>Este projeto simula corridas entre personagens do universo Mario Kart, utilizando atributos como velocidade, manobrabilidade e poder. O jogo é executado via terminal e permite campeonatos com múltiplas corridas, confrontos aleatórios e placar dinâmico.</p>
    </td>
  </tr>
</table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
  <tr>
    <td style="border: 1px solid black; text-align: center;">
      <p>Mario</p>
      <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 4</p>
      <p>Manobrabilidade: 3</p>
      <p>Poder: 3</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Peach</p>
      <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 3</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 2</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Yoshi</p>
      <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 2</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 3</p>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; text-align: center;">
      <p>Bowser</p>
      <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 5</p>
      <p>Manobrabilidade: 2</p>
      <p>Poder: 5</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Luigi</p>
      <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 3</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 4</p>
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Donkey Kong</p>
      <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 2</p>
      <p>Manobrabilidade: 2</p>
      <p>Poder: 5</p>
    </td>
  </tr>
</table>

<h3>🕹️ Regras & Mecânicas</h3>

<b>Jogadores:</b><br>
- O jogo recebe dois personagens como objetos para disputar a corrida

<b>Pistas:</b>
<ul>
  <li>Cada corrida possui 5 rodadas</li>
  <li>A cada rodada, sorteia-se um tipo de bloco: reta, curva ou confronto
    <ul>
      <li>RETA: soma do dado + VELOCIDADE. Quem tiver maior valor ganha 1 ponto</li>
      <li>CURVA: soma do dado + MANOBRABILIDADE. Quem tiver maior valor ganha 1 ponto</li>
      <li>CONFRONTO: soma do dado + PODER. Quem perder, perde 1 ponto</li>
      <li>Nenhum jogador pode ter pontuação negativa</li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b><br>
Ao final das rodadas, vence quem tiver mais pontos acumulados

<h3>⚙️ Estrutura do Código</h3>
<ul>
  <li><b>personagensBase:</b> define atributos de cada personagem</li>
  <li><b>Funções utilitárias:</b> delay, rolagem de dados, sorteio de blocos e ataques</li>
  <li><b>playRaceEngine:</b> executa uma corrida com 5 rodadas e placar parcial</li>
  <li><b>campeonato:</b> permite múltiplas corridas e exibe o campeão</li>
  <li><b>main:</b> entrada principal do jogo, coleta dados e inicia o campeonato</li>
</ul>

<h3>📦 Execução</h3>
<p>Basta rodar o comando abaixo no terminal:</p>
<pre><code>node src/mariokart.js</code></pre>

<h3>🏁 Exemplo de Saída</h3>
<pre>
🧱 Bloco sorteado: CURVA
🎲 Mario rolou 4 + 3 = 7
🎲 Bowser rolou 2 + 2 = 4
✅ Mario marcou 1 ponto!
📊 Placar: Mario 1 x 0 Bowser
...
🏆 Mario venceu a corrida!
🎉 Mario é o campeão!
</pre>
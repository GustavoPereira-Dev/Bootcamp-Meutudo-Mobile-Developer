const personagensBase = {
  Mario: { VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3 },
  Bowser: { VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5 },
  Peach: { VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 2 },
  Luigi: { VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4 },
  Yoshi: { VELOCIDADE: 2, MANOBRABILIDADE: 4, PODER: 3 },
  DonkeyKong: { VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5 }
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function perguntar(texto) {
  return new Promise((resolve) => {
    process.stdout.write(texto);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    process.stdin.once("data", (data) => {
      process.stdin.pause();
      resolve(data.trim());
    });
  });
}

function escolherPersonagem(nome) {
  const base = personagensBase[nome.replace(" ", "")];
  if (!base) throw new Error(`Personagem ${nome} não encontrado`);
  return { NOME: nome, ...base, PONTOS: 0, VITORIAS: 0 };
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  const r = Math.random();
  return r < 0.33 ? "RETA" : r < 0.66 ? "CURVA" : "CONFRONTO";
}

async function getRandomAttackType() {
  return Math.random() < 0.5 ? "CASCO" : "BOMBA";
}

async function maybeGiveTurbo(character) {
  if (Math.random() < 0.5) {
    character.PONTOS++;
    console.log(`🚀 ${character.NOME} ganhou um TURBO! +1 ponto`);
  }
}

async function logRollResult(nome, tipo, dado, atributo) {
  console.log(`🎲 ${nome} rolou ${dado} + ${atributo} (${tipo}) = ${dado + atributo}`);
}

async function playRaceEngine(p1, p2) {
  p1.PONTOS = 0;
  p2.PONTOS = 0;

  for (let rodada = 1; rodada <= 5; rodada++) {
    console.log(`\n🏁 Rodada ${rodada}`);
    await delay(500);

    const bloco = await getRandomBlock();
    console.log(`🧱 Bloco sorteado: ${bloco}`);
    await delay(500);

    const d1 = await rollDice();
    const d2 = await rollDice();

    let total1 = 0, total2 = 0;

    if (bloco === "RETA") {
      total1 = d1 + p1.VELOCIDADE;
      total2 = d2 + p2.VELOCIDADE;
      await logRollResult(p1.NOME, "velocidade", d1, p1.VELOCIDADE);
      await logRollResult(p2.NOME, "velocidade", d2, p2.VELOCIDADE);
    }

    if (bloco === "CURVA") {
      total1 = d1 + p1.MANOBRABILIDADE;
      total2 = d2 + p2.MANOBRABILIDADE;
      await logRollResult(p1.NOME, "manobrabilidade", d1, p1.MANOBRABILIDADE);
      await logRollResult(p2.NOME, "manobrabilidade", d2, p2.MANOBRABILIDADE);
    }

    if (bloco === "CONFRONTO") {
      const ataque = await getRandomAttackType();
      const dano = ataque === "CASCO" ? 1 : 2;
      console.log(`🥊 Confronto! Ataque sorteado: ${ataque}`);
      await delay(500);

      const poder1 = d1 + p1.PODER;
      const poder2 = d2 + p2.PODER;
      await logRollResult(p1.NOME, "poder", d1, p1.PODER);
      await logRollResult(p2.NOME, "poder", d2, p2.PODER);

      if (poder1 > poder2) {
        p2.PONTOS = Math.max(0, p2.PONTOS - dano);
        console.log(`💥 ${p1.NOME} venceu o confronto! ${p2.NOME} perdeu ${dano} ponto(s)`);
        await maybeGiveTurbo(p1);
      } else if (poder2 > poder1) {
        p1.PONTOS = Math.max(0, p1.PONTOS - dano);
        console.log(`💥 ${p2.NOME} venceu o confronto! ${p1.NOME} perdeu ${dano} ponto(s)`);
        await maybeGiveTurbo(p2);
      } else {
        console.log("⚖️ Confronto empatado! Ninguém perdeu ponto.");
      }
    }

    if (total1 > total2) {
      p1.PONTOS++;
      console.log(`✅ ${p1.NOME} marcou 1 ponto!`);
    } else if (total2 > total1) {
      p2.PONTOS++;
      console.log(`✅ ${p2.NOME} marcou 1 ponto!`);
    } else {
      console.log("⚔️ Empate na rodada!");
    }

    console.log(`📊 Placar parcial: ${p1.NOME} ${p1.PONTOS} x ${p2.PONTOS} ${p2.NOME}`);
    await delay(1000);
  }

  if (p1.PONTOS > p2.PONTOS) {
    p1.VITORIAS++;
    console.log(`🏆 ${p1.NOME} venceu a corrida!`);
  } else if (p2.PONTOS > p1.PONTOS) {
    p2.VITORIAS++;
    console.log(`🏆 ${p2.NOME} venceu a corrida!`);
  } else {
    console.log("🤝 Corrida empatada!");
  }
}

async function campeonato(p1, p2, corridas) {
  for (let i = 1; i <= corridas; i++) {
    console.log(`\n🎬 Corrida ${i} de ${corridas}`);
    await playRaceEngine(p1, p2);
  }

  console.log(`\n🏁🏁🏁 Fim do Campeonato 🏁🏁🏁`);
  console.log(`🏅 ${p1.NOME}: ${p1.VITORIAS} vitória(s)`);
  console.log(`🏅 ${p2.NOME}: ${p2.VITORIAS} vitória(s)`);

  if (p1.VITORIAS > p2.VITORIAS)
    console.log(`🎉 ${p1.NOME} é o campeão do campeonato!`);
  else if (p2.VITORIAS > p1.VITORIAS)
    console.log(`🎉 ${p2.NOME} é o campeão do campeonato!`);
  else
    console.log("🤝 Campeonato terminou empatado!");
}

(async function main() {
  console.log("🏎️ Bem-vindo ao Mario Kart Node Championship!");
  await delay(500);

  console.log("\n🎮 Personagens disponíveis:");
  Object.keys(personagensBase).forEach((nome) => {
    const p = personagensBase[nome];
    console.log(`- ${nome}: Vel ${p.VELOCIDADE}, Man ${p.MANOBRABILIDADE}, Pod ${p.PODER}`);
  });

  const nome1 = await perguntar("\nEscolha o personagem 1: ");
  const nome2 = await perguntar("Escolha o personagem 2: ");
  const corridas = parseInt(await perguntar("Quantas corridas no campeonato? "), 10) || 3;

  const p1 = escolherPersonagem(nome1);
  const p2 = escolherPersonagem(nome2);

  await campeonato(p1, p2, corridas);
})();
const output = document.getElementById("output");
const inputArea = document.getElementById("inputArea");
const playerInput = document.getElementById("playerInput");

let stage = 0;

const stages = [
  {
    text: "⚠️ Acesso restrito...\n\nAgente Pedro, você foi convocado para uma missão secreta.\nDigite 'aceitar missão' para começar.",
    answer: "aceitar missão"
  },
  {
    text: "🔒 Enigma 1:\nA senha é o oposto da guerra + o número de letras do seu nome.\n",
    answer: "paz5"
  },
  {
    text: "📡 Enigma 2:\nCódigo Morse: .- -- --- .-.",
    answer: "amor"
  },
  {
    text: "🧠 Enigma 3:\nDesembaralhe: 'coirasir'",
    answer: "arcoiris"
  },
  {
    text: "📜 Enigma 4:\nDecodifique: 'U2VndXJhbmNhw6dhIGRlIGFtb3Ih'\n",
    answer: "segurança de amor"
  },
  {
    text: "🔍 Enigma 5:\nO que guarda sabedoria em silêncio?\n(a) Espada\n(b) Livro\n(c) Pedra\n(d) Código",
    answer: "b"
  },
  {
    text: "🎯 Enigma 6:\nQual é a linguagem dos sentimentos?\n(a) Python\n(b) HTML\n(c) Coração\n(d) JavaScript",
    answer: "c"
  },
  {
    text: "🧩 Última etapa:\nOnde fizemos juras? Onde tudo começou?\nDigite a palavra-chave... Dica: Ela é diferente das outras, por isso se destaca tanto ao meio de tanto verde",
    answer: "nossa arvore"
  },
  {
    text: "🎉 Missão Concluída!\nParabéns, Agente Pedro.\nVocê decifrou todos os códigos e encontrou o verdadeiro tesouro.\nA resposta... está na *nossa árvore*.\n\n🖤 Missão encerrada."
  }
];

function showStage() {
  output.innerText += "\n\n" + stages[stage].text;
  if (stage < stages.length - 1) {
    inputArea.classList.remove("hidden");
    playerInput.value = "";
    playerInput.focus();
  } else {
    inputArea.classList.add("hidden");
  }
}

function checkAnswer() {
  const input = playerInput.value.trim().toLowerCase();
  const correct = stages[stage].answer.toLowerCase();
  if (input === correct) {
    output.innerText += `\n> ${playerInput.value}`;
    stage++;
    showStage();
  } else {
    output.innerText += `\n> ${playerInput.value}\n❌ Resposta incorreta. Tente novamente.`;
    playerInput.value = "";
  }
}

// Inicia a primeira fase
showStage();

// Enviar com Enter
playerInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

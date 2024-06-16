function diasRestantesNoAno() {
    const hoje = new Date();
    const ultimoDiaDoAno = new Date(hoje.getFullYear(), 11, 31); // 31 de dezembro
    const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;

    const diasRestantes = Math.ceil((ultimoDiaDoAno.getTime() - hoje.getTime()) / umDiaEmMilissegundos) - 41;
    return diasRestantes;
}

const diasRestantes = diasRestantesNoAno();
document.getElementById("dias").textContent = "Faltam "+diasRestantes+" dias";
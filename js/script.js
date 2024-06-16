function diasRestantesNoAno() {
    const hoje = new Date();
    const ultimoDiaDoAno = new Date(hoje.getFullYear(), 11, 31); // 31 de dezembro
    const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;

    const diasRestantes = Math.ceil((ultimoDiaDoAno.getTime() - hoje.getTime()) / umDiaEmMilissegundos) - 41;
    return diasRestantes;
}

const diasRestantes = diasRestantesNoAno();
document.getElementById("dias").textContent = "Faltam "+diasRestantes+" dias";

var timeline = [
 {time: 13.5, matter: "portugues"},
 {time: 16.0, matter: "matematica"},
 {time: 18.5, matter: "esporte"},
 {time: 20.0, matter: "fisica"},
 {time: 22.5, matter: "fim"},
];


function timelist() {

}

console.log(timeline[1].time)
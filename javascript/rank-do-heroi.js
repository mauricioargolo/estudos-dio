/**
 * --------------------------------------
 *  Projeto: Rank do Herói
 *  Autor: Maurício Argolo
 *  Descrição: Este código define o rank do herói com base na diferença entre vitórias e derrotas.
 *  Subtraindo as derrotas das vitórias, quanto maior for o resultado, maior o rank do herói.
 *  Data de Criação: 08/03/2025
 *  Última Atualização: 10/03/2025
 *  Versão: 1.0
 * --------------------------------------
 */

// Matriz com nome do herói / vitórias / derrotas
let campeoes = [
    ["Herói 01", 2450, 2349],
    ["Herói 02", 3465, 3370],
    ["Herói 03", 3379, 3289],
    ["Herói 04", 2988, 2908],
    ["Herói 05", 2756, 2706],
    ["Herói 06", 2500, 2450],
    ["Herói 07", 2320, 2300],
    ["Herói 08", 2101, 2091],
    ["Herói 09", 1985, 870],
    ["Herói 10", 1760, 777],
];

// Função que calcula o Rank de um herói
function nivelRank(vitoriaRank) {
    switch (true) {
        case (vitoriaRank <= 10):
            return "Ferro";
        case (vitoriaRank >= 11 && vitoriaRank <= 20):
            return "Bronze";
        case (vitoriaRank >= 21 && vitoriaRank <= 50):
            return "Prata";
        case (vitoriaRank >= 51 && vitoriaRank <= 80):
            return "Ouro";
        case (vitoriaRank >= 81 && vitoriaRank <= 90):
            return "Diamante";
        case (vitoriaRank >= 91 && vitoriaRank <= 100):
            return "Lendário";
        case (vitoriaRank >= 101):
            return "Imortal";
    }
}

// Loop que percorre a matriz campeões
for (let i = 0; i < campeoes.length; i++) {
    let nome = campeoes[i][0]; // Pega o nome do herói
    let vitorias = campeoes[i][1]; // Pega as vitórias do herói
    let derrotas = campeoes[i][2]; // Pega as derrotas do herói
    let vitoriaRank = vitorias - derrotas; // Calcula o saldo de vitórias

    // Chama os resultados de dentro do loop for,
    // no Rank, chama a função nivelRank e exibe o case de acordo com o valor apresentado em vitoriaRank.
    console.log(`${nome}: Vitórias: ${vitorias}, Derrotas: ${derrotas} Rank: ${nivelRank(vitoriaRank)}`);
}
/**
 * --------------------------------------
 *  Projeto: Nível do Herói
 *  Autor: Maurício Argolo
 *  Descrição: Este código utiliza o nível de experiência(XP) do herói para definir o seu nível em classe.
 *  Data de Criação: 08/03/2025
 *  Última Atualização: 10/03/2025
 *  Versão: 1.0
 * --------------------------------------
 */

let nome = "Conan"
let xp = 9500
let nivel = ""

switch(true) {
    case xp <= 1000:
        nivel = "Ferro"
        break
    case xp > 1001 && xp <= 2000:
        nivel = "Bronze"
        break
    case xp >= 2001 && xp <= 5000:
        nivel = "Prata"
        break
    case xp >= 5001 && xp <= 7000:
        nivel = "Ouro"
        break
    case xp >= 7001 && xp <= 8000:
        nivel = "Platina"
        break
    case xp >= 8001 && xp <= 9000:
        nivel = "Ascendente"
        break
    case xp >= 9001 && xp <= 10000:
        nivel = "Imortal"
        break
    case xp > 10000:
        nivel = "Radiante"
        break
}

console.log("O herói de nome " + nome + " está no nível de " + nivel)
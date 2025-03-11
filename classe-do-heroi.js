/**
 * --------------------------------------
 *  Projeto: Classe do Herói
 *  Autor: Maurício Argolo
 *  Descrição: Este código define a classe de um herói e com base nisso, define o tipo de arma que utiliza para atacar.
 *  Data de Criação: 10/03/2025
 *  Última Atualização: 10/03/2025
 *  Versão: 1.0
 * --------------------------------------
 */

// Classe do Herói
class heroi {
    constructor(nome, classe) {
        this.nome = nome; // nome do herói
        this.classe = classe; // classe do herói
        this.ataque = this.arma(); // ataque de acordo com a classe do herói
    }

    // Define a arma do herói de acordo com sua classe
    arma(){
        switch(this.classe) {
            case "Guerreiro":
                return "Espada";
            case "Arqueiro":
                return "Arco e flecha";
            case "Mago":
                return "Cajado";
            case "Assassino":
                return "Adaga";
            case "Cavaleiro":
                return "Lança";
            default:
                return "Arma desconhecida";
        }
    }

    // Realiza o ataque do herói
    atacar() {
            console.log(`O heroi ${this.nome}, de classe ${this.classe} atacou usando ${this.ataque}!`)
    }

}

// Define as classes de herói
let heroi1 = new heroi("Conan", "Guerreiro");
let heroi2 = new heroi("Legolas", "Arqueiro");
let heroi3 = new heroi("Merlin","Mago");
let heroi4 = new heroi("Ezio", "Assassino");
let heroi5 = new heroi("Arthur", "Cavaleiro");

// Usando o ataque
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
heroi5.atacar();
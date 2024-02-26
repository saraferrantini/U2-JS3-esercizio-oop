// form  e bottone
const formNode = document.querySelector("form");
const btn = document.querySelector("button");
formNode.onsubmit = function (e) {
  e.preventDefault();

  console.log("form inviato");
};

//   istanza animali
class Animal {
  constructor(nome, proprietario, specie, razza) {
    this.nome = nome;
    this.proprietario = proprietario;
    this.specie = specie;
    this.razza = razza;
  }
}

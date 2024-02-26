window.onload = function () {
  pet();
};

// creazione array vuoto
let listaPet = [];

function pet() {
  // ☑️ 1.ASCOLTATORE SUL FORM
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    // Prevengo il default che mi pulirebbe il form
    event.preventDefault();

    // ☑️ 2.RACCOLGO I DATI DAL FORM
    // Vengono recuperati i valori inseriti dall'utente nei campi del form (nome animale, nome proprietario, specie, razza) - .value per accedere al valore del campo di input.
    let petName = document.getElementById("petName-field").value;
    let ownerName = document.getElementById("ownerName-field").value;
    let species = document.getElementById("species-field").value;
    let breed = document.getElementById("breed-field").value;

    //☑️ 3.CREAZIONE DI UN'ISTANZA (oggetto) DELLA CLASSE PET
    // Utilizzando i dati raccolti dal form, viene creata una nuova istanza della classe Pet chiamata newPet.
    // l'oggetto creato newpet lo passo come valore alla funzione addPetTolist (funzione che mi serve per creare la lista sotto al form)-->
    let newPet = new Pet(petName, ownerName, species, breed);

    addPetToList(newPet);
  });
}

// ☑️ 4.FUNZIONE addPetToList() - PER CREARE LA LISTA SOTTO AL FORM
//  la funzione addPetToList() si occupa di creare un nuovo elemento di lista (<li>)
//  contenente le informazioni sull'animale domestico passato come argomento, e aggiunge questo elemento alla lista (<ul>) visualizzata nella pagina HTML.
function addPetToList(pet) {
  let list = document.getElementById("pet-list");
  let listItem = document.createElement("li");
  listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
  list.appendChild(listItem);
  // aggiungo anche all'array listaPet
  pet.checkSameOwner(listaPet);
  listaPet.push(pet);
}

// inserire una classe pet
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  //☑️ METODO PER CONFRONTO DEI PROPRIETARI
  checkSameOwner(listaPet) {
    listaPet.forEach((element) => {
      if (element.ownerName == this.ownerName) {
        console.log(true);
      } else {
        console.log(false);
      }
    });
  }
}

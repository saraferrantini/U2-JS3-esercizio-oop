window.onload = function () {
  // ☑️ASCOLTATORE SUL FORM
  // Viene aggiunto un ascoltatore di eventi che si attiva quando viene inviato il form (submit).
  // Quando il form viene inviato, l'evento di default viene prevenuto usando event.preventDefault() per evitare il ricaricamento della pagina.

  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // ☑️RACCOLGO I DATI DAL FORM
    // Vengono recuperati i valori inseriti dall'utente nei campi del form (nome animale, nome proprietario, specie, razza) - .value per accedere al valore del campo di input.
    let petName = document.getElementById("petName-field").value;
    let ownerName = document.getElementById("ownerName-field").value;
    let species = document.getElementById("species-field").value;
    let breed = document.getElementById("breed-field").value;

    //☑️CREAZIONE DI UN'ISTANZA DELLA CLASSE PET
    // Utilizzando i dati raccolti dal form, viene creata una nuova istanza della classe Pet chiamata newPet.
    let newPet = new Pet(petName, ownerName, species, breed);

    // chiama la funzione addPetToList() passando come argomento l'istanza newPet
    addPetToList(newPet);

    //☑️RESET DEL FORM
    // Dopo aver aggiunto l'animale alla lista, il form viene resettato utilizzando form.reset() per consentire all'utente di inserire nuovi dati senza doverli cancellare manualmente.
    form.reset();
  });

  // ☑️FUNZIONE addPetToList() - PER CREARE LA LISTA SOTTO AL FORM
  //   la funzione addPetToList() si occupa di creare un nuovo elemento di lista (<li>)
  //   contenente le informazioni sull'animale domestico passato come argomento, e aggiunge questo elemento alla lista (<ul>) visualizzata nella pagina HTML.
  function addPetToList(pet) {
    let list = document.getElementById("pet-list");
    let listItem = document.createElement("li");
    listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    list.appendChild(listItem);
  }
};

//☑️DEFINIAMO LA CLASSE PET
// Viene definita la classe Pet con un costruttore che accetta i parametri petName, ownerName, species e breed e li assegna alle rispettive proprietà dell'istanza.
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  //☑️ METODO PER CONFRONTO DEI PROPRIETARI
  //Questo metodo confronta il proprietario dell'animale chiamante con un altro animale (anotherPet) passato come argomento
  //e restituisce true se entrambi gli animali hanno lo stesso proprietario, altrimenti restituisce false

  checkSameOwner(anotherPet) {
    if (this.ownerName === this.anotherPet) {
      console.log("stesso padrone");
    }
  }
}

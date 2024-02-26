window.onload = function () {
  pet();
};

// ascoltatore sul bottone aggiungi
function pet() {
  let prendiBottone = document.getElementById("add");
  prendiBottone.addEventListener("click", function () {
    console.log("ciao");
    let pet = new Pet("Messi", "sara", "cane", "bordercollie");
  });

  // inserire una classe pet
  class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    // metodo per il confronto
    checkSameOwner(anotherPet) {
      if (this.ownerName === anotherPet.ownerName) {
        return true;
      } else {
        return false;
      }
    }
  }
}

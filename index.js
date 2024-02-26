// UNA CLASSE HA UN COSTRUTTORE, ATTRIBUTI E METODI

// ho una classe chiamata User, che per essere inizializzata la costruisco con il costruttore che accetta dei parametri(come firstname) che valorizzano gli attributi della classe (this.firstName)
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  // INSERIAMO IL METODO
  // facciamo un confronto tra un "utente corrente" e un altro utente che gli passiamo (utente)
  confronta(utente) {
    if (this.age > utente.age) {
      console.log(this.firstName + " è più vecchio di " + utente.firstName);
    } else {
      console.log(this.firstName + " è più giovane di " + utente.firstName);
    }
  }
}

let mario = new User("Mario", "rossi", 20, "roma");
let carla = new User("Carla", "gialli", 19, "roma");

mario.confronta(carla);

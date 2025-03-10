class Animal {
  constructor(species) {
    this._species = species; // Private field for species
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a generic sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Subclass: Cat
class Cat extends Animal {
  // Method to make the cat purr
  purr() {
    console.log("purr");
  }
}

// Subclass: Dog
class Dog extends Animal {
  // Method to make the dog bark
  bark() {
    console.log("woof");
  }
}
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

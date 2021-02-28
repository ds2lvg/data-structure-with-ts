interface Animal {
  legs: number;
}

interface Dog extends Animal {
  bark(): void;
}

interface Cat extends Animal {
  meow(): void;
  jump(): void;
}

interface Camel extends Animal {
  humps: number;
}

function getSoundFunction(dogOrCat: Dog | Cat) {
  if ('jump' in dogOrCat) {
    return dogOrCat.jump;
  } else {
    return dogOrCat.bark;
  }
}
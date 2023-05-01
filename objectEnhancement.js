const createInstructor = (firstName, lastName) => {

  return {

    firstName,

    lastName

  };

}

let favoriteNumber = 42;

const instructor = {

  firstName : 'Colt',

  [favoriteNumber] : "That is my favorite"

}

const instructor = {

  firstName : 'Colt',

  sahHi() {

    return 'HI!';

  },

  sayBye() {

    return this.firstName + ' says bye!';

  }

}

const createAnimal = (species, verb, noise) => {

  return {

    species,

    [verb]() {

      return noise;

    }

  };
  
}
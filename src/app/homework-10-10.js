/*Aufgabe 1:
function average(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num);
    return sum / numbers.length;
}

const numbers = [1, 2, 3, 4, 5];
const result = average(numbers);
console.log(result); 

// Aufgabe 2:
function diffFromAvg(numbers) {
    const avg = average(numbers);

    const differences = numbers.map((num) => num - avg);
    return differences;
  }
  function average(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num);
    return sum / numbers.length;
}
  
  const numbers = [2, 4, 6, 8];
  const differences = diffFromAvg(numbers);
  console.log(differences); 

  // Aufgabe 3:
  function calculateStatistics(numbers) {  
    const avg = average(numbers);

    let min = numbers[0];
    let max = numbers[0];
  
    for (const num of numbers) {
      if (num < min) {
        min = num;
      } else if (num > max) {
        max = num;
      }
    }
  
    // Schritt 3: Berechnen Sie die Summe der quadrierten Abweichungen vom Durchschnitt
    let sumOfSquaredDifferences = 0;
    for (const num of numbers) {
      const difference = num - avg;
      sumOfSquaredDifferences += difference * difference;
    }
  
    // Schritt 4: Teilen Sie die Summe durch die Anzahl der Zahlen, um die Varianz zu erhalten
    const varianceValue = sumOfSquaredDifferences / numbers.length;
  
    return {
      min: min,
      max: max,
      variance: varianceValue
    };
  }
  
  function average(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num);
    return sum / numbers.length;
}
  
  // Beispielaufruf:
  const numbers = [2, 4, 6, 8];
  const statistics = calculateStatistics(numbers);
  console.log(`Minimum: ${statistics.min}`);
  console.log(`Maximum: ${statistics.max}`);
  console.log(`Varianz: ${statistics.variance}`); 

  // Aufgabe 4:
  function arrayToDigits(arr) {
    const number = parseInt(arr.join(''), 10);
    return number;
  }
  
  const number1 = arrayToDigits([2, 5, 0, 4]);
  console.log(number1); 

  // Aufgabe 5:
  function makePerson(name, age) {
    return {
      name: name,
      age: age
    };
  }
  
  const persons = [
    makePerson("Ali", 30),
    makePerson("Michael", 25),
    makePerson("Stefan", 40),
    makePerson("David", 35),
    makePerson("Ina", 28)
  ];
  
  console.log(persons); 

  // Aufgabe 6:
  function olderThan(personsArray, ageThreshold) {
    const filteredPersons = personsArray.filter((person) => person.age > ageThreshold);
    return filteredPersons;
  }
  
  function makePerson(name, age) {
    return {
      name: name,
      age: age
    };
  }
  
  const persons = [
    makePerson("Ali", 31),
    makePerson("Michael", 25),
    makePerson("Stefan", 40),
    makePerson("David", 35),
    makePerson("Ina", 28)
  ];
  
  const ageThreshold = 30;
  const olderPersons = olderThan(persons, ageThreshold);
  
  console.log(`Personen älter als ${ageThreshold} Jahre:`);
  console.log(olderPersons); 

  // Aufgabe 7:
  function oldestPerson(personsArray) {
  
    let oldest = personsArray[0];
  
    for (const person of personsArray) {
      if (person.age > oldest.age) {
        oldest = person;
      }
    }
    return oldest.name;
  }

  function makePerson(name, age) {
    return {
      name: name,
      age: age
    };
  }

  const persons = [
    makePerson("Ali", 30),
    makePerson("Michael", 25),
    makePerson("Stefan", 40),
    makePerson("David", 35),
    makePerson("Ina", 28)
  ];
  
  const oldestName = oldestPerson(persons);
  console.log(oldestName); */

  // Aufgabe 8:
  export function average(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num);
    return sum / numbers.length;
}

  export function averageAge(personsArray) {
    const ages = personsArray.map((person) => person.age);
    const avgAge = average(ages);
    return avgAge;
  }

  export function makePerson(name, age) {
    return {
      name: name,
      age: age
    };
  }
  
  const people = [
    makePerson("Ali", 30),
    makePerson("Michael", 25),
    makePerson("Stefan", 40),
    makePerson("David", 35),
    makePerson("Ina", 28)
  ];
  
  const avgAge = averageAge(people);
  
  
  
  
  
  
  
  
  

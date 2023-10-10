"use client";
import React, { useState } from 'react';
import './globals.css';

export default function HomePage() {
  const people = [
    { name: "Ali", age: 30 },
    { name: "Michael", age: 25 },
    { name: "Stefan", age: 40 },
    { name: "David", age: 35 },
    { name: "Ina", age: 28 }
  ];

  function average(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num);
    const avg = sum / numbers.length;
    return avg;
  }

    const numbers = [1, 2, 3, 4, 5];
    const averageNumber = average(numbers);

  function calculateAverageAge() {
    const sum = people.reduce((acc, person) => acc + person.age, 0);
    const avgAge = sum / people.length;
    alert(`Das durchschnittliche Alter der Personen beträgt: ${avgAge.toFixed(0)}`);
  }

  function showOldestPerson() {
    const oldestPerson = people.reduce((oldest, person) => {
      return person.age > oldest.age ? person : oldest;
    }, people[0]);
    alert(`Die älteste Person ist: ${oldestPerson.name}, ${oldestPerson.age} Jahre alt`);
  }

  return (
    <div>
      <h1>Homework 10.10.23</h1>
      <p>Array = [1, 2, 3, 4, 5]</p>
      <button onClick={() => alert(`Der Durchschnittswert aller Zahlen im Array ist: ${averageNumber.toFixed(0)}`)}>Durchschnittswert aller Zahlen im Array</button>
      <h2>Personen</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person.name}, {person.age}</li>
        ))}
      </ul>
      <br />
      <button onClick={calculateAverageAge}>Durchschnittsalter berechnen</button>
      <br />
      <br />
      <button onClick={showOldestPerson}>Älteste Person anzeigen</button>
    </div>
  );
}

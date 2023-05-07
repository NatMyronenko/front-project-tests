import { nanoid } from '@reduxjs/toolkit';

const questions = [
  {
    id: nanoid(),
    question: 'What is the scope of a variable declared with the let keyword?',
    options: [
      {
        text: 'A function that takes another function as an argument or returns a function as its result',
        isCorrect: true,
      },
      {
        text: 'A function that is defined inside another function',
        isCorrect: false,
      },
      {
        text: 'A function that can only be called by another function',
        isCorrect: false,
      },
      {
        text: 'A function that is used to manipulate arrays',
        isCorrect: false,
      },
    ],
  },
  {
    id: nanoid(),
    question: 'What is a higher-order function in JavaScript?',
    options: [
      {
        text: 'The process of hiding implementation details from the user',
        isCorrect: true,
      },
      {
        text: 'The process of extending a class to create a new class',
        isCorrect: false,
      },
      {
        text: 'The process of creating an instance of a class',
        isCorrect: false,
      },
      {
        text: 'The process of modifying the behavior of a superclass in a subclass',
        isCorrect: false,
      },
    ],
  },
  {
    id: nanoid(),
    question: 'Which statement is TRUE?',
    options: [
      {
        text: '[]==[]',
        isCorrect: false,
      },
      {
        text: '{}==={}',
        isCorrect: false,
      },
      {
        text: 'null == undefined',
        isCorrect: true,
      },
      {
        text: 'NaN === NaN',
        isCorrect: false,
      },
    ],
  },
  {
    id: nanoid(),
    question: 'How do you access a property of an object in JavaScript?',
    options: [
      {
        text: 'dot notation (.)',
        isCorrect: false,
      },
      {
        text: 'bracket notation ([])',
        isCorrect: false,
      },
      {
        text: 'both A and B (Correct)',
        isCorrect: true,
      },
      {
        text: 'neither A nor B.',
        isCorrect: false,
      },
    ],
  },
  {
    id: nanoid(),
    question: 'What is the difference between window and document?',
    options: [
      {
        text: 'Window - is the root level element in any web page. Document - is the direct child of the window object.',
        isCorrect: true,
      },
      {
        text: 'Window - provides methods like getElementById, createElement. Document - has methods like alert(), confirm()',
        isCorrect: false,
      },
      {
        text: 'Window  - is the direct child of the document object.  Document - is the root level element in any web page.',
        isCorrect: false,
      },
      {
        text: 'Window - has methods like alert(), confirm(). Document -  provides methods like getElementById, createElement.',
        isCorrect: true,
      },
    ],
  },
  {
    id: nanoid(),
    question: 'What is the value of initialized, but not declared variable?',
    options: [
      {
        text: 'null',
        isCorrect: false,
      },
      {
        text: `''`,
        isCorrect: false,
      },
      {
        text: 'undefined',
        isCorrect: true,
      },
      {
        text: 'Error: variable must be declared.',
        isCorrect: false,
      },
    ],
  },
];

export default questions;

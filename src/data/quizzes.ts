import { Quiz, QuizQuestion } from './courses';

export const courseQuizzes: Record<string, Quiz> = {
  'python-fundamentals': {
    id: 'python-fundamentals-quiz',
    title: 'Python Fundamentals Quiz',
    questions: [
      // Beginner Questions
      {
        id: 'py-1',
        question: 'What is Python primarily known for?',
        options: [
          'High performance in gaming',
          'Simplicity and readability',
          'Mobile app development',
          'Operating system development'
        ],
        correctAnswer: 1,
        difficulty: 'beginner',
        explanation: 'Python is designed to be easy to read and write, with clear syntax that emphasizes code readability.'
      },
      {
        id: 'py-2',
        question: 'Which of the following is a valid Python variable name?',
        options: [
          '2nd_value',
          'my-variable',
          'my_variable',
          'class'
        ],
        correctAnswer: 2,
        difficulty: 'beginner',
        explanation: 'Variable names in Python can contain letters, numbers, and underscores, but cannot start with a number or use reserved keywords.'
      },
      {
        id: 'py-3',
        question: 'What does the print() function do in Python?',
        options: [
          'Saves data to a file',
          'Displays output to the console',
          'Converts data to string',
          'Creates a new variable'
        ],
        correctAnswer: 1,
        difficulty: 'beginner',
        explanation: 'The print() function outputs data to the console for viewing.'
      },
      // Intermediate Questions
      {
        id: 'py-4',
        question: 'What is the output of: print(type([1, 2, 3]))?',
        options: [
          '<class \'tuple\'>',
          '<class \'list\'>',
          '<class \'dict\'>',
          '<class \'set\'>'
        ],
        correctAnswer: 1,
        difficulty: 'intermediate',
        explanation: 'Square brackets [] create a list in Python. The type() function returns the data type.'
      },
      {
        id: 'py-5',
        question: 'What is list comprehension used for?',
        options: [
          'Creating lists from other iterables in a concise way',
          'Sorting lists',
          'Deleting list elements',
          'Copying lists'
        ],
        correctAnswer: 0,
        difficulty: 'intermediate',
        explanation: 'List comprehension provides a concise syntax to create new lists based on existing iterables.'
      },
      {
        id: 'py-6',
        question: 'Which keyword is used to define a function in Python?',
        options: [
          'function',
          'define',
          'def',
          'func'
        ],
        correctAnswer: 2,
        difficulty: 'intermediate',
        explanation: 'The \'def\' keyword is used to define functions in Python.'
      },
      // Advanced Questions
      {
        id: 'py-7',
        question: 'What is a decorator in Python?',
        options: [
          'A function that modifies the behavior of another function',
          'A built-in data type',
          'A loop structure',
          'An error handling mechanism'
        ],
        correctAnswer: 0,
        difficulty: 'advanced',
        explanation: 'Decorators are a powerful feature that allows you to modify or enhance functions without changing their source code.'
      },
      {
        id: 'py-8',
        question: 'What does the __init__ method do in a Python class?',
        options: [
          'Deletes an instance',
          'Initializes new instances of the class',
          'Compares two instances',
          'Converts the instance to a string'
        ],
        correctAnswer: 1,
        difficulty: 'advanced',
        explanation: '__init__ is the constructor method that initializes newly created objects with their initial state.'
      },
      {
        id: 'py-9',
        question: 'What is the purpose of *args and **kwargs in function definitions?',
        options: [
          'To create variables',
          'To accept variable numbers of arguments',
          'To define default parameters',
          'To handle exceptions'
        ],
        correctAnswer: 1,
        difficulty: 'advanced',
        explanation: '*args accepts variable positional arguments, **kwargs accepts variable keyword arguments.'
      }
    ]
  },
  'javascript-web': {
    id: 'javascript-web-quiz',
    title: 'JavaScript for Web Development Quiz',
    questions: [
      {
        id: 'js-1',
        question: 'What does DOM stand for?',
        options: [
          'Document Object Model',
          'Data Object Management',
          'Digital Online Media',
          'Dynamic Object Method'
        ],
        correctAnswer: 0,
        difficulty: 'beginner',
        explanation: 'DOM (Document Object Model) is a programming interface for HTML documents.'
      },
      {
        id: 'js-2',
        question: 'Which method is used to select an element by its ID?',
        options: [
          'querySelector()',
          'getElementById()',
          'getElement()',
          'selectById()'
        ],
        correctAnswer: 1,
        difficulty: 'beginner',
        explanation: 'getElementById() is the most direct method to select an element by its ID attribute.'
      },
      {
        id: 'js-3',
        question: 'What is event bubbling?',
        options: [
          'When events propagate from child to parent elements',
          'When events are deleted',
          'When events are copied',
          'When events are sorted'
        ],
        correctAnswer: 0,
        difficulty: 'intermediate',
        explanation: 'Event bubbling is when an event propagates from the target element up through its ancestors.'
      },
      {
        id: 'js-4',
        question: 'What is the difference between == and === in JavaScript?',
        options: [
          'No difference',
          '== checks value only, === checks value and type',
          '=== is faster',
          '== is deprecated'
        ],
        correctAnswer: 1,
        difficulty: 'intermediate',
        explanation: '== performs type coercion, === checks both value and type without conversion.'
      },
      {
        id: 'js-5',
        question: 'What is a closure in JavaScript?',
        options: [
          'A function with access to its outer scope',
          'A loop structure',
          'A data type',
          'An error type'
        ],
        correctAnswer: 0,
        difficulty: 'advanced',
        explanation: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope.'
      },
      {
        id: 'js-6',
        question: 'What does async/await do?',
        options: [
          'Creates synchronous code',
          'Handles asynchronous operations in a synchronous-looking way',
          'Speeds up code execution',
          'Deletes promises'
        ],
        correctAnswer: 1,
        difficulty: 'advanced',
        explanation: 'Async/await provides syntactic sugar for working with Promises in a more synchronous-looking manner.'
      }
    ]
  },
  'react-frontend': {
    id: 'react-frontend-quiz',
    title: 'React Development Quiz',
    questions: [
      {
        id: 'react-1',
        question: 'What is JSX?',
        options: [
          'A JavaScript framework',
          'JavaScript XML - a syntax extension',
          'A testing library',
          'A package manager'
        ],
        correctAnswer: 1,
        difficulty: 'beginner',
        explanation: 'JSX is a syntax extension that allows you to write HTML-like code in JavaScript.'
      },
      {
        id: 'react-2',
        question: 'What is a React component?',
        options: [
          'A CSS file',
          'A reusable piece of UI',
          'A database',
          'A routing system'
        ],
        correctAnswer: 1,
        difficulty: 'beginner',
        explanation: 'Components are reusable, independent pieces of UI that can be composed to build complex interfaces.'
      },
      {
        id: 'react-3',
        question: 'What does useState return?',
        options: [
          'A single value',
          'An array with state value and setter function',
          'An object',
          'A promise'
        ],
        correctAnswer: 1,
        difficulty: 'intermediate',
        explanation: 'useState returns an array with two elements: the current state and a function to update it.'
      },
      {
        id: 'react-4',
        question: 'When does useEffect run?',
        options: [
          'Only once',
          'After every render by default',
          'Before render',
          'Never automatically'
        ],
        correctAnswer: 1,
        difficulty: 'intermediate',
        explanation: 'useEffect runs after every render by default, but can be controlled with dependencies.'
      },
      {
        id: 'react-5',
        question: 'What is the purpose of React.memo?',
        options: [
          'To store data',
          'To optimize re-renders by memoizing components',
          'To handle errors',
          'To route pages'
        ],
        correctAnswer: 1,
        difficulty: 'advanced',
        explanation: 'React.memo is a higher-order component that prevents unnecessary re-renders by memoizing the result.'
      }
    ]
  }
};

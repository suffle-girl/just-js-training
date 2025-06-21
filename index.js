// Goal: Create a simple contact form with validation and confirmation message.
// Tech: HTML, CSS, JS

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && email.includes('@')) {
    document.getElementById('confirmation').style.display = 'block';
  } else {
    alert('Please enter a valid name and email.');
  }
});

// Goal: Toggle visibility of a div on button click.
document.getElementById('toggle-button').addEventListener('click', () => {
  document.getElementById('secret-div').classList.toggle('hide-secret');
});

// Fix this bug
// Scenario: This function is supposed to double the numbers in an array, but it's broken.
// function doubleArray(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     arr[i] = arr[i] * 2;
//   }
//   return arr;
// }

// console.log(doubleArray([1, 2, 3]));

const doubleArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};

const mapArray = (arr) => {
  return arr.map((item) => (item = item * 2));
};

console.log(doubleArray([1, 2, 3]));
console.log(mapArray([4, 5, 6]));

// Consume a Mock API
// Goal: Fetch and display data from a fake JSON API
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
document.getElementById('fake-api').innerHTML += `
  <p>Numero Uno todo task is: ${data.title}</p>
`;

const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const container = document.getElementById('fake-users');

    data.forEach((item) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = `Fake user name: ${item.name}`;
      container.appendChild(paragraph);
    });
  } catch (err) {
    console.error('Failed to fetch users: ', err);
  }
};
fetchUsers();

// Reverse a String
// Task: Write a function that takes a string and returns it reversed.
const reverseString = (str) => {
  return str.split('').reverse().join('');
};
const reversedString = reverseString('Hello Vulcan!');
document.getElementById('reverse-string').textContent = reversedString;

// Remove Extra Spaces
// Task: Normalize a string by trimming it and removing extra spaces between words.
// "   Hello   world    " => "Hello world"
const normalizeString = (str) => {
  return str.trim().replace(/\s+/g, ' ');
};
const stringToNormalize = '   o    Hello     World!    ';
console.log('stringToNormalize: ', stringToNormalize);
const normalizedString = normalizeString(stringToNormalize);
console.log('normalizedString: ', normalizedString);

// Remove All Digits from a String
// Input: "abc123def456"
// Output: "abcdef"
const removeDigits = (str) => {
  return str.replace(/\d+/g, '');
};
console.log('removeDigits:', removeDigits('abc123def456'));

// Keep Only Letters (Remove Symbols & Numbers)
// Input: "Hello! My name is #42."
// Output: "HelloMynameis"
const keepOnlyLetters = (str) => {
  return str.replace(/\d+/g, '').replace(/[^a-zA-Z]/g, '');
};
console.log('keepOnlyLetters: ', keepOnlyLetters('Hello! My name is #42.'));

// Mask All Digits Except the Last 4
// Input: "1234 5678 9012 3456"
// Output: "**** **** **** 3456"
const maskDigits = (str) => {
  return str
    .replace(/\s+/g, '')
    .replace(/\d(?=\d{4})/g, '*')
    .replace(/(.{4})/g, '$1 ');
};
console.log('maskDigits: ', maskDigits('1234 5678 9012 3456'));

// Capitalize Each Word
// Task: Capitalize the first letter of each word in a sentence.
const capitalizeWords = (str) => {
  return str.toUpperCase();
};
console.log('capitalizeWords: ', capitalizeWords('jsem velká písmenka'));

// Find the First Vowel
// Task: Return the index of the first vowel in a string. If none, return -1.
const findVowel = (str) => {
  return str.search(/[aeiou]/i);
};
console.log('findVowel: ', findVowel('sAkksksksajkhfjkdsa'));

const findVowelLoop = (str) => {
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) return i;
  }
  return -1;
};
console.log('findVowelLoop: ', findVowelLoop('sAkksksksajkhfjkdsa'));

// Check for Forbidden Word
// Task: Write a function that checks if a string contains a "forbidden" word like "password" or "1234"
const containsForbiddenWord = (str) => {
  const forbiddenWord = 'password';
  return str.includes(forbiddenWord);
};
console.log(
  'containsForbiddenWord: ',
  containsForbiddenWord('my password is strong')
);

// Count Occurrences of a Letter
// Task: Count how many times a specific letter appears in a string, case-insensitive.
const countLetters = (str, letter) => {
  const target = letter.toLowerCase();
  return [...str.toLowerCase()].filter((char) => char === target).length;
};
console.log('countLetters: ', countLetters('Potterovi jsou pravá rodina', 'p'));

// Mask an Email Address
// Task: Mask all characters in the username of an email except the first and last.
// "sarka@email.com" => "s***a@email.com"
const maskEmail = (email) => {
  const atPosition = email.indexOf('@');
  const user = email.slice(0, atPosition);
  const domain = email.slice(atPosition);
  if (user.length <= 2) return email;

  const masked = user[0] + '*'.repeat(user.length - 2) + user.slice(-1);
  return `${masked}${domain}`;
};
console.log('maskEmail: ', maskEmail('potteristhechosenone@email.com'));

// Reverse string with loop
const reverseString1 = (str) => {
  const array = str.split('');
  let reverseArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray.join('');
};
console.log('reverseString1: ', reverseString1('welcome'));

// Reverse string with string methods
const reverseString2 = (str) => {
  return str.split('').reverse().join('');
};
console.log('reverseString2: ', reverseString2('hello'));

// Find Max with loop
const findMaxLoop = (arr) => {
  let highestNumber = arr[0];
  arr.forEach((num) => {
    if (num > highestNumber) highestNumber = num;
  });
  return highestNumber;
};

console.log('findMaxLoop: ', findMaxLoop([-10, -5, -3, -1])); // Output: 8

// Find Max with array methods
const findMaxMethod = (arr) => {
  return Math.max(...arr);
};
console.log('findMaxMethod: ', findMaxMethod([-10, -5, -3, -1])); // Output: 8

// Split the string into pairs of two characters, return array of strings
const splitToTwo = (str) => {
  let remainingString = str;
  let arrayOfPairs = [];
  while (remainingString.length !== 0) {
    const twoChar = remainingString.slice(0, 2);
    const theRest = remainingString.slice(2);

    if (twoChar.length === 1) {
      arrayOfPairs.push(twoChar + '_');
    } else {
      arrayOfPairs.push(twoChar);
    }

    remainingString = theRest;
  }

  return arrayOfPairs;
};
console.log('splitToTwo: ', splitToTwo('abcde'));

// Split the string into pairs of two characters, return array of strings - with regex
const splitToTwoRegex = (str) => {
  if (str.length % 2 !== 0) str += '_';
  return str.match(/.{2}/g) || [];
};
console.log('splitToTwoRegex: ', splitToTwoRegex('abcde'));
// we use a regex (/.{2}/g) to match every 2 characters.
//    / ... / — this is just the regex literal syntax in JavaScript.
//    . — matches any character (except line breaks).
//    {2} — this is a quantifier: "exactly 2 of the previous thing" → so it means two characters.
//    g — the global flag, which means "find all matches in the string", not just the first one.
// match() returns an array of those matches, or null if there’s no match — so the || [] guards against that.

// Square and sum array of numbers
const squareSum = (numbers) => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i] * numbers[i];
  }
  return result;
};
console.log('squareSum: ', squareSum([1, 2, 3, 5, 7]));

// Square and sum array of numbers - with reduce
const squareSumReduce = (numbers) => {
  return numbers.reduce((prev, curr) => prev + curr * curr, 0);
};
console.log('squareSumReduce: ', squareSumReduce([1, 2, 3, 5, 7]));

// Break camel case with " "
const breakCamelCase = (string) => {
  if (string.length === 0) {
    return '';
  }

  return string.split(/(?=[A-Z])/g).join(' ');
};
console.log('breakCamelCase: ', breakCamelCase('camelCasingIsCool'));
// add (?=...) to the regex in order to not discard the chars we are looking for

// Generate # - must start with #, all first letters capitalized, no longer than 140 ch, empty returns false
const generateHashtag = (str) => {
  if (str.trim() === '') return false;

  const wordArray = str.split(' ');
  const filteredWords = wordArray.filter((item) => {
    return item;
  });

  const capitalizedWords = filteredWords.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const hashtag = `#${capitalizedWords.join('')}`;
  return hashtag.length > 140 ? false : hashtag;
};
console.log('generateHashtag: ', generateHashtag('    Hello     World   '));
console.log(
  'generateHashtag: ',
  generateHashtag(' Hello there thanks for trying my Kata')
);

// Turn Roman numeral as  argument into a numeric decimal integer without validating the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1

const romanToDecimal = (str) => {
  let year = 0;

  const values = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  for (let i = 0; i < str.length; i++) {
    const currentValue = values[str[i]];
    const nextValue = values[str[i + 1]];

    if (nextValue > currentValue) {
      year -= currentValue;
    } else {
      year += currentValue;
    }
  }
  return year;
};
console.log('romanToDecimal: ', romanToDecimal('MDCLXVI'));

// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
const removeSmallest = (arr) => {
  if (arr.length === 0) return [];
  const atPosition = arr.indexOf(Math.min(...arr));

  const newArray = [...arr];
  newArray.splice(atPosition, 1);
  return newArray;
};
console.log('removeSmallest: ', removeSmallest([1, 2, 3, 4, 5]));
console.log('removeSmallest: ', removeSmallest([5, 3, 2, 1, 4]));
console.log('removeSmallest: ', removeSmallest([]));

// Function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
const addBinary = (a, b) => {
  const sum = a + b;
  return sum.toString(2);
};
console.log('addBinary: ', addBinary(1, 1));
console.log('addBinary: ', addBinary(5, 9));

// Function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
const secondsToHuman = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return (
    String(hours).padStart(2, '0') +
    ':' +
    String(minutes).padStart(2, '0') +
    ':' +
    String(remainingSeconds).padStart(2, '0')
  );
};
console.log('secondsToHuman: ', secondsToHuman(0));
console.log('secondsToHuman: ', secondsToHuman(59));
console.log('secondsToHuman: ', secondsToHuman(3599));
console.log('secondsToHuman: ', secondsToHuman(45296));
console.log('secondsToHuman: ', secondsToHuman(86400));
console.log('secondsToHuman: ', secondsToHuman(359999));

// Function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
const arrayDiff = (a, b) => {
  return a.filter((item) => !b.includes(item));
};
console.log('arrayDiff: ', arrayDiff([1, 2], [2]));
console.log('arrayDiff: ', arrayDiff([1, 2, 2, 2, 3], [2]));

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
const segmentText = (text, markers) => {
  const pattern = new RegExp(
    `\\s*[${markers.map((m) => '\\' + m).join('')}].*$`
  );

  const linesArray = text.split('\n');
  const wordsArray = linesArray.map((item) =>
    item.replace(pattern, '').trimEnd()
  );
  return wordsArray.join('\n');
};

// regex patern: \s*[#|!].*$
//  markers.map(m => '\\' + m) – escapes characters like # or ! so they’re treated literally in regex
// [#!] inside regex matches any one of the listed markers
// \\s* strips whitespace before the comment
// .*$ grabs everything to the end of the line

console.log(
  'segmentText: ',
  segmentText('apples, pears # and bananas\ngrapes\nbananas !apples', [
    '#',
    '!',
  ])
);

const segmentTextElegant = (text, markers) => {
  const linesArray = text.split('\n');
  const wordsArray = linesArray.map((str) =>
    markers.reduce((stri, mark) => stri.split(mark)[0], str).trimEnd()
  );
  return wordsArray.join('\n');
};
console.log(
  'segmentTextElegant: ',
  segmentTextElegant('apples, pears # and bananas\ngrapes\nbananas !apples', [
    '#',
    '!',
  ])
);

// Decode morse - part 1 - with external dictionary
const decodeMorse = (morseCode) => {
  const codeWords = morseCode.trim().split('   ');
  const morse = codeWords.map((word) => {
    const codeLetters = word.split(' ');
    const toWords = codeLetters.map((letter) => MORSE_CODE[letter]);
    return toWords.join('');
  });
  return morse.join(' ');
};

// Given a string, replace every letter with its position in the alphabet.
const alphabetPosition = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const message = text.toLowerCase();
  let codedMessage = '';
  for (let i = 0; i < message.length; i++) {
    if (alphabet.includes(message[i])) {
      codedMessage += alphabet.indexOf(message[i]) + 1 + ' ';
    }
  }
  return codedMessage.trim();
};
console.log('alphabetPosition: ', alphabetPosition('V elipse spí lev.'));

// Return the number (count) of vowels in the given string. (excluding y)
const getCount = (str) => {
  const vowels = 'aeiou';
  let vowCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowCount++;
    }
  }
  return vowCount;
};

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
const areInLove = (flower1, flower2) => {
  return (flower1 + flower2) % 2 === 1;
};

// Tribonacci
const tribonacci = (signature, n) => {
  let tribonacciArray = [];
  if (n !== 0) {
    if (n <= 3) {
      for (let i = 0; i < n; i++) {
        tribonacciArray.push(signature[i]);
      }
      return tribonacciArray;
    }

    for (let i = 0; i < 3; i++) {
      tribonacciArray.push(signature[i]);
    }

    for (let i = 2; i < n - 1; i++) {
      let nextNumber =
        tribonacciArray[i] + tribonacciArray[i - 1] + tribonacciArray[i - 2];
      tribonacciArray.push(nextNumber);
    }
  }
  return tribonacciArray;
};

// tribonacci refactor
const tribonacciRefactor = (signature, n) => {
  for (let i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }
  return signature.slice(0, n);
};

// Reverse words
const reverseWords = (str) => {
  const words = str.split(' ');
  const reverse = words.map((word) => {
    return word.split('').reverse().join('');
  });
  return reverse.join(' ');
};

// Croquet club membership
const openOrSenior = (data) => {
  const results = data.map((item) => {
    if (item[0] >= 55 && item[1] > 7) {
      return 'Senior';
    }
    return 'Open';
  });
  return results;
};

// Given the triangle of consecutive odd numbers, Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
const sumOddNumbers = (n) => {
  return n ** 3;
};

// Remove exclamation marks from a string
const removeExclamationMarks = (str) => {
  return str.replace(/\!/g, '');
};

// Show who likes the post - updated function with a switch statement
const likes = (names) => {
  names = names || [];
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
};

// Sum numeric value of string and return it as a string
const sumStrings = (a, b) => {
  return String(BigInt(a) + BigInt(b));
};

// Square every digit of a number and concatenate them.
const squareDigits = (num) => {
  const numString = String(num);
  let result = [];
  for (let i = 0; i < numString.length; i++) {
    result.push(Number(numString[i]) ** 2);
  }
  return Number(result.join(''));
};

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
const digitize = (n) => {
  const stringNumber = String(n);
  const newArray = [];
  for (let i = 0; i < stringNumber.length; i++) {
    newArray.push(Number(stringNumber[i]));
  }
  return newArray.reverse();
};

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
const smashAround = (words) => {
  let sentence = '';
  for (let i = 0; i < words.length; i++) {
    sentence = sentence.concat(' ', words[i]);
  }
  return sentence.trim();
};

const smash = (words) => {
  return words.join(' ');
};

// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.
// object solution:
const findOdd = (A) => {
  let numbersArray = A;
  let count = {};
  for (let item of numbersArray) {
    count[item] = (count[item] || 0) + 1;
  }
  for (const property in count) {
    if (count[property] % 2 === 1) {
      return Number(property);
    }
  }
};
console.log('findOdd: ', findOdd([7]));
console.log('findOdd: ', findOdd([1, 1, 2]));
console.log('findOdd: ', findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// array solution:
const findOddArray = (A) => {
  let finalResult = 0;

  A.forEach((num) => {
    const howManyTimes = A.filter((item) => item === num).length;
    if (howManyTimes % 2 === 1) {
      finalResult = num;
    }
  });
  return finalResult;
};
console.log('findOddArray: ', findOddArray([7]));
console.log('findOddArray: ', findOddArray([1, 1, 2]));
console.log(
  'findOddArray: ',
  findOddArray([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])
);

// XOR solution:
const findOddXOR = (A) => A.reduce((a, b) => a ^ b);
// where:
// a, b - represent at the beginning first two number of an array, then:
// a = accumulator → it holds the "running result" as the reduce method progresses
// b = current element from the array that reduce method is processing
// ^ = XOR / exclusive OR operator → if the numbers are same, they cancel themselves out, return 0; if the number is XORed by 0, it returns its value
// example: [1, 1, 2, 2, 3]
// 1 ^ 1 = 0
// 0 ^ 2 = 2
// 2 ^ 2 = 0
// 0 ^ 3 = 3
// → final result: 3

// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.
const removeChar = (str) => {
  return str.slice(1, -1);
};

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
const rot13 = (message) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const messageLow = message.toLowerCase();
  let codedMessage = '';
  let letterPosition = 0;

  for (let i = 0; i < message.length; i++) {
    const wasUpperCase = message[i] === message[i].toUpperCase();
    letterPosition = alphabet.indexOf(messageLow[i]);

    if (alphabet.includes(messageLow[i])) {
      const newLetter = alphabet[(letterPosition + 13) % 26];
      if (wasUpperCase) {
        codedMessage += newLetter.toUpperCase();
      } else {
        codedMessage += newLetter;
      }
    } else {
      codedMessage += message[i];
    }
  }
  return codedMessage;
};
console.log('rot13: ', rot13('abc wXyz'));
console.log('rot13: ', rot13('Hello, World!')); // "Hello, World!" ➝ "Uryyb, Jbeyq!"
console.log('rot13: ', rot13('ROT13')); // "ROT13" ➝ "EBG13"
console.log('rot13: ', rot13('123!$ abc XYZ')); // "123!$ abc XYZ" ➝ "123!$ nop KLM"

// Goal: Create a simple contact form with validation and confirmation message.
// Tech: HTML, CSS, JS

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email.includes("@")) {
    document.getElementById("confirmation").style.display = "block";
  } else {
    alert("Please enter a valid name and email.");
  }
});

// Goal: Toggle visibility of a div on button click.
document.getElementById("toggle-button").addEventListener("click", () => {
  document.getElementById("secret-div").classList.toggle("hide-secret");
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
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await response.json();
document.getElementById("fake-api").innerHTML += `
  <p>Numero Uno todo task is: ${data.title}</p>
`;

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const container = document.getElementById("fake-users");

    data.forEach((item) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = `Fake user name: ${item.name}`;
      container.appendChild(paragraph);
    });
  } catch (err) {
    console.error("Failed to fetch users: ", err);
  }
};
fetchUsers();

//  Reverse a String
// Task: Write a function that takes a string and returns it reversed.
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
const reversedString = reverseString("Hello Vulcan!");
document.getElementById("reverse-string").textContent = reversedString;

// Remove Extra Spaces
// Task: Normalize a string by trimming it and removing extra spaces between words.
// "   Hello   world    " => "Hello world"
const normalizeString = (str) => {
  return str.trim().replace(/\s+/g, " ");
};
const stringToNormalize = "   o    Hello     World!    ";
console.log("stringToNormalize: ", stringToNormalize);
const normalizedString = normalizeString(stringToNormalize);
console.log("normalizedString: ", normalizedString);

// Remove All Digits from a String
// Input: "abc123def456"
// Output: "abcdef"
const removeDigits = (str) => {
  return str.replace(/\d+/g, "");
};
console.log("removeDigits:", removeDigits("abc123def456"));

// Keep Only Letters (Remove Symbols & Numbers)
// Input: "Hello! My name is #42."
// Output: "HelloMynameis"
const keepOnlyLetters = (str) => {
  return str.replace(/\d+/g, "").replace(/[^a-zA-Z]/g, "");
};
console.log("keepOnlyLetters: ", keepOnlyLetters("Hello! My name is #42."));

// Mask All Digits Except the Last 4
// Input: "1234 5678 9012 3456"
// Output: "**** **** **** 3456"
const maskDigits = (str) => {
  return str
    .replace(/\s+/g, "")
    .replace(/\d(?=\d{4})/g, "*")
    .replace(/(.{4})/g, "$1 ");
};
console.log("maskDigits: ", maskDigits("1234 5678 9012 3456"));

// Capitalize Each Word
// Task: Capitalize the first letter of each word in a sentence.
const capitalizeWords = (str) => {
  return str.toUpperCase();
};
console.log("capitalizeWords: ", capitalizeWords("jsem velká písmenka"));

// Find the First Vowel
// Task: Return the index of the first vowel in a string. If none, return -1.
const findVowel = (str) => {
  return str.search(/[aeiou ]/i);
};
console.log("findVowel: ", findVowel("sAkksksksajkhfjkdsa"));

const findVowelLoop = (str) => {
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) return i;
  }
  return -1;
};
console.log("findVowelLoop: ", findVowelLoop("sAkksksksajkhfjkdsa"));

// Check for Forbidden Word
// Task: Write a function that checks if a string contains a "forbidden" word like "password" or "1234"
const containsForbiddenWord = (str) => {
  const forbiddenWord = "password";
  return str.includes(forbiddenWord);
};
console.log(
  "containsForbiddenWord: ",
  containsForbiddenWord("my password is strong")
);

// Count Occurrences of a Letter
// Task: Count how many times a specific letter appears in a string, case-insensitive.
const countLetters = (str, letter) => {
  const target = letter.toLowerCase();
  return [...str.toLowerCase()].filter((char) => char === target).length;
};
console.log("countLetters: ", countLetters("Potterovi jsou pravá rodina", "p"));

// Mask an Email Address
// Task: Mask all characters in the username of an email except the first and last.
// "sarka@email.com" => "s***a@email.com"
const maskEmail = (email) => {
  const atPosition = email.indexOf("@");
  const user = email.slice(0, atPosition);
  const domain = email.slice(atPosition);
  if (user.length <= 2) return email;

  const masked = user[0] + "*".repeat(user.length - 2) + user.slice(-1);
  return `${masked}${domain}`;
};
console.log("maskEmail: ", maskEmail("potteristhechosenone@email.com"));

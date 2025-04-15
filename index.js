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

    data.map((item) => {
      return (document.getElementById(
        "fake-users"
      ).innerHTML += `<p>Fake user name: ${item.name}</p>`);
    });
  } catch (err) {
    console.error("Failed to fetch users: ", err);
  }
};
fetchUsers();

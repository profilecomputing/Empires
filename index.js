
const users_choices = [];

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
  
  

function addUserChoice() {
    let users_choice = document.getElementById("users_choice");
    if (users_choice.value === "") {
        alert("Please enter a value");
        return;
    }
    users_choices.push(users_choice.value);
    users_choice.value = "";
}

function print_names() {
    let users_choice = document.getElementById("users_choice");
    if (users_choice.value) {
        addUserChoice();
    }
    // if (users_choices.value.length !== 0) { }
    let new_array = shuffle(users_choices);
    let results = document.getElementById("results");
    results.innerHTML = "";
    for(let i = 0; i < new_array.length; i++) {
        results.innerHTML += `<li class="list-group-item">${new_array[i]}</li>`;
    }
}


const add_choice_button = document.getElementById("add_choice");
add_choice_button.addEventListener("click", addUserChoice);

const print_names_button = document.getElementById("print_names");
print_names_button.addEventListener("click", print_names);

const clear_button = document.getElementById("clear");
clear_button.addEventListener("click", function() {
    let results = document.getElementById("results");
    results.innerHTML = "";
    users_choices.length = 0;
});


const users_choice = document.getElementById("users_choice");
users_choice.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addUserChoice();
    }
});
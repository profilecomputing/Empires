
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

function speak_names() {
    let users_choice = document.getElementById("users_choice");
    if (users_choice.value) {
        addUserChoice();
    }
    let new_array = shuffle(users_choices);
    if ('speechSynthesis' in window) {
        // Speech Synthesis supported 🎉
        var msg = new SpeechSynthesisUtterance();
        for (let i = 0; i < new_array.length; i++) {
            setTimeout(() => {
                msg.text = new_array[i];
                window.speechSynthesis.speak(msg);
            }, 1000 * i);
        }
    }
    else {
        // Speech Synthesis Not Supported 😣
        alert("Sorry, your browser doesn't support text to speech!");
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

const speak_names_button = document.getElementById("speak_names");
speak_names_button.addEventListener("click", speak_names);


const users_choice = document.getElementById("users_choice");
users_choice.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addUserChoice();
    }
});
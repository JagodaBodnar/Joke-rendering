let url = "http://api.icndb.com/jokes/random";

let button = document.getElementById("get-joke");
button.addEventListener("click", function() {
  getJoke();
});

let paragraph = document.getElementById("joke");

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", function() {
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

document.addEventListener("DOMContentLoaded", function() {
  getJoke();
});

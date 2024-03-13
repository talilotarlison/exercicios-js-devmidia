//https://www.w3schools.com/jsref/met_win_prompt.asp


console.log("cadastro nome");
let nome = prompt("qual seu nome?")

console.log(nome);


let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}
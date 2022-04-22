let kelValue = document.querySelector(".temperature >input");
let celValue = document.querySelector(".celcius >input");
let fahValue = document.querySelector(".fahrenheit >input");

function roundNum(num) {
  return Math.round(num * 100) / 100;
}
roundNum();
//function to convert kelvin-fahrenheit and celcius
function kel() {
  kelValue.addEventListener("input", function() {
    let kelheat = parseFloat(kelValue.value);
    let celheat = roundNum(kelheat - 273.15);
    celValue.value = celheat;
    if (isNaN(celheat)) celValue.value = "";
    let fahheat = roundNum((kelheat * 1.8) - 459.67);
    fahValue.value = fahheat;
    if (isNaN(fahheat)) fahValue.value = "";
  });
}
kel();
//function to convert celcius- fahrenheit and kelvin
function cel() {
  celValue.addEventListener("input", function() {
    let celheat = parseFloat(celValue.value);
    let kelheat = roundNum(celheat + 273.15);
    kelValue.value = kelheat;
    if (isNaN(kelheat)) kelValue.value = "";
    let fahheat = roundNum(celheat * (9 / 5) + 32);
    fahValue.value = fahheat;
    if (isNaN(fahheat)) fahValue.value = "";
  });
}
cel();
//function to conert fahrenheit-celcius and kelvin
function fah() {
  fahValue.addEventListener("input", function() {
    let fahheat = parseFloat(fahValue.value);
    let kelheat = roundNum((fahheat + 459.67) * (5 / 9));
    kelValue.value = kelheat;
    if (isNaN(kelheat)) kelValue.value = "";
    let celheat = roundNum((fahheat * (9 / 5)) + 32);
    celValue.value = celheat;
    if (isNaN(celheat)) celValue.value = "";
  });
}
fah();
//reload page:-
$(".btn").click(function() {
  location.reload();
});

const show = document.getElementById('confirm');

console.log("ciao");

let distance= document.getElementById("km");
let userAge = document.getElementById("age");

 
console.log(distance);
console.log(userAge);

show.addEventListener("click", function() {
  distance = distance.value;
  userAge = userAge.value;
});





let price = distance * 0.21;

let finalPrice;

if (userAge < 18) {
    price = price - (price * 20 / 100);
    finalPrice = price.toFixed(2);
} else if (userAge >= 18 && userAge < 65) {

    finalPrice = price.toFixed(2);
}
else if (userAge >= 65) {
    price = price - (price * 40 / 100);
    finalPrice = price.toFixed(2);
} 
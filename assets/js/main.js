const show = document.getElementById('confirm');
let userName = document.getElementById("nameSurname");
let distance = document.getElementById("km");
let userAge = document.getElementById("age");


console.log(distance);
console.log(userAge);

show.addEventListener("click", function () {
    userName = userName.value;
    distance = distance.value;
    userAge = userAge.value;
    console.log(distance);
    console.log(userAge);

    let price = distance * 0.21;

    let finalPrice;

    if (userAge < 18) {
        price = price - (price * 20 / 100);
        finalPrice = price.toFixed(2);
        document.getElementById("hiddenTicket").style.display = "block";
        document.getElementById("ticketTitle").style.display = "block";
        document.getElementById("priceDOM").innerHTML = finalPrice;

    } else if (userAge >= 18 && userAge < 65) {

        finalPrice = price.toFixed(2);
        document.getElementById("hiddenTicket").style.display = "block";
        document.getElementById("ticketTitle").style.display = "block";
        document.getElementById("priceDOM").innerHTML = finalPrice;
    }
    else if (userAge >= 65) {
        price = price - (price * 40 / 100);
        finalPrice = price.toFixed(2);
        document.getElementById("hiddenTicket").style.display = "block";
        document.getElementById("ticketTitle").style.display = "block";
        document.getElementById("priceDOM").innerHTML = finalPrice;
    }

    document.getElementById("nameDOM").innerHTML = userName;
    console.log(finalPrice);
});





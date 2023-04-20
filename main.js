let button = document.querySelector(".button");
let results = document.querySelector(".results");
let number1 = document.querySelector(".text-input");
let number2 = document.querySelector(".text-input2");

function perimeter(){
    let n1 = number1.value;
    let n2 = number2.value;
    n1 = Number(n1);
    n2 = Number(n2);

    let perimeter = 2 * (n1 + n2);

    results.textContent = `Your Perimeter is: ${perimeter}`;
}

button.addEventListener("click", perimeter);
const PI = 3.14159;
let radius;
let circumference;


document.getElementById("button").onclick = function(){
    radius = document.getElementById("text").value
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = `Result: ${circumference}`
}


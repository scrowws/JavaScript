let username;

document.getElementById("button").onclick = function(){
    username = document.getElementById("nick").value;
    document.getElementById("h1").textContent = `Hello ${username}`;
}


let x = 10, y = 10, z = 10;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
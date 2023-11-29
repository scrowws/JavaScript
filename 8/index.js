let username;

document.getElementById("button").onclick = function(){
    username = document.getElementById("nick").value;
    document.getElementById("h1").textContent = `Hello ${username}`;
}
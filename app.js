let numeroUsuario;
console.log(" " + numeroUsuario);

do {
    numeroUsuario = prompt("Dime si me amas (Si o No):");
    if (numeroUsuario == "si" || numeroUsuario == "Si") {
        alert("Me parece muy bien mi amorcito");
        break
    }
    else if (numeroUsuario == "no" || numeroUsuario == "No") {
        alert("Como que no!!😭😭")
    }
    else { alert("Ingrese un valor correcto") }
} while (!(numeroUsuario == "si" || numeroUsuario == "Si"));

let titulo = document.getElementById("Titulo");
titulo.innerHTML = "Elegiste la respuesta correcta!!"

let texto = document.getElementById("Texto");
texto.innerHTML = "Te ganaste un premio. Comunicate a este número para mayor información🤭🤭: 3108935340 (el número de tu amorcito jeje)"

const texArea = document.querySelector(".tex__area");
const mensaje = document.querySelector(".mensaje__emcriptado");
const btnCopiar = document.querySelector(".copiar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(texArea.value);
    mensaje.value = textoEncriptado;
    texArea.value =""
}

function encriptar(strigencriptada) {
    let matrizDelCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.log(matrizDelCodigo);

    // Convertir el texto a minúsculas
    strigencriptada = strigencriptada.toLowerCase();

    // Reemplazar las letras según la matriz de código
    for (let i = 0; i < matrizDelCodigo.length; i++) {
        if(strigencriptada.includes(matrizDelCodigo[i][0]))
        // Reemplazar todas las ocurrencias de la letra
        strigencriptada = strigencriptada.replaceAll(matrizDelCodigo[i][0], matrizDelCodigo[i][1]);
    }

    return strigencriptada;
}
function btnDesEncriptar(){
    const textoEncriptado = desencriptar(texArea.value);
     mensaje.value = textoEncriptado;
     texArea.value =""
} 


function desencriptar(strigDesEncriptada){
    let matrizDelCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    strigDesEncriptada=strigDesEncriptada.toLowerCase();

    for(let i = 0; i < matrizDelCodigo.length; i++){
        if(strigDesEncriptada.includes(matrizDelCodigo[i][1]))
        strigDesEncriptada=strigDesEncriptada.replaceAll(matrizDelCodigo[i][1],matrizDelCodigo[i][0])
    }
    return strigDesEncriptada;
}  
btnCopiar.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(mensaje.value);
        alert("Texto copiado al portapapeles");
    } catch (err) {
        alert("No se pudo copiar el texto. Intenta de nuevo.");
    }
    mensaje.value=""
});

const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar () {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
   
}

function encriptar (stringEncriptado) {
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a","ai"],["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}


function btnDesencriptar () {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}

    
function desencriptar (stringDesencriptado) {
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a","ai"],["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

document.addEventListener("DOMContentLoaded", function() {
    var botonCopiar = document.getElementById("boton_copiar");
    var textoACopiar = document.getElementById("mensaje");
  
    botonCopiar.addEventListener("click", function() {
      
      textoACopiar.select();
  
      document.execCommand("copy");
  
    });
  });
  
//Texto a encriptar//

const textoInsertado = document.querySelector("#txtInsertado");

//Filtro de caracteres//

function filtroCaracteres(){
    const caracteresAdmitidos= /[a-z ]/;
    textoInsertado.addEventListener("beforeinput", e => {
        if (!caracteresAdmitidos.test(e.data)) {
        e.preventDefault();
        } 
    });    
}

filtroCaracteres();

//Funciones de encriptado y desencriptado//

const llaveEncriptado = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function encriptar(txtInsertado){

    for(let i=0;i< llaveEncriptado.length;i++){
        if(txtInsertado.includes(llaveEncriptado[i][0])) {
            txtInsertado = txtInsertado.replaceAll(llaveEncriptado[i][0],llaveEncriptado[i][1]);
        }
    }
    return txtInsertado;
}

function btnEncriptar(){
    let txtEncriptado = encriptar(textoInsertado.value);
    mensaje.value = txtEncriptado;
}

function desencriptar(txtInsertado){
    for(let i=0;i< llaveEncriptado.length;i++){
        if(txtInsertado.includes(llaveEncriptado[i][1])) {
            txtInsertado = txtInsertado.replaceAll(llaveEncriptado[i][1],llaveEncriptado[i][0]);
        } 
    }
    return txtInsertado;
}

function btnDesencriptar(){
    let txtDesencriptado = desencriptar(textoInsertado.value);
    mensaje.value = txtDesencriptado;
}

//Funcion de copia//

function btnCopiar() {
    let textoCopiado = document.querySelector("#mensaje");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    alert("Texto copiado al portapapeles.");
    textoInsertado.value = "";
    mensaje.value = "";
    textoInsertado.focus();
}

/* Android on screen keyboard */

input.onfocus = function () {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
}
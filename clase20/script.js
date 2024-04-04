const render =()=>{

    const formulario= document.querySelector("#formulario");
    const correo =document.querySelector("#Correo");

formulario.addEventListener("submit", (e) =>{
e.preventDefault(); //no hace el redireccionamiento
alert(correo.value);

const valorCorreo =e.target.Correo.value;
alert(valorCorreo);
});

correo.addEventListener("input", (e) =>{
    console.log(e.target.value);
});

};

document.addEventListener("DOMContentLoaded", render);
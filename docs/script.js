const firebaseConfig = {
    apiKey: "AIzaSyDKb4YBMZRTY7lkWP2F-rHpMwJxQOPZox8",
    authDomain: "fundamentos-ce9eb.firebaseapp.com",
    databaseURL: "https://fundamentos-ce9eb-default-rtdb.firebaseio.com",
    projectId: "fundamentos-ce9eb",
    storageBucket: "fundamentos-ce9eb.appspot.com",
    messagingSenderId: "616557298698",
    appId: "1:616557298698:web:faab54cc6c84826cf18bf3"
  };

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn1').addEventListener('click', function() {
        window.location.href = 'https://github.com/Andioh15/Examen-Final-Alex';
    });

    document.getElementById('btn2').addEventListener('click', function() {
        window.location.href = 'https://github.com/Andioh15/Bingo';
    });

    document.getElementById('btn3').addEventListener('click', function() {
        window.location.href = 'https://github.com/Andioh15/Sistema-de-facturaci-n.-Objetos-y-abstracci-n-de-datos.';
    });
});

firebase.initializeApp(firebaseConfig);

var basededatos = firebase.database().ref('datosDeContacto');

document.getElementById('formularioContacto').addEventListener('submit', enviarFormulario);

function enviarFormulario(e){
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    console.log(nombre, correo, mensaje);
    guardarMensaje(nombre, correo, mensaje);
    document.getElementById('formularioContacto').reset();
    document.getElementById('alert').style.display = 'block';
    setTimeout(()=>{
        document.getElementById('alert').style.display = 'none';
    }, 3000);
}

function guardarMensaje(nombre, correo, mensaje){
    var datosAGuardar = basededatos.push();

    datosAGuardar.set({
        nombre : nombre,
        email : correo,
        contenidoMensaje : mensaje
    });
}
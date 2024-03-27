import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAMud_Rg9dO6S4NitA9vCyzESyR6z1fbcY",
    authDomain: "bdd-ramdom.firebaseapp.com",
    projectId: "bdd-ramdom",
    storageBucket: "bdd-ramdom.appspot.com",
    messagingSenderId: "442051028946",
    appId: "1:442051028946:web:5a8faea7a5bd9991c94a0b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(); // Obtiene una referencia a Firestore





// Manejador de evento de clic para el botón "Responder"
document.getElementById("idBtnIngresar").addEventListener("click", async function () {
    try {
        // Obtiene el valor del radio seleccionado o del campo de texto
        var respuesta;
        var mensajePersonalizadoCheckbox = document.getElementById("idrPersonalizado");
        if (mensajePersonalizadoCheckbox.checked) {
            // Si el checkbox "Mensaje Personalizado" está marcado, obtén el valor del campo de texto
            respuesta = document.getElementById("mensajePersonalizado").value;
        } else {
            // Si el checkbox no está marcado, obtén el valor del radio seleccionado
            respuesta = document.querySelector('input[name="respuesta"]:checked').value;
        }
        

        // Guarda la respuesta en Firestore
        if (respuesta != ""){
            mostrarModal(respuesta);
            const docRef = await addDoc(collection(db, 'Respuesta'), { respuesta: respuesta });
            console.log("Respuesta guardada en Firestore con ID: ", docRef.id);
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 10000);
           
        }else{
            
            alert('No escribio nada :(');
        }
        
    } catch (error) {
        console.error("Error al guardar la respuesta en Firestore: ", error);
    }



    function mostrarModal(respuesta) {
        switch (respuesta) {
            case "Tomar un café":
                $('#modalCafe').modal('show');
                break;

            case "Ver una Pelicula":
                $('#modalPelicula').modal('show');
                break;

                case "Ir a comer algo":
                    $('#modalComer').modal('show');
                break;

                case "Todas las anteriores":
                    $('#modalTodas').modal('show');

                break;

                case "Nada, más suerte la proxima":
                    $('#modalNada').modal('show');
                    
                break;
            default:
                $('#modalPersonalizado').modal('show');
                break;
        }
    }
});



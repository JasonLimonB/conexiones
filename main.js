//instanciamos XMLHTTPREQUEST

let peticion = new XMLHttpRequest();
let data = document.querySelector('#form');

data.addEventListener('submit', (e) => {
    let form = new FormData(data);

    peticion.open('POST', 'conexion.php'); //Método open para abrir la conexión, (Metodo de envio, al archivo donde se enviaran)
    peticion.onload = () => { //Todo lo que deseamos hacer va aquí
        if (peticion.status == 200) {


            datosForm = JSON.parse(peticion.responseText);
            console.log(datosForm);

            let usuario1 = document.getElementById('datos-usuario');
            usuario1.innerHTML = 'Tus datos son: ' +
                '<br/>' + datosForm.nombre +
                '<br/>' + datosForm.correo +
                '<br/>' + datosForm.pass;

        } else {
            console.log('Error en la peticón: ' + peticion.status);

        }
    }
    peticion.send(form); //Enviar la petición

    e.preventDefault();
});
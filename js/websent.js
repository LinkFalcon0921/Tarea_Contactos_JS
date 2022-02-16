//#region For Post send
function sendContact(name,lName,tels) {
    const nContact = {nombre:name,apellido:lName,telefono:tels};
    fetch("http://www.raydelto.org/agenda.php",
        {
            //Send the data
            method: "POST",
            body: JSON.stringify(nContact)
        }
    )
    .then(function (contactos) {
        if(contactos.ok){
            sayToUser('Nuevo contacto agregado');
            document.location.reload();
        }else{
            sayToUser('No se ha podido guardar su usuario');
        }
    });
}

function checkData(){
    const name = document.getElementById('name').value;
    const lName = document.getElementById('l-name').value;
    const tels = document.getElementById('tel-phone').value;
    let message = '';

    if(name.length < 2){
        message += 'Nombre: Se requiere 3 letras o mas.\n';
    }

    if(lName.length < 2){
        message += 'Apellido: Se requiere 3 letras o mas\n';
    }

    console.log(tels.length == 12 && !tels.includes('-'));
    if( tels.length != 10 || (tels.length == 12 && !tels.includes('-')) ){
        message += 'Telefono: Se requieren 10 numeros o mas\n';
    }

    if(message.length>0){
        sayToUser(message);
    }else{
        sendContact(name,lName,tels);
    }

}
//#endregion

function sayToUser(data) {
    alert(data);
}

// http://www.raydelto.org/agenda.php
// const fatherTable = document.getElementById("data");

//tomar los datos Json
//Leer los datos Array
//Procesalos a la tabla
//Mostarlo en el html

function setDataContacts() {
  //this is the tbody of the table oof contacts
    const fatherTable = document.getElementById("data").tBodies[0];
    //Show the contacts form
    // console.log(document.getElementById('form-add').hidden);

  fetch("http://www.raydelto.org/agenda.php")
    .then(function (contactos) {
      //Convert to JSON
      return contactos.json();
    })
    .then(function (contactos) {
      //Save each element
      const contacts = Array.from(contactos);
      //Delete the loading row
      fatherTable.innerHTML = '';

      //Fill the table
      contacts.forEach(function (info) {
        //If for show the data if has a name
        // if(info.nombre !== ''){
            const row = createContactRow(info.nombre,info.apellido,info.telefono);
            // console.log(fatherTable.tBodies[0].innerHTML);
            fatherTable.innerHTML += row;
        // }
        //console.log(info);
      });
      //Show the contact.
      document.getElementById('form-add').style.display = "grid";
    });
    
}

function createContactRow(name, l_name, tel) {
  return `<tr>
        <td>${name}</td>
        <td>${l_name}</td>
        <td>${tel}</td>
    </tr>\n`;
}


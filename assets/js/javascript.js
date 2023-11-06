

function send(form){
    
    let typeName = "nombre";
    let typeLastName = "apellido";
    
    let name = form.name.value;
    let lastName = form.lastName.value;
    let du = form.du.value;
    let email = form.email.value;
    let phone = form.phone.value;
    let typeInsurance = form.typeInsurance.value;

    if(validateName(name, typeName) && validateName(lastName, typeLastName) && validateMail(email)){
      
      const params = {
          name: name,
          lastName: lastName,
          du: du,
          email: email,
          phone: phone,
          typeInsurance: typeInsurance
      }
      document.getElementById("valueInsurance").value = params.typeInsurance;
      console.log(params);
  
      alert(`Su mensaje ha sido enviado correctamente`)
      resetForm();
    }
    
}

function resetForm() {
    document.querySelector("form").reset();
}



// Funciones de validaciones
function validateMail(correo) {
    // Expresión regular para validar el formato del correo electrónico
    let expresionRegular = /^[^\s@]+@(gmail\.com|yahoo\.com|yahoo\.com.ar|outlook\.com|hotmail\.com)$/i;
    if(expresionRegular.test(correo)){
      return true;
    }
     return alert(`Ingrese un correo válido`);
  }
  
  function validateName(name, type){
    let expresionRegular = /^[A-Za-z]+$/
    if(expresionRegular.test(name)){
          return true;
    }
    return alert(`Ingrese un ${type} válido`);
  }
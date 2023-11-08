let valueInsurance = "";
const insuranceValues = {
  basico: 500,
  intermedio: 1000,
  premiun: 1500
};

function send(form) {
  let typeName = "nombre";
  let typeLastName = "apellido";

  let name = form.name.value;
  let lastName = form.lastName.value;
  let du = form.du.value;
  let email = form.email.value;
  let phone = form.phone.value;
  let typeInsurance = form.typeInsurance.value.toLowerCase();

  if (
    validateName(name, typeName) &&
    validateName(lastName, typeLastName) &&
    validateMail(email)
  ) {
      // Asigna el valor de typeInsurance a valueInsurance usando el objeto insuranceValues
      valueInsurance = insuranceValues[typeInsurance] || ""; // Si el tipo de seguro no coincide, asigna una cadena vacía
  
      // Actualiza el valor del input con id "valueInsurance"
      document.getElementById("valueInsurance").value = valueInsurance;
    
      const params = {
      name: name,
      lastName: lastName,
      du: du,
      email: email,
      phone: phone,
      typeInsurance: typeInsurance,
      valueInsurance: valueInsurance
    };


    console.log(params);
    //console.log(`Valor ${valueInsurance}`)

    alert(`${params.name}, su mensaje ha sido enviado correctamente`);
    resetForm();
  }
}

function resetForm() {
  document.querySelector("form").reset();
}

function validateMail(correo) {
  // Expresión regular para validar el formato del correo electrónico
  let expresionRegular =
    /^[^\s@]+@(gmail\.com|yahoo\.com|yahoo\.com.ar|outlook\.com|hotmail\.com)$/i;
  if (expresionRegular.test(correo)) {
    return true;
  }
  return alert(`Ingrese un correo válido`);
}

function validateName(name, type) {
  let expresionRegular = /^[A-Za-z]+(\s[A-Za-z]+)*$/i;
  if (expresionRegular.test(name)) {
    return true;
  }
  return alert(`Ingrese un ${type} válido`);
}

// Asegúrate de que el evento "input" se añada solo una vez
document.getElementById("typeInsurance").addEventListener("input", handleInputEvent);

function handleInputEvent(event) {
  let valor = event.target.value;
  valueInsurance = insuranceValues[valor.toLowerCase()] || "";
  document.getElementById("valueInsurance").value = valueInsurance;
  //console.log(valueInsurance);
}

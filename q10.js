const patient = {
    patientId: 1,
    name: "Raj",
    disease: "Fever"
};

localStorage.setItem("patient", JSON.stringify(patient));

const savedPatient = JSON.parse(localStorage.getItem("patient"));
console.log(savedPatient);

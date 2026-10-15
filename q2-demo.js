const { consultationFee, calculateBill, Patient } = require("./q2");

const patient = new Patient("Raj");
console.log(patient.name);
console.log(calculateBill(consultationFee, 300));

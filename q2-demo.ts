import { consultationFee, calculateBill, Patient } from "./q2";

const patient = new Patient("Raj");
console.log(patient.name);
console.log(calculateBill(consultationFee, 300));

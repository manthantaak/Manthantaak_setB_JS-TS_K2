const patientNames = ["Raj", "Asha", "Sam"];
const [firstPatient, secondPatient] = patientNames;

const doctor = { name: "Mehta", department: "Cardiology" };
const { name: doctorName, department: doctorDepartment } = doctor;

const department = { departmentName: "Emergency", floorNumber: 1 };
const { departmentName, floorNumber } = department;

console.log(firstPatient, secondPatient);
console.log(doctorName, doctorDepartment);
console.log(departmentName, floorNumber);

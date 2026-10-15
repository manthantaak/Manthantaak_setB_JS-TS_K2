function findHighestBillPatient(patients) {
    if (patients.length === 0) {
        return null;
    }

    return patients.reduce(function (highest, patient) {
        return patient.bill > highest.bill ? patient : highest;
    });
}

const patients = [
    { name: "Raj", bill: 2000 },
    { name: "Asha", bill: 6000 },
    { name: "Sam", bill: 4000 }
];

console.log(findHighestBillPatient(patients));

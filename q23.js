function filterCriticalPatients(patients) {
    return patients.filter(function (patient) {
        return patient.condition === "critical";
    });
}

const patients = [
    { name: "Raj", condition: "critical" },
    { name: "Asha", condition: "stable" },
    { name: "Sam", condition: "critical" }
];

console.log(filterCriticalPatients(patients));

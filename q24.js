const patients = [
    { name: "Raj", bill: 2000 },
    { name: "Asha", bill: 6000 },
    { name: "Sam", bill: 4000 }
];

const taxRate = 10;
const billsWithTax = patients.map(function (patient) {
    return {
        ...patient,
        bill: patient.bill + patient.bill * taxRate / 100
    };
});

const highBills = billsWithTax.filter(function (patient) {
    return patient.bill > 5000;
});

const totalRevenue = billsWithTax.reduce(function (total, patient) {
    return total + patient.bill;
}, 0);

console.log("Bills with tax:", billsWithTax);
console.log("Bills over 5000:", highBills);
console.log("Total revenue:", totalRevenue);

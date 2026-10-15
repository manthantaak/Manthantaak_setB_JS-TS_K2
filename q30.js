function calculateMedicalExpenses(...charges) {
    return charges.reduce(function (total, charge) {
        return total + charge;
    }, 0);
}

console.log(calculateMedicalExpenses(500, 1200, 300, 2000));

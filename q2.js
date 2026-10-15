const consultationFee = 500;

function calculateBill(consultationFee, testCost) {
    return consultationFee + testCost;
}

class Patient {
    constructor(name) {
        this.name = name;
    }
}

module.exports = { consultationFee, calculateBill, Patient };


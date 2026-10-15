const calculateBill = (consultationFee, testCost, medicineCost) =>
    consultationFee + testCost + medicineCost;

console.log(calculateBill(500, 1200, 300));

function checkMedicalCost(consultationFee, testCost) {
    const limit = 10000;

    if (consultationFee > limit || testCost > limit) {
        throw new Error("A fee or test cost is over the allowed limit.");
    }

    return consultationFee + testCost;
}

try {
    console.log(checkMedicalCost(500, 12000));
} catch (error) {
    console.log(error.message);
}

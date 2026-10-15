const increaseConsultationFees = function (doctors, percentage) {
    doctors.forEach(function (doctor) {
        doctor.consultationFee += doctor.consultationFee * percentage / 100;
    });

    return doctors;
};

const doctors = [
    { name: "Mehta", consultationFee: 500 },
    { name: "Shah", consultationFee: 700 }
];

console.log(increaseConsultationFees(doctors, 10));

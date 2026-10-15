function checkDoctorAvailability(doctorAvailable) {
    return new Promise(function (resolve, reject) {
        if (doctorAvailable) {
            resolve("The doctor is available.");
        } else {
            reject(new Error("The doctor is not available."));
        }
    });
}

checkDoctorAvailability(true)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error.message);
    });

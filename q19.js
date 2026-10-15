class InvalidPatientException extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidPatientException";
    }
}

function findPatient(patientId) {
    if (patientId <= 0) {
        throw new InvalidPatientException("Patient ID must be greater than zero.");
    }

    return { patientId, name: "Raj" };
}

try {
    console.log(findPatient(-1));
} catch (error) {
    if (error instanceof InvalidPatientException) {
        console.log(error.name + ":", error.message);
    } else {
        throw error;
    }
}

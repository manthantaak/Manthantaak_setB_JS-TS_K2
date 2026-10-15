function getPatientRecords() {
    throw new Error("Server error while retrieving patient records.");
}

function showPatientRecords() {
    return getPatientRecords();
}

try {
    const patients = showPatientRecords();
    console.log(patients);
} catch (error) {
    console.log("Could not load patients:", error.message);
}

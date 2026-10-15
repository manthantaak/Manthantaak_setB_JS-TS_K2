async function getPatients() {
    const response = await fetch("http://localhost:3000/patients");

    if (!response.ok) {
        throw new Error("Could not get patient records.");
    }

    const patients = await response.json();
    console.log(patients);
}

getPatients().catch(function (error) {
    console.log(error.message);
});

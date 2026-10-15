const registrationForm = document.querySelector("#registrationForm");

if (!registrationForm) {
    throw new Error("Registration form was not found.");
}

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const errorMessage = validatePatient(name, email, password);

    if (errorMessage) {
        alert(errorMessage);
        return;
    }

    const patients = JSON.parse(localStorage.getItem("patients") || "[]");
    patients.push({ name, email, password });
    localStorage.setItem("patients", JSON.stringify(patients));

    alert("Patient registered.");
    registrationForm.reset();
});

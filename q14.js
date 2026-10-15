const loginForm = document.querySelector("#loginForm");

if (!loginForm) {
    throw new Error("Login form was not found.");
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector("#loginEmail").value.trim();
    const password = document.querySelector("#loginPassword").value;
    const patients = JSON.parse(localStorage.getItem("patients") || "[]");
    const patient = patients.find(function (item) {
        return item.email === email && item.password === password;
    });

    if (!patient) {
        alert("Invalid email or password.");
        return;
    }

    alert(`Welcome, ${patient.name}.`);
});

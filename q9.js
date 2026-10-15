const appointmentList = document.querySelector("#appointmentList");

if (!appointmentList) {
    throw new Error('Add a <ul id="appointmentList"></ul> to the page first.');
}

const appointment = document.createElement("li");
appointment.textContent = "Raj - Dr. Mehta - 10:30 AM";
appointmentList.appendChild(appointment);

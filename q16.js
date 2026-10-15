function bookAppointment(doctorAvailable, patientAppointmentCount, limit) {
    if (!doctorAvailable) {
        throw new Error("The doctor is not available.");
    }

    if (patientAppointmentCount >= limit) {
        throw new Error("The patient has reached the appointment limit.");
    }

    console.log("Appointment booked.");
}

try {
    bookAppointment(false, 0, 3);
} catch (error) {
    console.log(error.message);
}

try {
    bookAppointment(true, 3, 3);
} catch (error) {
    console.log(error.message);
}

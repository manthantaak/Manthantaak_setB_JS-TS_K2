function bookAppointment(doctorAvailable) {
    let status = "failed";

    try {
        if (!doctorAvailable) {
            throw new Error("The doctor is not available.");
        }

        status = "booked";
        console.log("Appointment booked.");
    } finally {
        console.log("Booking transaction:", status);
    }
}

try {
    bookAppointment(false);
} catch (error) {
    console.log(error.message);
}

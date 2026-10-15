function validatePatient(name, email, password) {
    if (!/^[A-Za-z ]+$/.test(name.trim())) {
        return "Name must contain only letters and spaces.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "Enter a valid email address.";
    }

    if (password.length < 8) {
        return "Password must have at least 8 characters.";
    }

    return "";
}

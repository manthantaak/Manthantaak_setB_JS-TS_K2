class Patient {
    constructor(patientId, patientName, age, disease) {
        this.patientId = patientId;
        this.patientName = patientName;
        this.age = age;
        this.disease = disease;
    }

    displayRecord() {
        console.log(this.patientId, this.patientName, this.age, this.disease);
    }
}

const patient = new Patient(1, "Raj", 22, "Fever");
patient.displayRecord();

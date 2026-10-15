interface MedicalService {
    provideService(): string;
}

class Doctor implements MedicalService {
    provideService(): string {
        return "The doctor is providing a medical service.";
    }
}

const doctor = new Doctor();
console.log(doctor.provideService());

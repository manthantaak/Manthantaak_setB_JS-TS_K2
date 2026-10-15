abstract class HospitalStaff {
    constructor(public name: string) {}

    abstract getSalary(): number;
    abstract getDesignation(): string;
}

class Doctor extends HospitalStaff {
    getSalary(): number {
        return 80000;
    }

    getDesignation(): string {
        return "Doctor";
    }
}

class Nurse extends HospitalStaff {
    getSalary(): number {
        return 40000;
    }

    getDesignation(): string {
        return "Nurse";
    }
}

const doctor = new Doctor("Mehta");
const nurse = new Nurse("Anita");
console.log(doctor.name, doctor.getDesignation(), doctor.getSalary());
console.log(nurse.name, nurse.getDesignation(), nurse.getSalary());

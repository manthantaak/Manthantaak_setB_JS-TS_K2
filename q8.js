class Receptionist {
    constructor(name, employeeId, department, experience) {
        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
        this.experience = experience;
    }

    displayInfo() {
        console.log(this.name, this.employeeId, this.department, this.experience);
    }
}

const receptionist = new Receptionist("Raj", 6, "Reception", 3);
receptionist.displayInfo();

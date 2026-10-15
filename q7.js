class Department {
    constructor(departmentName, departmentId, floorNumber) {
        this.departmentName = departmentName;
        this.departmentId = departmentId;
        this.floorNumber = floorNumber;
    }

    displayRecord() {
        console.log(this.departmentName, this.departmentId, this.floorNumber);
    }
}

const department = new Department("Cardiology", 4, 2);
department.displayRecord();

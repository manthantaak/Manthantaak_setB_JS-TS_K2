const mysql = require("mysql2/promise");

async function createPatient(connection, patient) {
    const sql = `
        INSERT INTO patient (patientid, name, age, disease, contactNumber)
        VALUES (?, ?, ?, ?, ?)
    `;
    await connection.execute(sql, [
        patient.patientId,
        patient.name,
        patient.age,
        patient.disease,
        patient.contactNumber
    ]);
}

async function getPatient(connection, patientId) {
    const [rows] = await connection.execute(
        "SELECT * FROM patient WHERE patientid = ?",
        [patientId]
    );
    return rows[0];
}

async function updatePatient(connection, patientId, disease) {
    await connection.execute(
        "UPDATE patient SET disease = ? WHERE patientid = ?",
        [disease, patientId]
    );
}

async function deletePatient(connection, patientId) {
    await connection.execute(
        "DELETE FROM patient WHERE patientid = ?",
        [patientId]
    );
}

async function main() {
    const connection = await mysql.createConnection({
        host:  "localhost",
        user:  "root",
        password: "",
        database: "hospital"
    });

    try {
        const [rows] = await connection.execute(
            
        );
        const patientId = rows[0].nextId;

        await createPatient(connection, {
            patientId,
            name: "Raj",
            age: 22,
            disease: "Fever",
            contactNumber: 987654321
        });
        console.log("Added:", await getPatient(connection, patientId));

        await updatePatient(connection, patientId, "Recovered");
        console.log("Updated:", await getPatient(connection, patientId));

        await deletePatient(connection, patientId);
        console.log("Patient deleted.");
    } finally {
        await connection.end();
    }
}


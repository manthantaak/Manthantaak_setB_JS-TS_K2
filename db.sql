CREATE DATABASE IF NOT EXISTS hospital;
USE hospital;

CREATE TABLE IF NOT EXISTS patient (
    patientid INT,
    name VARCHAR(50),
    age INT,
    disease VARCHAR(50),
    contactNumber INT
);
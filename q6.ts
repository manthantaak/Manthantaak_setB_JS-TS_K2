function getPatientInfo<T>(info: T): T {
    return info;
}

console.log(getPatientInfo<string>("Patient: Raj"));
console.log(getPatientInfo<number>(101));

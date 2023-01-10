let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};
console.log(student);
const propToBeDeleted = 'rollno';
delete student[propToBeDeleted];
console.log(student);
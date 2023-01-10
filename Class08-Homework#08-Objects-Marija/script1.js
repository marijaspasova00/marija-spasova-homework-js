let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};
console.log(student);
function retreiveValues (inputName, inputSclass, inputRollno){
    this.name = inputName;
    this.sclass = inputSclass;
    this.rollno = inputRollno;
    this.getVals = function(){
        return `"${this.name}", "${this.sclass}",${this.rollno}`;
    };
};
const student1 = new retreiveValues("David Rayy","VI", 12);
console.log(student1.getVals());
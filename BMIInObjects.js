const johnBMI = {
    firstName: "John",
    lastName: "Smith",
    johnWeight: 92,
    johnHeight: 1.95,
    calcBMI: function () {

        return calcBMI = this.johnWeight / this.johnHeight ** 2
    }
};


const markBMI = {
    firstName: "Mark",
    lastName: "Miller",
    markWeight: 78,
    markHeight: 1.69,
    calcBMI: function () {

        return calcBMI = this.markWeight / this.markHeight ** 2
    }

};

console.log(markBMI.calcBMI() > johnBMI.calcBMI())

if (johnBMI.calcBMI() > markBMI.calcBMI()) {
    console.log(`${johnBMI.firstName} ${johnBMI.lastName} has the greater BMI value which is ${johnBMI.calcBMI()}`)


} else { console.log(`${markBMI.firstName}  ${markBMI.lastName} has the greater BMI value which is ${markBMI.calcBMI()}`) }

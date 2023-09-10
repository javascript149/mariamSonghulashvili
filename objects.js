let person = {
    firstName : "Mate",
    lastName: "Gotua",
    location: "Tbilisi",
    age: "27",
    avarageSalary: "800",

};
alert(person.firstName);

person['gender'] = 'male';

alert(person.gender);

delete person.lastName;
alert(person.lastName);


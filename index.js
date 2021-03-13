//array to hold the people created by the program
const people = [];

//factory function to create the list of participating members 
function personMaker(name, family, role) {
    person = {
        name: name,
        family: family,
        role: role,
    }
    people.push(person);
};

//make simmonsSquad
personMaker('Brian', 'simmonsSquad', 'adult');
personMaker('Jackie', 'simmonsSquad', 'adult');
personMaker('Quinn', 'simmonsSquad', 'child');
personMaker('Grace', 'simmonsSquad', 'child');
//make kamClan
personMaker('Pete', 'kamClan', 'adult');
personMaker('Michelle', 'kamClan', 'adult');
personMaker('Joanna', 'kamClan', 'child');
//make hanFam
personMaker('John', 'hanFam', 'adult');
personMaker('Cathie', 'hanFam', 'adult');
personMaker('Trish', 'hanFam', 'adult');
//make herronHill
personMaker('Steve', 'herronHill', 'adult');
personMaker('Pennie', 'herronHill', 'adult');
personMaker('Michael', 'herronHill', 'adult');
personMaker('Lauren', 'herronHill', 'adult');
//make southerners
personMaker('JT', 'southerners', 'adult');
personMaker('Katie', 'southerners', 'adult');
personMaker('Nolan', 'southerners', 'child');
personMaker('Reese', 'southerners', 'child');

console.log(people);


function assignToSimmonsFamily() {
    const participatingFamilies = ['simmonsSquad', 'herronHill', 'southerners'];
    const simmonsFam = [];
    for (i = 0; i < participatingFamilies.length; i++) {
        for (j = 0; j < person.length; j++) {
            if (person.family === i) {
                person.push(simmonsFam) 
            };
        };
    };
    console.log(simmonsFam)
};

//assignToSimmonsFamily();
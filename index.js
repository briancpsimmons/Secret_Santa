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

//function to assign people into Simmons Secret Santa
const simmonsFamily = () => {
    const family = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].family === 'simmonsSquad' || people[i].family === 'herronHill' || people[i].family === 'southerners' ) {
            family.push(people[i]);
        }
    }
    return family
};

//function to assign people into Hanrahan Secret Santa
const hanrahanFamily = () => {
    const family = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].family === 'simmonsSquad' || people[i].family === 'kamClan' || people[i].family === 'hanFam' ) {
            family.push(people[i]);
        }
    }
    return family
};

//function to randomly assign Secret Santas to recipients across families
const createPairs = arr => {
    var pairs = {
        santa: [], 
        recipient: [],
    };
    var usedFamily = ['default'];
    for (let i = 0; i < arr.length; i++) {
        var elligibleFamily = [];
        var inelligibleFamily = [];
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].family !== arr[j].family) {
                elligibleFamily.push(arr[j])
            } else {
                inelligibleFamily.push(arr[j])
            }
        };
//need to loop through the elligibile family array and pick a random person that is not also already in usedFamily   
        do {
            let wastedFamily =[];
            let randomElligible = elligibleFamily[(Math.floor(Math.random() * elligibleFamily.length))];
            for (let k = 0; k < usedFamily.length; k++) {
                if (randomElligible !== usedFamily[k]) {
                    pairs.recipient.push(randomElligible);
                } else {
                    wastedFamily.push(randomElligible)
                }
                usedFamily.push(randomElligible);
            }
        }
        while (usedFamily.length !== pairs.santa.length);
    };
    pairs.santa.push(arr[i].name);
//pushes the santa and final recipient into the pairs array
    return pairs
};

console.log(createPairs(simmonsFamily()));
console.log(createPairs(hanrahanFamily()));
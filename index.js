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
//holding variable for my final matched pairs
    var pairs = {
        santa: [], 
        recipient: [],
    };
//holding variable for family members already matched as receipients
    var usedFamilyMembers = [];
    for (let i = 0; i < arr.length; i++) {
        var elligibleFamilyMembers = [];
        var inelligibleFamilyMembers = [];
//this part creates the list of ellegibile family members for each member of the input array: SH made this work for me
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].family !== arr[j].family && (usedFamilyMembers.indexOf(arr[j].name) === -1)) {
                elligibleFamilyMembers.push(arr[j].name)
            } else {
                inelligibleFamilyMembers.push(arr[j].name)
            }
        };
//STUCK HERE!!!
//need to loop through the elligibile family array and pick a random person that has not already been paired   
        //do 
        {
            randomElligible = elligibleFamilyMembers[Math.floor(Math.random() * elligibleFamilyMembers.length)];
            pairs.recipient.push(randomElligible);
            usedFamilyMembers.push(randomElligible);
        }
        //while (usedFamily === randomElligible)
//pushes santa values into the pairs object
    pairs.santa.push(arr[i].name);
    };
//returns each santa + recipient matched pair
    return pairs
};

console.log(createPairs(simmonsFamily()));
console.log(createPairs(hanrahanFamily()));
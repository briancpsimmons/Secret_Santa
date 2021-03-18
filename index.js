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
//personMaker('Quinn', 'simmonsSquad', 'child');
//personMaker('Grace', 'simmonsSquad', 'child');
//make kamClan
personMaker('Pete', 'kamClan', 'adult');
personMaker('Michelle', 'kamClan', 'adult');
//personMaker('Joanna', 'kamClan', 'child');
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
//personMaker('Nolan', 'southerners', 'child');
//personMaker('Reese', 'southerners', 'child');

//   <<<IDEALLY WOULD RE-WRITE THIS FUNCTION TO WORK ACROSS ANY INPUT FAMILY>>>

//function to assign from people into the Simmons family Secret Santa
const simmonsFamilyMembers = () => {
    const family = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].family === 'simmonsSquad' || people[i].family === 'herronHill' || people[i].family === 'southerners' ) {
            family.push(people[i]);
        }
    }
    return family
};
//function to assign from people into the Hanrahan family Secret Santa
const hanrahanFamilyMembers = () => {
    const family = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].family === 'simmonsSquad' || people[i].family === 'kamClan' || people[i].family === 'hanFam' ) {
            family.push(people[i]);
        }
    }
    return family
};

//function to randomly assign recipients to Secret Santas
const createPairs = arr => {
//holding variable for my final matched Santa/recipient pairs
    var pairs = {
        santa: [], 
        recipient: [],
    };
//holding variable for family members already matched as receipients
    var usedFamilyMembers = [];
//start looping through each member of the array
    for (let i = 0; i < arr.length; i++) {
//holding variables for elligibile and inelligible family members for each person in the array
        var elligibleFamilyMembers = [];
        var inelligibleFamilyMembers = [];
//creates the list of ellegibile family members for each member of the input array: SH made this work for me
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].family !== arr[j].family && (usedFamilyMembers.indexOf(arr[j].name) === -1)) {
                elligibleFamilyMembers.push(arr[j].name)
            } else {
                inelligibleFamilyMembers.push(arr[j].name)
            }
        };
//randomly selects from the list of elligible family meembers for each person in the array and assigns them as recipient while also exlcluding them from future selection   
    randomElligible = elligibleFamilyMembers[Math.floor(Math.random() * elligibleFamilyMembers.length)];
    usedFamilyMembers.push(randomElligible);
//pushes santa and recipient values into the pairs object
    pairs.santa.push(arr[i].name);
    pairs.recipient.push(randomElligible);
};
//returns each santa + recipient matched pair
    return pairs
};

console.log(createPairs(simmonsFamilyMembers()));
console.log(createPairs(hanrahanFamilyMembers()));
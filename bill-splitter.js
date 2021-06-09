const prompt = require('prompt-sync')();
let person1 = prompt('Please enter how much Person 1 paid:  ');
let person2 = prompt('Please enter how much Person 2 paid:  ');

person1 = Number(person1);
person2 = Number(person2);

const owed = ((person1+person2)/2)-person1;

// ((2+4)/2)-2
// ((4+2)/2)-4

if (person1 === person2){
    console.log('Neither owes')
}
else if (owed > 0){
    console.log('Person 1 owes Person 2', owed, 'dollars')
}
else if (owed < 0){
    console.log('Person 2 owes Person 1', owed * -1, 'dollars')
}

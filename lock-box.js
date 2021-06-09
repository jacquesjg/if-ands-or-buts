const prompt = require('prompt-sync')();
const userInput = prompt('Please enter Lockbox Pin:  ')
const pin = ('1234');
if (pin === userInput){
    console.log('Success')
} else {
    console.log('Failure')
}

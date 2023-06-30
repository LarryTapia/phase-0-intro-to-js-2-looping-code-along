// Code your solutions in this file

const names = [];
function writeCards(names, eventName){
    for (let i = 0; i < names.length; i++) {
        names[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    }

    return names;
}

function countDown(number){
    for(let i = number; i >= 0; i--){
        console.log(i);
    }
}
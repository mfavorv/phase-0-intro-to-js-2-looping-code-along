// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = "birthday";

function writeCards(names, eventName) {
  let surprise = [];
  for (let c = 0; c < 3; c++) {
    surprise.push(`Thank you, ${names[c]}, for the wonderful ${eventName} gift!`)
  }
return surprise;
}

function countDown(indexNumbers){
    let indexNumber = 10;
    while(indexNumber > -1){
    console.log (indexNumber);
    indexNumber = indexNumber -= 1;
    }
}




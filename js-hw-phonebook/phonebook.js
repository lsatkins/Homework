//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

// Default contacts are: Melissa, Igor, and Jazz

let phoneBook = [
  {
    Name: "Melissa",
    'Phone Number': "584-394-5857"
  },
  {
    Name: "Igor",
    'Phone Number': "857-485-2935"
  },
  {
    Name: "Jazz",
    'Phone Number': "334-584-2345"
  }

]

let quit = false;

while(quit != true){
  let menu = Number(prompt(`
  Electronic Phone Book
  =====================
  1. Look up an entry
  2. Set an entry
  3. Delete an entry
  4. List all entries
  5. Quit
  What do you want to do (1-5)?: `));

  let name = "";

switch(menu){

  case 1:
    let lookUp = prompt("Who do you want to look up? ");
    name = lookUp;
    for(let obj of phoneBook){
      if(obj.Name == lookUp){ 
        console.log(`Found entry for ${name}: ${obj['Phone Number']}`);
      }
    }
    break;

  case 2:
    let addName = prompt("Name: ");
    name = addName;
    phoneBook.push({Name: addName})
    let addNumber = String(prompt("Number: "))
    phoneBook[phoneBook.length - 1]['Phone Number'] = addNumber;
    console.log(`Entry stored for ${name}`);
    break;

  case 3:
    let delName = prompt("Name: ")
    name = delName;
    for(let i = 0; i <= phoneBook.length -1; i++){
      if(phoneBook[i].Name == name){
        phoneBook.splice(i,1);
        break;
      }
    }
    console.log(`Deleted entry for ${name}`);
    break;

    case 4:
      for(let i = 0; i <= phoneBook.length - 1; i++){
        console.log(`Found entry for ${phoneBook[i]['Name']}: ${phoneBook[i]['Phone Number']}`);
      }
      break;

    case 5:
      quit = true;
      break;

    default:
      break;

      
    }
}

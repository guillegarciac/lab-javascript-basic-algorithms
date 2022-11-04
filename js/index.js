//Declaration
const hacker1 = "Guille";
const hacker2 = "Carlos";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
function getCharacterLength(a, b) {
  let result;
  if (a.length > b.length) {
      result = `The driver has the longest name, it has ${a.length} characters`;
    } else if (a.length < b.length) {
      result = `The navigator has the longest name, it has ${b.length} characters`;;
    } else {
      result = `Wow, you both have equally long names, ${a.length || b.length} characters!.`;
    }
  console.log(result)
  return result; 
};    
getCharacterLength (hacker1, hacker2);

// 3.1 - Via Loop
function nameViaLoop (hackerName) {
  let finalResult = '';
  for (let i = 0; i < hackerName.length; i++) {
    finalResult += hackerName[i] + ' ';
  }
  console.log(finalResult.toUpperCase().trimEnd())
  return hackerName.toUpperCase().trimEnd();
};
nameViaLoop (hacker2);

// 3.1 - via Array (testing Methods)
const toCapital = function (hackerName) {
  const splitNameSpace = hackerName.toUpperCase().split('').join(' ');
  return splitNameSpace;
};

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
function reverseViaLoop (secondHackerName) {
  let reverseResult = '';
  for (let i = secondHackerName.length - 1; i >= 0; i--) { 
    // the total length of hacker2 is 5 starting from "G" = 0. 
    // Now, (5 minus 1 refers to the last letter of hacker2 = 'e'). 
    // As long as i >=0 it will iterate backwards by decreasin [i] in each iteration.
    reverseResult += secondHackerName[i];
  }
  console.log(reverseResult)
  return reverseResult;
};
reverseViaLoop (hacker1);


// 3.3 Depending on the lexicographic order of the strings, print:

const nanameArray = ["Alberto", "Belinda"]

let nameArray = ["Alberto", "Alberto"]
function hasSameName (nameArray) {
  let result = '';
  for (let i = 0; i < nameArray.length ; i++) {
    if (nameArray[0] < nameArray[1]) {
      result = 'The driver name goes first.';
    } else if (nameArray[0] > nameArray[1]) {
      result = 'Yo, the navigator goes first definitely.';
    } else { result = 'What?! You both have the same name?'}  
  }
  console.log(result);
  return result;
}
hasSameName (nameArray);
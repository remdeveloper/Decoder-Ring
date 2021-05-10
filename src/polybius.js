function polybius(input, encode = true) {
  const alphabet = [
    { char: 'a', pos: 11 }, { char: 'b', pos: 21 }, { char: 'c', pos: 31 }, { char: 'd', pos: 41 }, { char: 'e', pos: 51 },
    { char: 'f', pos: 12 }, { char: 'g', pos: 22 }, { char: 'h', pos: 32 }, { char: 'i', pos: 42 }, { char: 'j', pos: 42 }, { char: 'k', pos: 52 },
    { char: 'l', pos: 13 }, { char: 'm', pos: 23 }, { char: 'n', pos: 33 }, { char: 'o', pos: 43 }, { char: 'p', pos: 53 },
    { char: 'q', pos: 14 }, { char: 'r', pos: 24 }, { char: 's', pos: 34 }, { char: 't', pos: 44 }, { char: 'u', pos: 54 },
    { char: 'v', pos: 15 }, { char: 'w', pos: 25 }, { char: 'x', pos: 35 }, { char: 'y', pos: 45 }, { char: 'z', pos: 55 }, { char: ' ', pos: 56}
  ];
  let lowerCased = input.toLowerCase();
  let found = "";
  let resultsArray = []; 
  let excludeSpaces = input.replace(/ /g, ""); //remove spaces
  let pairedArray = [];
  let decodeFind = "";
  let inputReplaced = input.replace(/ /g, '56')  //replace spaces with 56
  let result = ""

  if (encode === false) {
    if (excludeSpaces.length % 2 !== 0) {
      //if string length is not even, return false
      //console.log(false);
      return false;
    }



    //string  of numbers needs to be converted into letters
    //string place into pairs in array
    //using loop, find a match alphabet.pos
    //
    for (let i = 0; i < inputReplaced.length; i = i + 2) {
      pairedArray.push(`${inputReplaced[i]}${inputReplaced[i + 1]}`); //example pairedArray ['11',' 1', '21']
    }
    //console.log(pairedArray);

    for (let pair of pairedArray) { //loop through each pair
      decodeFind = alphabet.find((letter) => { 
        return pair == letter.pos; //return the object when match found
      });
      result = result + decodeFind.char //add each letter to result
    }
    
    return result.replace(/i/, '(i/j)')      
    
  } //end of if loop
  else { //when encode is true
    for (let i = 0; i < lowerCased.length; i++) {
      //loop through each letter in input
      //need way to fix spaces
      //need way to join things in array to combine

      if (lowerCased[i] === " ") {
        //if there is a space, push a space into the array
        resultsArray.push(" ");
      } else {
        //if there is not a space, loop through entire alphabet to find match lowerCased[i]
        found = alphabet.find((letter) => {
          return letter.char === lowerCased[i]; //returns object that matches lowerCased[i]
        });
        // console.log(found)
        resultsArray.push(found.pos); //push the pos of the matching object to resultsArray
      }
    } //end of for loop
    let joined = resultsArray.join(""); //join ex: [1,' ',3] -> 1 3
    return joined
  }
}

// console.log(polybius("11 21 11", false))
// console.log(polybius("1234", false))
// console.log(polybius("4432423352125413", false))
// console.log(polybius("thinkful"))
// console.log(polybius("Hello world"))

module.exports = polybius;

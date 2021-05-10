function caesar(input, shift = 0, encode = true) {
    //keep spaces & special characters
    //if shift is not present, 0, <25, >25, function should return false
    //make it all toLowerCase()
    //method of wrapping around alphabet (a + b) % 26
    let lowerCased = ""
    let result = ""
    let convertedNumber = ""
    let shiftedNumber = ""
    let shiftedLetter = ""
    if (shift < -25 || shift > 25 || shift  === 0 ){
        return false
    }
    if (encode === false){   //switch sign of shift to decode
        shift = shift * -1
    }

  
    lowerCased  = input.toLowerCase() 
    for (let i = 0 ; i < lowerCased.length; i++){ //loop over the string
        //i needs to be that letter + shift % 26
        //var n = str.charCodeAt(0);
        //var res = String.fromCharCode(65);
        convertedNumber = lowerCased.charCodeAt(i) // converts the letter to ascii number
        if (Math.sign(shift) === 1){   //if shift is positive
                    
            if(convertedNumber >= 97 || convertedNumber<= 122){
                shiftedNumber = ((convertedNumber - 97 + shift) % 26) + 97  //add the shift to the number
            }

            if (convertedNumber < 97 || convertedNumber > 122){ //if it's not in the alphabet, 
                shiftedNumber = convertedNumber
            }
        }
        if (Math.sign(shift) === -1){
            if(convertedNumber >= 97 || convertedNumber<= 122){
                shiftedNumber = ((convertedNumber - 122 + shift) % 26) + 122  //add the shift to the number
            }
            if (convertedNumber < 97 || convertedNumber > 122){ //if it's not in the alphabet, 
                shiftedNumber = convertedNumber
            }
        }

        // after converting character to #, if statement to ensure it is within range of normal alphabet (97~122)          
        shiftedLetter+= String.fromCharCode(shiftedNumber) // takes in ascii value and outputs decoded letter
        
    }


     

// console.log(lowerCased)
// console.log(result)
// console.log(convertedNumber)
// console.log(shiftedLetter)
return shiftedLetter
}

// console.log("decode ba = " + caesar('ba', 1, false))
// console.log("encode az = " + caesar('az',1))
// console.log(caesar('abc 123!',1))
module.exports = caesar;

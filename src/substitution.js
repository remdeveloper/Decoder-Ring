function substitution(input, alphabet = '', encode = true) {
  let normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  //let substitution = alphabet; 
  let result = "";
  let index = 0;
  input = input.toLowerCase();
  if (alphabet.length !== 26) {  
    //checking alphabet length
    return false;
  }

  if (unique(alphabet) === false) {
    //checking alphabet all unique letters
    return false;
  }

if (encode === true){ //encoding
  for (let i = 0; i < input.length; i++) {
    //loop through input string
    index = normalAlphabet.indexOf(input[i]); //  input[0] is a   abc.indexOf(a) is 0   index of a in the normal aphabet
    if (input[i] === " ") { //if there is a space,  add a space to the result
      result = result + " ";
    } else {
      result = result + alphabet.charAt(index); //alphabet.charAt would be the new letter
    }
  }
  //console.log(result);
  return result;

} else{ //decoding
  for (let i = 0 ; i < input.length; i ++){
    //loop through input string
    index = alphabet.indexOf(input[i])  //b[0] is b    alphabet.indexofb  is 24, need to convert to 24th letter of normal alphabet
  
  if (input[i] === " ") { //if there is a space,  add a space to the result
    result = result + " ";
  }
  else {
    result = result + normalAlphabet.charAt(index); //normalalphabet.charAt would be the new letter
  }
}
  //console.log(result);
  return result;

 
}
}

function unique(alphabet) {
  return new Set(alphabet).size == alphabet.length;
}

//console.log(substitution("a bc", "$oyqmcgrukswaflnthdjpzibev", true));

//console.log(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")); //works
// console.log(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")); //works
//console.log(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)); //does not work, should give thinkful
// console.log(substitution("thinkful", "short")); //works false
// console.log(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")); //works false
// console.log(substitution("thinkful", "")); //works false
// console.log(substitution("thinkful")); //works false
module.exports = substitution;

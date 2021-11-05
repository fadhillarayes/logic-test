function checkVocal(string) {
  // Start Code Here
  const vocal = "aiueo";
  var consonant = [];
  for (var i = 0; i < string.length; i++) {
    if (vocal.includes(string[i]) && !vocal.includes(string[i])) {
      console.log("false");
    } else {
      return true;
    }
  }
  return vocal;
}

console.log(checkVocal("iueoaAAaAA")); //output: true
console.log(checkVocal("iuesdoaAAasfaAA")); //output: false
console.log(checkVocal("iEEuoaAAaAA")); //output: true
console.log(checkVocal("iuesdoaAAasfaAA")); //output: false
console.log(checkVocal("iueoaAIIUUaAA")); //output: true
console.log(checkVocal("iuedoaAAasfaAAmmCCB")); //output: false

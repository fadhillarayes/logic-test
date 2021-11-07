function checkVocal(string) {
  // Start Code Here
  var count = 0;
  var vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var consonant = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (i = 0; i < string.length; i++) {
    if (consonant.includes(string[i]) && vowel.includes(string[i])) {
      // count++;
      console.log("false");
    } else if (consonant.includes(string[i])) {
      console.log("false");
    } else if (vowel.includes(string[i])) {
      console.log("true");
    }
  }
  return count;
}

console.log(checkVocal("iueoaAAaAA")); //output: true
console.log(checkVocal("iuesdoaAAasfaAA")); //output: false
console.log(checkVocal("iEEuoaAAaAA")); //output: true
console.log(checkVocal("iuesdoaAAasfaAA")); //output: false
console.log(checkVocal("iueoaAIIUUaAA")); //output: true
console.log(checkVocal("iuedoaAAasfaAAmmCCB")); //output: false

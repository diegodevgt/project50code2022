function fearNotLetter(str) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let counter = 0;
  let res; 
  while(counter < str.length){
    let currentChar = str[counter];
    let nextChar = str[counter+1]
    let indexOfAlphabet = alphabet.indexOf(currentChar);
    if(indexOfAlphabet !== -1){
      if(nextChar !== alphabet[indexOfAlphabet + 1]){
        res = alphabet[indexOfAlphabet + 1];
        counter = str.length;
      }
    }
    counter++;
  }
  return res;
}

fearNotLetter("abce");
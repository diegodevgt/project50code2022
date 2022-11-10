function myReplace(str, before, after) {
  let indexBefore = str.indexOf(before);
  if(indexBefore !== -1){
    let isUpperCase = str[indexBefore].toUpperCase() === str[indexBefore];
    let newReplace = after;
    if(isUpperCase){
      newReplace = newReplace[0].toUpperCase() + newReplace.substr(1)
    }else{
      newReplace = newReplace.toLowerCase();
    }
    str = str.replace(before, newReplace);
  }
  console.log(str);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
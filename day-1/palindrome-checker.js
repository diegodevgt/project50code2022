function palindrome(str) {
  console.log(str);
  let newStr = str.replace(/\,|\.| |_|-|:|\/|\(|\)|/gi, '').toLowerCase();
  let isPalindromo = true;
  let arr = [...newStr];
  console.log(arr);
  arr.forEach((item,index)=>{
    let letterBack = (arr[(arr.length-1) - index]);
    if(item !== letterBack){
      isPalindromo = false;
    }
    console.log(item, letterBack, isPalindromo);
  })
  return isPalindromo;
}

// palindrome("eye");
// palindrome("not a palindrome")
// palindrome("A man, a plan, a canal. Panama")
// palindrome("almostomla")
palindrome("0_0 (: /-\ :) 0-0")
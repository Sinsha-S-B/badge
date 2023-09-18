//+++++++++=string input

function palindrome(string) {
  let n = string.length;

  for (i = 0; i < n / 2; i++) {
    if (string[i] !== string[n - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("malayalam"));

//+++++++++++++=input as number using toString method

function palindrome(num) {
  let str = num.toString();
  let n = str.length;

  for (i = 0; i < n / 2; i++) {
    if (str[i] !== str[n - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome(1232));

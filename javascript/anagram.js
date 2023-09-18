let a = "sinshao";
let b = "sinsha";

if (a.length == b.length) {
  flag = 0;
  for (i = 0; i < a.length; i++) {
    count = 0;
    for (j = 0; j < a.length; j++) {
      if (a[i] == b[j]) {
        count = 1;
        break;
      }
    }
    
    if (count == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    console.log("is anagram");
  } else {
    console.log("not anagram");
  }
} else {
  console.log("not anagram");
}

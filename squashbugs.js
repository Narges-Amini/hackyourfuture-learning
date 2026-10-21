//Squash the bugs
function findLongest(str) {
  spl = str.split(" ");
  longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    } else {
      continue;
    }
  }
  return longest;
}
console.log(findLongest("apple"));

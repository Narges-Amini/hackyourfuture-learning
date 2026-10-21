// colours have certain psychological meanings for us.

const array = [
  ["white", "goodness"],
  ["green", "peaceful"],
];
//returns [{white: 'goodness'},
let resultArray = [];
function colourAssociation(array) {
  for (let i = 0; i < array.length; i++) {
    resultArray.push({ [array[i][0]]: array[i][1] });
  }
  return resultArray;
}
console.log(colourAssociation(array));

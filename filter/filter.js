// my custom array filter
// write your own method which implements Array.prototype.filter

function customFilter(callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] >= 25) {
      newArr.push(callback(this[i], i, this));
    }
  }
  return newArr;
}

Array.prototype.customFilter = customFilter;

const numbers = [1, 75, 3, 8, 12, 18, 62, 55, 201];
let filteredNumbers = numbers.customFilter((value) => {
  debugger;
  return value;
});

Array.prototype.filter = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) {
      arr.push(this[i]);
    }
  }
  return arr;
};

console.log([2, 3, 4, 5, 6, 7].filter());

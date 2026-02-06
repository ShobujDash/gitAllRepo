const Computer = function (name, model) {
  this.name = name;
  this.model = model;

  // this.aboutComputer = function () {
  //   console.log(`this computer is ${this.name} and the model is ${this.model}`);
  // };
};

Computer.prototype.aboutComputer = function () {
  console.log(`this computer is ${this.name} and the model is ${this.model}`);
};

// const dell = new Computer("dell", "dk125");
// const hp = new Computer("hp", "dk125");
// console.log(hp);

// dell.aboutComputer();
// hp.aboutComputer();







// const arr = [2, 5, 67, 45, 4, 4, 56, 54, 33]

// const evenNumber = arr.filter(element => element % 2 === 0)
// console.log(Array)
// console.log(new Array())

// console.log(evenNumber)






Array.prototype.filter = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++){
    if (this[i] % 2 === 0) {
      arr.push(this[i])
    }
  }
  return arr
}

console.log([2, 3, 4, 5, 6, 7].filter());
const Computer = function (name, model) {
  this.name = name;
  this.model = model;

  this.aboutComputer = function () {
    console.log(`this computer is ${this.name} and the model is ${this.model}`)
  }
}
const dell = new Computer("dell","dk125")
const hp = new Computer("hp","dk125")
console.log(hp)

dell.aboutComputer()
hp.aboutComputer()

// const obj = {}
// obj.name = "Shobuj Das"
// obj.playlist = 2

// console.log(obj)


// 4 rules of Function Constructor
      // 1. create on empty object {}
      // 2. function is called this = {}
      // 3. {} linked to the prototype
      // 4. {} will return autometically
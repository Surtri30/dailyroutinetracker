class Routine {
  constructor(name) {
    this.id = Date.now();
    this.name = name;
    this.completed = false;
  }
}

module.exports = Routine;
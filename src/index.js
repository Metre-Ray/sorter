class Sorter {
  constructor() {
    this.data = [];
    this.comparator = function (a, b) {
      if (a > b) return 1;
      if (a <= b) return -1;
    }
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
    indices.sort(function (a, b) {
      if (a > b) return 1;
      if (a <= b) return -1;
    })
    var length = indices.length;
    for (var j = 0; j < length - 1; j++) {
      for (var i = 0; i < length - 1 - j; i++) {
        if (this.comparator(this.data[indices[i]], this.data[indices[i + 1]]) > 0) {
          [this.data[indices[i]], this.data[indices[i + 1]]] = [this.data[indices[i + 1]], this.data[indices[i]]];
        }
      }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;

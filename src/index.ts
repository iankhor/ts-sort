class Sorter {
  // bad
  constructor(public collection: number[] | string) {}

  private sortArray() {
    const { length } = this.collection;

    // bad
    // type guards to restore access to property in union types of this.collection
    if (this.collection instanceof Array) {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
      }
    }
  }

  private sortString() {
    // bad
    if (typeof this.collection === 'string') {
    }
  }

  sort(): void {
    const { length } = this.collection;

    this.sortArray();
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);

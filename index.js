const Combos = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const NameLengthSortedCombos = Object.keys(Combos).sort(
  (val1, val2) => val2.length - val1.length,
);

class RomanNumber {
  constructor(input) {
    this.inputIsANumber = !isNaN(input);
    this.input = input;
  }

  /**
   * return an number from its roman representaion
   * @returns {Number} number
   */
  toInt() {
    if (this.inputIsANumber) {
      return this.input;
    }

    let stringValue = this.input;
    return NameLengthSortedCombos.reduce((acc, val) => {
      if (val.length === 2) {
        if (stringValue.includes(val)) {
          acc += Combos[val];
          stringValue = stringValue.replace(val, '');
        }
      } else {
        const re = new RegExp(val, 'g');
        const count = (stringValue.match(re) || []).length;
        if (count > 0) {
          acc += count * Combos[val];
        }
      }
      return acc;
    }, 0);
  }

  /**
   * return a roman number given a number in the range 1 - 3999
   * @returns {String} roman representation
   */
  toString() {
    if (!this.inputIsANumber) {
      return this.input;
    }

    let roman = '';
    let diff = this.input;
    Object.keys(Combos).forEach((key) => {
      const val = Combos[key];
      while (diff - val >= 0) {
        roman += key;
        diff -= val;
      }
    });

    return roman;
  }
}

module.exports = RomanNumber;

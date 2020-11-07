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
    if (this.inputIsANumber)
      return this.input;
  }

  /**
   * return a roman number given a number in the range 1 - 3999
   * @returns {String} roman representation
   */
  toString() {
    if (!this.inputIsANumber)
      return this.input;

    let roman = '';
    let diff = this.input;
    for (let propName in Combos) {
      const val = Combos[propName];
      while (diff - val >= 0) {
        roman += propName;
        diff -= val;
      }
    }
    return roman;
  }
}


module.exports = RomanNumber;

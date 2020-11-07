const RomanNumber = require('./');

const tests = {
  errors: [
    { input: null, output: new Error('Value required') },
    { input: '', output: new Error('Value required') },
    { input: 'error', output: new Error('Invalid value') },
    { input: 'IIII', output: new Error('Invalid value') },
    { input: '1473', output: new Error('Invalid value') },
    { input: 'CD1X', output: new Error('Invalid value') },
    { input: 'MMMMCMXCIX', output: new Error('Invalid value') },
    { input: 'MMMMDMXCIX', output: new Error('Invalid value') },
    { input: 10000, output: new Error('Invalid range') },
    { input: 0, output: new Error('Invalid range') },
  ],
  romans: [
    { input: 'I', output: 1 },
    { input: 'III', output: 3 },
    { input: 'IV', output: 4 },
    { input: 'V', output: 5 },
    { input: 'CDXXIX', output: 429 },
    { input: 'MCDLXXXII', output: 1482 },
    { input: 'MCMLXXX', output: 1980 },
  ],
  numbers: [
    { input: 1, output: 'I' },
    { input: 3, output: 'III' },
    { input: 4, output: 'IV' },
    { input: 5, output: 'V' },
    { input: 1968, output: 'MCMLXVIII' },
    { input: 2999, output: 'MMCMXCIX' },
    { input: 3000, output: 'MMM' },
  ]
}


describe('Kodify code challenge', () => {

  describe('tests the error and edge cases', () => {
    tests.errors.forEach(test => {
      try {
        new RomanNumber(test.input)
      }
      catch (err) {
        it(`should return ${test.output}`, () => {
          expect(err).toEqual(test.output);
        });
      }
    });
  });

  describe('tests romans are succesfully converted to numbers', () => {
    tests.romans.forEach(test => {
      const romanNumber = new RomanNumber(test.input)
      it(`should convert ${test.input} to  ${test.output}`, () => {
        expect(romanNumber.toInt()).toBe(test.output);
        expect(romanNumber.toString()).toBe(test.input);
      });
    });
  });

  describe('tests numbers are succesfully converted to romans', () => {
    tests.numbers.forEach(test => {
      const romanNumber = new RomanNumber(test.input)
      it(`should convert ${test.input} to  ${test.output}`, () => {
        expect(romanNumber.toString()).toBe(test.output);
        expect(romanNumber.toInt()).toBe(test.input);
      });
    });
  });

});
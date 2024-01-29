// calculator.test.js
async function importTestDependencies() {
  const chaiModule = await import('chai');
  const expect = chaiModule.expect;
  const calculator = require('../calculator');

  describe('Calculator', function () {
    describe('.add()', function () {
      it('should add two numbers correctly for passing case', function () {
        expect(calculator.add(5, 2)).to.equal(7);
      });

      it('should fail when the expected result of addition is incorrect for failing case', function () {
        expect(calculator.add(5, 2)).to.not.equal(8);
      });
    });

    describe('.sub()', function () {
      it('should subtract the second number from the first number for passing case', function () {
        expect(calculator.sub(5, 2)).to.equal(3);
      });

      it('should fail when the expected result of subtraction is incorrect for failing case', function () {
        expect(calculator.sub(5, 2)).to.not.equal(5);
      });
    });

    describe('.mul()', function () {
      it('should multiply two numbers correctly for passing case', function () {
        expect(calculator.mul(5, 2)).to.equal(10);
      });

      it('should fail when the expected result of multiplication is incorrect for failing case', function () {
        expect(calculator.mul(5, 2)).to.not.equal(12);
      });
    });

    describe('.div()', function () {
      it('should divide the first number by the second number correctly for passing case', function () {
        expect(calculator.div(10, 2)).to.equal(5);
      });

      it('should fail when the expected result of division is incorrect for failing case', function () {
        expect(calculator.div(10, 2)).to.not.equal(2);
      });
    });
  });

  run();
}

importTestDependencies().catch(console.error);

function run() {
  const Mocha = require('mocha');
  const mocha = new Mocha();
  mocha.addFile('test/calculator.test.js');
  mocha.run(failures => {
    if (failures) {
      console.error(`${failures} tests failed.`);
      process.exit(1);
    } else {
      console.log('All tests passed!');
      process.exit(0);
    }
  });
}

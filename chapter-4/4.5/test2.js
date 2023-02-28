describe("calculator", function() {
  let calculator;
  before(function() {
    sinon.stub(window, "prompt")

    prompt.onCall(0).returns("2");
    prompt.onCall(1).returns("3");

    calculator = new Calculator();
    calculator.read();
  });
  
  it("the read method asks for two values using prompt and remembers them in object properties", function() {
    assert.equal(calculator.first, 2);
    assert.equal(calculator.second, 3);
  });

  it("when 2 and 3 are entered, the sum is 5", function() {
    assert.equal(calculator.sum(), 5);
  });

  it("when 2 and 3 are entered, the product is 6", function() {
    assert.equal(calculator.mul(), 6);
  });

  after(function() {
    prompt.restore();
  });
});

describe("calculatorOther", function() {
  let calculatorOther;
  before(function() {
    sinon.stub(window, "prompt")

    prompt.onCall(0).returns("5");
    prompt.onCall(1).returns("13");

    calculatorOther = new Calculator();
    calculatorOther.read();
  });
  
  it("the read method asks for two values using prompt and remembers them in object properties", function() {
    assert.equal(calculatorOther.first, 5);
    assert.equal(calculatorOther.second, 13);
  });

  it("when 5 and 13 are entered, the sum is 18", function() {
    assert.equal(calculatorOther.sum(), 18);
  });

  it("when 5 and 13 are entered, the product is 65", function() {
    assert.equal(calculatorOther.mul(), 65);
  });

  after(function() {
    prompt.restore();
  });
});
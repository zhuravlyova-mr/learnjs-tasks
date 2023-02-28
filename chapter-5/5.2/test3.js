beforeEach(function() {
  sinon.stub(window, "prompt");
});

afterEach(function() {
  prompt.restore();
});

describe("readNumber", function() {

  it("if a number, returns it", function() {
    prompt.returns("234");
    assert.strictEqual(readNumber(), 234);
  });

  it("if 0, returns it", function() {
    prompt.returns("0");
    assert.strictEqual(readNumber(), 0);
  });

  it("continues the loop until meets a number", function() {
    prompt.onCall(0).returns("not a number");
    prompt.onCall(1).returns("not a number again");
    prompt.onCall(2).returns("5");
    assert.strictEqual(readNumber(), 5);
  });

  it("if an empty line, returns null", function() {
    prompt.returns("");
    assert.isNull(readNumber());
  });

  it("if cancel, returns null", function() {
    prompt.returns(null);
    assert.isNull(readNumber());
  });

});
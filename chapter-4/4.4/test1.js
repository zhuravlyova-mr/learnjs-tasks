describe("Калькулятор", function() {
  
  context("Ввод чисел 3 и 6", function() {
    beforeEach(function() {
      sinon.stub(window, "prompt");

      prompt.onCall(0).returns("3");
      prompt.onCall(1).returns("6");

      calculator.read();
    });

    afterEach(function() {
      prompt.restore();
    });
    
    it("read получает два значения", function () {
      assert.equal(calculator.first, 3);
      assert.equal(calculator.second, 6);
    });

    it("сумма равна 9", function() {
      assert.equal(calculator.sum(), 9);
    });

    it("произведение равно 18", function() {
      assert.equal(calculator.mul(), 18);
    });
  });

});

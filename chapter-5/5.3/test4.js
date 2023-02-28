describe("extractCurrencyValue", function() {
  it('$20.4', function() {
    assert.strictEqual(extractCurrencyValue('$20.4'), 20.4);
  });

  it('$2.345', function() {
    assert.strictEqual(extractCurrencyValue('$2.345'), 2.345);
  });
});
describe("ucFirst", function() {
  it('Transform the first symbol to upper case', function() {
    assert.strictEqual(ucFirst("vasja"), "Vasja");
  });

  it("Does not fall on empty lines ", function() {
    assert.strictEqual(ucFirst(""), "");
  });
});
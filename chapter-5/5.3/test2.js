describe("checkSpam", function() {
  it('spam: "where is VIAgra"', function() {
    assert.isTrue(checkSpam('where is VIAgra'));
  });

  it('spam: "XXX is not XXL"', function() {
    assert.isTrue(checkSpam('XXX is not XXL'));
  });

  it('not spam: "XX Century fox..."', function() {
    assert.isFalse(checkSpam('XX Century fox...'));
  });
});
describe("getLastDayOfMonth", function() {
  it("the last of 01.01.2023 - 31", function() {
    assert.equal(getLastDayOfMonth(2023, 0), 31);
  });

  it("the last of 01.02.2023 - 28", function() {
    assert.equal(getLastDayOfMonth(2023, 1), 28);
  });

  it("the last of 01.04.2023 - 30", function() {
    assert.equal(getLastDayOfMonth(2023, 3), 30);
  });
});
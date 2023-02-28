describe("getDateAgo", function() {

  it("1 день до 01.03.2023 -> день 28", function() {
    assert.equal(getDateAgo(new Date(2023, 2, 1), 1), 28);
  });


  it("2 дня до 01.02.2023 -> день 30", function() {
    assert.equal(getDateAgo(new Date(2023, 1, 1), 2), 30);
  });

  it("100 дней до 02.01.2015 -> день 24", function() {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24);
  });

  it("365 дней до 02.01.2015 -> день 2", function() {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
  });

  it("переданный объект date не модифицируется", function() {
    let date = new Date(2023, 1, 2);
    let dateCopy = new Date(date);
    getDateAgo(dateCopy, 100);
    assert.equal(date.getTime(), dateCopy.getTime());
  });

});

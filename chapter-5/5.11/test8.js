describe("formatDate", function() {
  it("1 ms ago as \"just now\"", function() {
    assert.equal(formatDate(new Date(new Date - 1)), 'прямо сейчас');
  });

  it('"30 seconds ago"', function() {
    assert.equal(formatDate(new Date(new Date - 30 * 1000)), "30 сек. назад");
  });

  it('"5 minutes ago"', function() {
    assert.equal(formatDate(new Date(new Date - 5 * 60 * 1000)), "5 мин. назад");
  });

  it("other date as dd.mm.yy hh:mm", function() {
    assert.equal(formatDate(new Date(2022, 4, 2, 1, 2, 3)), "02.05.22 01:02");
  });

  it("another other date as dd.mm.yy hh:mm", function() {
    assert.equal(formatDate(new Date(2021, 0, 1, 9, 50, 33)), "01.01.21 09:50");
  });

});

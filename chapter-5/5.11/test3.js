describe("getLocalDay", function() {
  it("26 февраля 2023 года - воскресенье", function() {
    assert.equal(getLocalDay(new Date(2023, 1, 26)), 7);
  });

  it("28 февраля 2023 года - вторник", function() {
    assert.equal(getLocalDay(new Date(2023, 1, 28)), 2);
  });

  it("8 марта 2023 года - среда", function() {
    assert.equal(getLocalDay(new Date(2023, 2, 8)), 3);
  });

  it("1 апреля 2023 года - суббота", function() {
    assert.equal(getLocalDay(new Date(2023, 3, 1)), 6);
  });

  it("1 мая 2023 года - понедельник", function() {
    assert.equal(getLocalDay(new Date(2023, 4, 1)), 1);
  });

  it("14 сентября 2023 года - четверг", function() {
    assert.equal(getLocalDay(new Date(2023, 8, 14)), 4);
  });

  it("7 июля 2023 - пятница", function() {
    assert.equal(getLocalDay(new Date(2023, 6, 7)), 5);
  });
});

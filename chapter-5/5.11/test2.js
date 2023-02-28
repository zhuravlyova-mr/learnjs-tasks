describe("getWeekDay", function() {
  it("26 февраля 2023 года - воскресенье", function() {
    assert.equal(getWeekDay(new Date(2023, 1, 26)), 'ВС');
  });

  it("28 февраля 2023 года - вторник", function() {
    assert.equal(getWeekDay(new Date(2023, 1, 28)), 'ВТ');
  });

  it("8 марта 2023 года - среда", function() {
    assert.equal(getWeekDay(new Date(2023, 2, 8)), 'СР');
  });

  it("1 апреля 2023 года - суббота", function() {
    assert.equal(getWeekDay(new Date(2023, 3, 1)), 'СБ');
  });

  it("1 мая 2023 года - понедельник", function() {
    assert.equal(getWeekDay(new Date(2023, 4, 1)), 'ПН');
  });

  it("14 сентября 2023 года - четверг", function() {
    assert.equal(getWeekDay(new Date(2023, 8, 14)), 'ЧТ');
  });

  it("7 июля 2023 - пятница", function() {
    assert.equal(getWeekDay(new Date(2023, 6, 7)), 'ПТ');
  });
});
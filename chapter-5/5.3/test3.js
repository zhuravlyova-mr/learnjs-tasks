describe("truncate", function() {
  it("truncates the string to certain length including ...", function() {
    assert.equal(
      truncate("Вот, что мне хотелось бы сказать на эту тему:", 20),
      "Вот, что мне хотело…"
    );
  });

  it("does not change short lines", function() {
    assert.equal(
      truncate("Всем привет!", 20),
      "Всем привет!"
    );
  });

});
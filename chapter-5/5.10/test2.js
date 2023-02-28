describe("topSalary", function() {
  it("returns top-paid employee", function() {
    let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250,
      "Ann" : 400
    };

    assert.equal( topSalary(salaries), "Ann" );
  });

  it("returns null for the empty object", function() {
    assert.isNull( topSalary({}) );
  });
});
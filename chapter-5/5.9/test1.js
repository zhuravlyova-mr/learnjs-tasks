describe("sumSalaries", function() {
  it("returns sum for 3 employees", function() {
    let salaries = {
      "John": 200,
      "Pete": 150,
      "Mary": 350
    };
    assert.equal( sumSalaries(salaries), 700 );
  });

  it("returns sum for 5 employees", function() {
    let salaries = {
      "John": 300,
      "Pete": 150,
      "Mary": 350,
      "Ann" : 200,
      "Rose": 400 
    };

    assert.equal( sumSalaries(salaries), 1400 );
  });

  it("returns 0 for the empty object", function() {
    assert.strictEqual( sumSalaries({}), 0);
  });
});

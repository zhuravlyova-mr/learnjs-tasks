describe("filterRangeInPlace", function() {

  it("returns the filtered values", function() {

    let arr = [5, 3, 8, 1, 6, 9];

    filterRangeInPlace(arr, 1, 5); 

    assert.deepEqual(arr, [5, 3, 1]);
  });

  it("doesn't return anything", function() {
    assert.isUndefined(filterRangeInPlace([1, 2, 3, 4], 1, 5)); 
  });

});
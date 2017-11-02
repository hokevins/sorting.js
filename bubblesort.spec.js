describe('Bubble Sort', function(){
  xit('does not use Array.prototype.sort()', function() {
    spyOn(Array.prototype, 'sort').and.callThrough();
    expect(Array.prototype.sort.calls.count()).toEqual(0);
  });
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array of length 1', function() {
    expect( bubbleSort([3])).toEqual([3]);
  });
  it('handles an array of 2 items', function() {
    expect( bubbleSort([9, 7])).toEqual([7, 9]);
  });
  it('handles an array of multiple items', function() {
    expect( bubbleSort([18, -6, 7, -2, 40, 25])).toEqual([-6, -2, 7, 18, 25, 40]);
  });
  it('BubbleSort is a function', function() {
    expect(typeof bubbleSort).toEqual('function');
  });
  xit('checks the number of comparisons', function() {
    expect(greaterThan()).toHaveBeenCalledTimes(1);
  })
  xit('checks the number of swaps', function() {
    expect(swap()).toHaveBeenCalledTimes(1);
  })
});

// Describe blocks are labeled functions used to organize your tests, including creating function scopes for variables shared across multiple tests. It blocks are labeled tests which may or may not pass, depending on if an error was thrown when running them. Expectations or assertions are functions that may or may not throw an error.


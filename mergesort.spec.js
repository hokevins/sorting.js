describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1, 4, 5], [2, 3, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([])).toEqual( [] );
  });
  it('handles an array of length 1', function() {
    expect( mergeSort([3])).toEqual([3]);
  });
  it('handles an array of 2 items', function() {
    expect( mergeSort([9, 7])).toEqual([7, 9]);
  });
  it('handles an array of multiple items', function() {
    expect( mergeSort([18, -6, 7, -2, 40, 25])).toEqual([-6, -2, 7, 18, 25, 40]);
  });
});

// Describe blocks are labeled functions used to organize your tests, including creating function scopes for variables shared across multiple tests. It blocks are labeled tests which may or may not pass, depending on if an error was thrown when running them. Expectations or assertions are functions that may or may not throw an error.

// 2017-11-03 Sarah:
// describe('Merge', function() {
//    var theFunc = function(a, b) {
//        if (a < b) return -1;
//        if (a > b) return 1;
//        return 0;
//    }
//    it('is able to merge two sorted arrays into one sorted array', function() {
//        expect(merge([1, 4, 5], [2, 3, 6], theFunc)).toEqual([1, 2, 3, 4, 5, 6]);
//    });
// });

// describe('Merge Sort', function() {
//    var theFunc = function(a, b) {
//        if (a < b) return -1;
//        if (a > b) return 1;
//        return 0;
//    }
//    var objFunc = function(a, b) {
//        if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
//        if (a.age > b.age) return 1; // returning  `1` means "b goes before a"
//        return 0; // returning 0 means "a and b are equivalent"
//    }
//    it('handles an empty array', function() {
//        expect(mergeSort([], theFunc)).toEqual([]);
//    });
//    it('handles an array of length 1', function() {
//        expect(mergeSort([3], theFunc)).toEqual([3]);
//    });
//    it('handles an array of 2 items', function() {
//        expect(mergeSort([9, 7], theFunc)).toEqual([7, 9]);
//    });
//    it('handles an array of multiple items', function() {
//        expect(mergeSort([18, -6, 7, -2, 40, 25], theFunc)).toEqual([-6, -2, 7, 18, 25, 40]);
//    });
//    it('handes an array of objects', function() {
//        expect(mergeSort([{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }], objFunc)).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
//    })
// });

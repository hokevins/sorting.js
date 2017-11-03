// SOLUTION WITH KEVIN & SARAH:

function split(arr) {
  var firstHalf = arr.slice(0, Math.ceil(arr.length/2));
  var secondHalf = arr.slice(Math.ceil(arr.length/2));
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  var returnArr = [];
  while (arr1.length && arr2.length) {
    arr1[0] < arr2[0] ? returnArr.push(arr1.shift()) : returnArr.push(arr2.shift());
  }
  if (arr1.length) return returnArr.concat(arr1);
  else  return returnArr.concat(arr2);
}

function mergeSort(arr) {
  if (arr.length <= 1){
    return arr;
  } else {
    var firstHalf = split(arr)[0];
    var secondHalf = split(arr)[1];
    firstHalf = mergeSort(firstHalf);
    secondHalf = mergeSort(secondHalf);
    return merge(firstHalf, secondHalf);
  }
}

// SARAH'S SOLUTION:

// function split(arr) {
//   var firstHalf = arr.slice(0, Math.ceil(arr.length/2));
//   var secondHalf = arr.slice(Math.ceil(arr.length/2));
//   return [firstHalf, secondHalf];
// }

// function merge(arr1, arr2, func) {
//  var returnArr = [];
//  while (arr1.length && arr2.length) {
//   func(arr1[0], arr2[0]) < 1 ? returnArr.push(arr1.shift()) : returnArr.push(arr2.shift());
//  }
//  if (arr1.length) return returnArr.concat(arr1);
//  else return returnArr.concat(arr2);
// }

// function mergeSort(arr, func) {
//   if (arr.length <= 1) return arr;
//   else {
//   let [firstHalf, secondHalf] = split(arr); // declaration and assignment contraction
//   return merge(mergeSort(firstHalf, func), mergeSort(secondHalf, func), func);
//   }
// }

// 2017-11-02 Sarah:
// I did see a comment at the end of the workshop that explains why `.slice` and `.shift` were not used in the original solution - it says that they contain linear time complexity, which means our function is n^2 log n instead of n log n time complexity. It wasn't very apparent in the actual benchmarker website, but it was 4x the time of quicksort, while we were supposed to be very close, or at most 2-3 times slower. Dang it!
// 2017-11-03 Kevin:
// Thanks, this is cool.  I don't see a problem with Big-O in our code only b/c as EJ says, don't worry about efficiency until efficiency becomes an issue.  As an exercise our code was much easier to read, understand and debug, though may be MUCH slower.  That way, I learned a lot from doing it our way than Omri's way exactly how Merge Sort works in theory.  Obviously we'd never have to do that in the wild.

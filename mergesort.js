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

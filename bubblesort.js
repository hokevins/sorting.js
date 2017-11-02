function bubbleSort(arr) {
  var swapCount = 0;
  for (var i = 1; i < arr.length; i++) {
    if (greaterThan(arr[i-1], arr[i])) {
      var swapped = swap(arr[i-1], arr[i]);
      arr[i-1] = swapped[0];
      arr[i] = swapped[1];
      swapCount++;
    }
  }
  if (swapCount === 0) {
    return arr;
  } else {
    return bubbleSort(arr);
  }
}

function greaterThan(v1, v2) {
  return v1 > v2;
}

function swap(v1, v2) {
  return [v2, v1];
}

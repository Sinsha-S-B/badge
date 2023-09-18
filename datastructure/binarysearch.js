function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
      return -1;
    }
  
    const mid = Math.floor((start + end) / 2);
  
    if (arr[mid] === target) {
      return mid+1 
    } else if (arr[mid] > target) {
      return binarySearch(arr, target, start, mid - 1); 
    } else {
      return binarySearch(arr, target, mid + 1, end);
    }
  }
  
  const sortedArray = [1, 2, 4, 6, 8, 10, 12];
  const targetValue = 6;

  
  console.log(binarySearch(sortedArray, targetValue));                                                                         
  
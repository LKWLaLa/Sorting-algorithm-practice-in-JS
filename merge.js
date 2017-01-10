var myNumbers = [20, 7, 4, 12, 23, 67, 0, 1]


function merge(left, right){
  var target = [];
  while((left.length > 0) && (right.length > 0)){
    if(left[0] < right[0]){
      var n = left.shift()
      target.push(n)
    }
    else{
      var h = right.shift()
      target.push(h);
    }
  }
  if(left.length != 0){
    target = target.concat(left);
  }
  if(right.length != 0){
    target = target.concat(right);
  }
  return target;
}


function mergeSort(someNumbers){
  console.log("calling mergeSort on " + someNumbers)
  if(someNumbers.length == 1){
    return someNumbers;
  }
  var left = someNumbers.slice(0, (someNumbers.length/2))
  console.log("left =" + left)
  var right = someNumbers.slice((someNumbers.length/2))
  console.log("right ="  + right)

  var sortedLeft = mergeSort(left)
  console.log("sorted left = " + sortedLeft)
  var sortedRight = mergeSort(right)
  console.log("sorted right = " + sortedRight)

  var sorted = merge(sortedLeft, sortedRight)
  console.log("sorted =" + sorted)
  return sorted;
}



mergeSort(myNumbers)

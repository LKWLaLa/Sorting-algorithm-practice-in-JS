var sortedInput = [2, 6, 7, 8, 10, 12, 15, 20, 30, 55]

function binarySearch(item, input, start, end){
    if(end - start == 0 && item == input[start]){
      return start;
    }
    else if(end - start == 0 && item != input[start]){
      return false;
    }
    else{
      var checkIndex = Math.floor(((end - start)/2) + start);
      if(input[checkIndex] == item){
        return checkIndex;
      }
      else if(input[checkIndex] > item){
        end = checkIndex - 1
        return binarySearch(item, input, start, end);
        // MUST use return statement here, or ultimate return value will be undefined.
      }
      else{
        start = checkIndex + 1
        return binarySearch(item, input, start, end);
      }
    }

}

console.log(binarySearch(55, sortedInput, 0, (sortedInput.length - 1)))





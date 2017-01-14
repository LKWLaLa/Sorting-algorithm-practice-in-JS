var sortedInput = [2, 6, 7, 8, 10, 12, 15, 20, 30, 55]

function binarySearch(item, input, start, end){
    if(end - start == 0){
      if(item == input[start]){
        return start;
      }
      if(item != input[start]){
        return false;
      }
    }
    else{
      var checkIndex = Math.floor(((end - start)/2) + start);

      if(input[checkIndex] < item){
        start = checkIndex + 1
        return binarySearch(item, input, start, end);
      };
      
      if(input[checkIndex] > item){
        end = checkIndex - 1
        return binarySearch(item, input, start, end);
        // MUST use return statement here, or ultimate return value will be undefined.
      };
        return checkIndex
    };

};

console.log(binarySearch(55, sortedInput, 0, (sortedInput.length - 1)))





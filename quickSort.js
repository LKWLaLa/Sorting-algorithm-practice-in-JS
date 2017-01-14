var someThings = [3, 8, 2, 90, 67, 56, 1, 300, 0]


function _quickSort(list, start, end){
    if ((end - start) <= 1){ return }

      var pivot = getRandomInt(start, end);
      var greaterArray = [];
      var smallerArray = [];

     for(i = start; i < end; i ++){
        if(list[i] <= list[pivot]){
          smallerArray.push(list[i])
        }
        else{
          greaterArray.push(list[i])
        }
     }

     /*
     Array.prototype.splice.apply(list, [start, smallerArray.length].concat(smallerArray));
     Array.prototype.splice.apply(list, [(start + smallerArray.length), greaterArray.length].concat(greaterArray));
    */

    var s = start

    for(i = 0; i < smallerArray.length; i ++){
       list[s] = smallerArray[i]
       s++
    }


    for(i = 0; i < greaterArray.length; i ++){
      list[s] = greaterArray[i]
       s++
    }

    _quickSort(list, start, start + smallerArray.length);
    _quickSort(list, start + smallerArray.length, end );
}

function quickSort(list) {
  _quickSort(list,0,list.length);
  return list;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



console.log(quickSort(someThings));

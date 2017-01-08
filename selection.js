var input1 = [10, 30, 79, 3, 7, 1, 9]

function selection (input){
  var smallestValue = Infinity
  var indexOfSmallest = undefined

  for (n=0; n < (input.length - 1); n++){

    for (i=n; i < (input.length); i++){
      if (input[i] < smallestValue){
        smallestValue = input[i]
        indexOfSmallest = i
      };   
    }
    input[indexOfSmallest] = input[n]
    input[n] = smallestValue  
    smallestValue = Infinity 
  }
};


selection(input1)

console.log(input1)
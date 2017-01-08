var numbers = [5, 8, 9, 29, 2, 98, 0, 24]
var newArray = []

function insertion(numbers){
  for(i=0; i < numbers.length; i++){
    if (newArray.length == 0){
        newArray.push(numbers[i])
        continue;
      }
    var j = 0
    while (numbers[i] > newArray[j]) {
     j++;    
    }
      newArray.splice(j, 0, numbers[i]);    
  }
}

insertion(numbers)

console.log(newArray)
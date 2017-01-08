var input1 = [5,7,1,10,66,2,70];


function negate(something){
  something = - something;
}

function bubble(input) {
  var sorted = false
  while (sorted == false) {
    sorted = true
    for (i=0; i < (input.length - 1); i++){
      if(input[i] > input[i+1]){
        sorted = false
        var temp = input[i]
        input[i] = input[i+1]
        input[i+1] = temp
      };
    };
  };  
}



bubble(input1)


console.log(input1)
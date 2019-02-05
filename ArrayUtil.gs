/**
 * Removes dulpicate strings from an array and return all unique elements
 **/
function UniqueArray(arr) {
  var uniqueArray = [];
  if(arr) {
    for(var l = 0; l< arr.length;l++) {
      var randomOne = PickRandomOne(arr);
      if(ArrayHasValue(arr,arr[l])) {
        uniqueArray.push(arr[l]);
      }
    }
  }
  return uniqueArray;
}

/**
 * Returns true if the array Contains a value 
 **/
function ArrayHasValue(values, value) {
  var found = false;
  if(values && value){
    found = values.indexOf(value) > -1;
  }
  return found;
}

/** 
 * Picks a random value from array.
 **/
function PickRandomOne(arr) {
  var randomItem;
  if(arr) {
    randomItem = arr[Math.floor(Math.random()*arr.length)];
  }
  return randomItem;
}

/**
 * Randomly Picks limit number of values (or less) from a give array.
 **/
function PickRandom(arr, limit) {
  //Pick random item in limit
  var picked = [];
  for(var l = 0; l< limit;l++) {
    var randomOne = PickRandomOne(arr);
    if(randomOne) {
      picked.push(randomOne);
    }
  }
  return picked;
}

/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(arr){
  arr.push('Colin');
}

function addMeToStart(arr){
  arr.unshift('Colin');
}

function changeLast(arr, value){
  arr[arr.length -1 ] = value;
}

function changeAllValuesTo(arr, value) {
  let i = arr.length;
  while (i--) {
    arr[i] = value;
  }
}


function oddOrEven(num){
  for (let i = 0; i < num.length; i++)
  if (num[i] % 2 === 0 ){
    num[i] = 'even'
  }else{
    num[i] = 'odd'
  }
}

function changeNextThreeToValue(start, arr, value){
for (let i = start; i < start + 3; i++){
  arr[i] = value;
  }
}





/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}

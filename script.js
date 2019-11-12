/*function is_string (MyParameterThatIsSent) {
    if (typeof MyParameterThatIsSent === 'string') {
      return 'true'
    } else {
      return 'false'
    }
  }
alert(is_string([1,2,3,4]));*/

/*array_Clone = function(arra1) {
    return arra1.slice(0);
};
alert(array_Clone([1, 2, 4, 0]));
alert(array_Clone([1, 2, [4, 0]]));*/

/*var first = function(array, n) {
  if (array == null)
    return void 0;
  if (n == null)
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
}
alert(first([7, 9, 0, -2]));
alert(first([], 3));
alert(first([7, 9, 0, -2], 3));
alert(first([7, 9, 0, -2], 6));
alert(first([7, 9, 0, -2], -3));*/

/*function reversedNum(num) {
  return (
    parseFloat(
      num
      .toString()
      .split('')
      .reverse()
      .join('')
    ) * Math.sign(num)
  )
}
 alert(reversedNum(32243));*/

function palindrome(str) {
  return true;
}
palindrome("eye");

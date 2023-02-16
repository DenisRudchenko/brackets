module.exports = function check(str, bracketsConfig) {
  let result = [];
  let halfMatrix = [];halfMatrix
  let secondHalfMatrix = {};

  for(let i = 0; i < bracketsConfig.length; i++) {
    halfMatrix.push(bracketsConfig[i][0]);
    secondHalfMatrix [bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  for(let i = 0; i < str.length; i++) {
    if(secondHalfMatrix[str[i]] === result[result.length - 1] && result.length !== 0) result.pop(); 
    else if(halfMatrix.includes(str[i])) result.push(str[i]); 
    else if(result.length === 0) return false;
  }
  return result.length === 0;
}

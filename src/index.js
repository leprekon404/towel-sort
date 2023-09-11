module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix) {
    return(
    matrix.reduce((acc, cur, i) => {
      cur.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => acc.push(e));
      return acc;
    }, []))
  } else {
    return arr;
  }
}
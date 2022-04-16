var updateMatrix = function(mat) {
  var output = [];

  for (var i = 0; i < mat.length; i++) {
    var o = [];

    for (var j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        o[j] = 0;
      }
      else {
        o[j] = check(i, j, mat);
      }
    }
    
    output.push(o);
  }

  return output;
};

var check = (i, j, mat) => {
  var result = -1;
  var offset = 1;
  var results = [];

  while (result === -1) {
    if (i + offset < mat.length) {
      if (mat[i + offset][j] === 0) {
        result = offset;
        results.push(result);
      }
    }
  
    if (i - offset >= 0) {
      if (mat[i - offset][j] === 0) {
        result = offset;
        results.push(result);
      }
    }
  
    if (j + offset < mat.length) {
      if (mat[i][j + offset] === 0) {
        result = offset;
        results.push(result);
      }
    }
  
    if (j - offset >= 0) {
      if (mat[i][j - offset] === 0) {
        result = offset;
        results.push(result);
      }
    }

    offset++;
  }

  return Math.min(...results);
}

console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]));
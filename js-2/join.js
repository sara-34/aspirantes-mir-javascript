function join(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
      if (i !== 0) {
        result += " ";
      }
      result += array[i];
    }
    return result;
  }
  
  
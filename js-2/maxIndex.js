function maxIndex(numeros) {
    if (numeros.length === 0) {
      return -1;
    }
    let maxIndex = 0;
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > numeros[maxIndex]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  }
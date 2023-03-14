function max(numeros) {
    if (numeros.length === 0) {
        return undefined;
        
    }
    let maxNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros [i] > maxNumero) {
            maxNumero = numeros [i]
            
        }
        
    }
    return maxNumero
   
}
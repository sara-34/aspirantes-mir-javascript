function calcularColor(num) {
    if (num === 1) {
        return "El color es negro";
        
    }else if (num === 2) {
        return "El color es blando"
        
    }else if (num === 3) {
        return "El color es azul"
        
    }else{
        return "El color es verde"
    }
    
}

console.log(calcularColor(2));
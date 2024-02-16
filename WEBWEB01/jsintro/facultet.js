function factorial(input){
    if (input < 0){
        throw new Error("Input must be positive");
    } else if (input % 1 == 0){
        var output = 1;
        if(input < 3){
            return input;
        } else{
            for(var i = 2; i <= input; i++){
                output *= i;
            }
        }
        return output;
    } else{
        throw new Error("Input must be a whole number");
    }
}
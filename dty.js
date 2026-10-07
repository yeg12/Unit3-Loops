function score_calc (rolls){
    let total = 0;
    let i = 0;
    for (let frame = 0; frame <10; frame ++){
        if (rolls[i] === 10){
            total += 10 + rolls [i+1] + rolls[i+2]
            i+1
        }
        else if (rolls[i] = rolls [i+1] === 10){
            total += 10 + rolls [i+2]
            
        }else {
            total += rolls[i] + rolls[i+1]
            i += 2;
        }
    }
    return total;
}
console.log(score_calc([10,10,10,10,10,10,10,10,10,10,10,10]));
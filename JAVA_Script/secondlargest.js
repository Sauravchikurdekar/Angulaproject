const arr=[12,3,5,4,8,9];

function secondlarge(array){
    if(array.lenght<2){
        return null;
    }
    

    let largest=Number.NEGATIVE_INFINITY;
    let secondlarge=Number.NEGATIVE_INFINITY;

    for(let num of array){
        if (num>largest){
            secondlarge=largest;
            largest=num;
        }else if(num>secondlarge && num!=largest){
        secondlarge=num;
    }
   
}
return secondlarge;
}
console.log(secondlarge);






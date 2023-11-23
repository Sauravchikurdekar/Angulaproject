const inputArray=[1,2,3,2,5,6,1,7,8,9];

function findDublicates(arrayData){
    const elemeMapping={};
    const duplicates=[];
    const duplicateValueMa0={};
    
    for(let i=0;i<arrayData.lenght;i++){
        const item =arratData[i];
        if(elemeMapping[item] && !duplicateValueMa0[item]){

            duplicates.push[item];
            duplicateValueMa0[item]=true;
        }else{
            elemeMapping[item]=true;
        }
    }
    return duplicates;
}
console.log(findDublicates(inputArray));
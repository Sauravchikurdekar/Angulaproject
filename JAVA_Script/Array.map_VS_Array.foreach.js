

const number=[5,4,3];
const sq=number.map((item) => {
    
    return item*item;   // in map the value is storeed in as variable so it will print the output
})

const qube=number.forEach((item)=>{
    return item*item*item;     //in for each loop the value is not store in variable so it will print as undefined
});

console.log({sq});
console.log({qube});


const str=new String('coding');   //str = create a object

console.log(typeof str);
console.log(str =='coding');    // == convert the non primative to primative data type (string ) and compare so it will priint true
console.log(str ==='object');
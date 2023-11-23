// for of is  used for array and for in is used for object

const name=['saurav','jay','kiooo'];

const person={
    name:'saurav chikurdekar',
    age:25,
    city:'kolhapur'
}

for (const value of name){

    console.log(value);
}

for(const key in person){
console.log(person[key]);
}
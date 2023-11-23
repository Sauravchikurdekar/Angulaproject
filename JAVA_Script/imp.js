console.log("A");

setTimeout(()=>console.log("C"),0);

Promise.resolve().then(()=>console.log("B"));

console.log("D");


//Event loop 

// call back queue

// 1)microstask queue

// Promise

// 2)macrostask queue

// setTimeout(() => {
    
// }, timeout);


//function declaration

abc()
function abc() {
console.log('I am abc function');   // we can use it before the declaration
};

//function expression

sum()
var sum=function(){
    console.log("A am sum functuion") // we can not use it before declaration it will work as a var only
}

//IIFE
(function(){
    console.log('I am life..');
})();
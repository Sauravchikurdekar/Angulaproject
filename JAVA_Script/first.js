// generated function....

function* countNumber(){
let i=0;
while (true){
    yield i++;
}

}
const count=countNumber();
console.log(count.next().value)
console.log(count.next().value)
console.log(count.next().value)
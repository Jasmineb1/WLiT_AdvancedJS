//sum of first 4 natural numbers using callback
function sum(n){
    let result=0
    for(let i=1;i<=n;i++){
        result=result+i
    }
    return result
}
console.log(sum(4))
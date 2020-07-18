
// let numbers=[3,6,9,34,6,12,33,380,39,320]
// let max= numbers[0];
// let min=numbers[0]
// for( let i=0; i<numbers.length;i++){
//     if(max<numbers[i+1]){
//         max=numbers[i+1];
//     }else if(min<numbers[i+1]&min<max) {
//         min = numbers[i + 1]
//     }
// }
//
// alert(max)
// alert(min)

let result;
function plus(a,b) {
    return a+b;}

function difference(a,b) {
    return a-b;}
function diviide(d,v,c,f) {
    let a=plus(d,v);
    let b=difference(c,f);
result= a/b;
return result;
}
console.log(diviide(23,45,32,12));



console.log ("hello world "); // hello world;


//2d motion arrays 
function mult(arr){
    var product=1; var i ,j ;
    for (i=0 ; i<arr.length ; i++){
        for (j=0 ; j<arr[i].length ; j++ ){
            product=product*(arr[i][j]);
        }
    }
    return product;
}

var product=mult([[2,6] , [5,7] ,[78,5,9]]);
console.log(product);


// loop do while

var arr=[];

var i=10;
do {
    arr.push[i];
    i++

} while(i<10);
console.log (arr);
//recusion
function sum(arr,n){
    if (n <= 0){
        return 0 ;
    } 
    else 
    {
        return sum(arr, n-1) + arr[n-1];
    }
}

//function 
function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}
 // Math random
 
 function mathrand() {
     return Math.random();

 }
 console.log  (mathrand());
 
 // random for integer number 
  
  function randxx(){
      Math.floor( Math.random()*10)
  } 


  // function  parseInt
  function convrt(str){
      return parseInt(str);
  }
  convrt("56");

//function parseInt with base

function convertrad(str) {
    return parseInt (str  , 2);
}
convertrad("11101");
console.log(convertrad("11101")); 

// trinry condition 
function equal (a,b){
     return a === b ? "equal":"not equal";
}
equal(5,9);
console.log(equal(5,9));

// manipulat trinry condition 

function chekenum (num){
    return (num === 0) ? "zero" : (num < 0) ? "negative": "positive";

}
chekenum(16) ;
console.log(chekenum(16));

// function Recursion
function recdef(n){
    if (n<1){
        return [];
    }else{
        const countArray = recdef(n-1);
        countArray.unshift(n);
        return countArray;
    }
}

//Recursion

 function rangeofnum (min , max ){

     if (min-max === 0) {
         return [min];
     }
     else if (min<=max){
         const countArray = rangeofnum(min , max-1);
         countArray.push (max)
         return countArray;
     }
     console.log(rangeofnum(1.2));


 }
 

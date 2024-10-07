
let score =  33  ;


console.log(typeof(score)) ; //number

let str =  "44" ;
console.log(typeof str);
let valInNumber = Number(str)
console.log(typeof valInNumber);

//  type of NAN  

let scre = "33";

let valNumber = Number(scre) //number 
// console.log(valNumber);



//  when print typeof  valNumber in NaN 

// console.log(typeof valNumber );  // 
let c =  valNumber + score ;
console.log(c);
    
/*  
   1) if store the value   in varaible is null   
        
        then typeof the variable is   object 

        when conert this varaible in  in number and store in another varaible 
        
         then value is  give a Zero

   2) value is undefiend  
         then typeof undefined 

         conversion in number then value NaN
  3) boolean 
       typeof  boolean 

       convert Number  true 1 and false 0  
*/

// if we do string is empty  and convert it boolean then give output as false

// if string avlai  then give a true 

let num =  33 ;

let stringNumber =  String(num) // type of num is string and store in stringNumber 

//***********************************************************Operations */

    let value =  3 ;
    let negvalue = -value 
    console.log(negvalue)  //  - 3 

    // string 1st assign value  "hello" and  string 2nd assign value  "vaibhav"

    let str1 = "hello" 
    let str2 = "vaibhav" 
    let str3 =  str1 + str2 ;

    console.log(str3); // hello vaibhav

    console.log("1" + 2);  // 12
    console.log(1+ "2");  //12
    console.log("1" +2 +2); //122
    console.log(1+2+ "2"); //32

//     triciy conversion 

  console.log(true); // true 

  console.log( +true); // 1

  //console.log(true+); // error

  console.log(+""); // 0
 
    let num1 ,num2 , num3  ;
    num1 = num2 =num3 = 2+2 ; // 4 


    let gameCounter = 100 
    gameCounter++ ;   // ++gameCounter 
    console.log(gameCounter); //101
    
  
  
  
    
    
    
    
    
/* 
    Primitive    
   
    Call  By Value -  using copy 
     7 Types : 
          1.String 
          2.Number
          3.Boolean 
          4.null
          5.undefined 
          6.Symbol
          7.BigInt 

   */

  //javascript is a dyanmically type 
    /*

       Referance(Non primitive)
       
            Array 
            Object 
            Functions
    
    */
   const heros = ["shaktiman", "naagraj", "doga"] ;
 let obj =  {
       name :"vaibhav",
       aaa: 22
   }
   const myfunction = function(){   // datatype using typeof is "object function" 
      console.log("hello viabhav");
      
   }
//    null cha data type tumhala object 

/* 
        typeof operator result 

    type of val                                    result

    Undefined                                    undefined
    Null                                         object 
    Boolean                                      boolean
    Number                                       number 
    String                                       string 



*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Stack , Heap
  
  /*
       Primitve -  Stack 
       Heap      - Non-Primitive(referance)
   


  */

       let myname ="vipul";
       let  anothername = myname ;

       anothername = "chailvaibhav" ;

       console.log(myname); // vipul 
       console.log(anothername); //  chailvaibhav


       let userOne =
       {
           name : "alish " ,
           upi : "alish@"

       }
       
       let usertwo = userOne 

       usertwo.upi = "hrrr"
       
       console.log(userOne.upi); // hrrr
       console.log(usertwo.upi); //hrrr
       
       

      



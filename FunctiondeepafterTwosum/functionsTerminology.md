1.  Functions and Methods
2.  Declaration and Definiton
3.  Arguments and Parameters
4.  Callback  and Higher Order Function 

 method  -  it is a function that belongs to an object  

functions inside the object  

call viva function and call viva object  

//FUNCTION WITHOUT PARAMETER  AND ITS RETURN TYPE  IS UNDEFINED 
function  isvalid(a ,b)  //  this  is function boday this is a Parameter 
{
   // let a =2 ; b =3 ;

    let  b  =  a + b ;

    console.log(b) ;
}
 
 isvalid(20,30) ; //  this is  function call and we passes the actual value  that we call argument 


 // ANOTHER WAY WE CAN DEFINED  FUNCTION  

 CONST  COUNT  =  100 ; //  THIS IS A EXPRESSION 

  // FNCTION WITHOUT NAME BUT  SYNT BASE ON EXPRESSION

     CONST  ISVALID =  FUNCTION ()
     {
        CONSOLE.LOG("PRINT");
     }

     //Function call 

     let p = x() ; // function will be call  and retrun any value is assing to this varible 


     //default parameter 

      when we dont  put argument  in call but direct  put value in parameter   

      function add (a ,b=0)
      {
          return a+ b ;
      }

      add(5,3) ; //8 
      add (5);  //  here b=0  5 + 0  = 5 

      // rest parameter 
         function defincation only having 1 rest paramter and rest parameter  alsways last  in parameter 

          rest pamert mense we can pass muiple argument to function parameter 

          function collect(x ,..rest)
          {
            console.log(x ) ;  //it is first argument 
            console.log(y) ;  //  it provied array of other argument 

          }

          collect(1,2,3,4,5,6,7,8,9) ; 


          //ARROW FUNCTION 

          CONST ADD  =  FUNCTION(X,Y)
          {
            RETURN X + Y;
          } 

          ***ARROW FUNCTION NO BINDING TO THIS KEYWORDS 

          NOTE : You cannot declare two variables with the same name in the same scope using let or const.

           let add  = (x, y)  =>
           {
              return x + y ;
           }
      const  add  =  x  => x ;


      //NESXTED FUNCTION  

        // FUNCTION IN ANOTHER FUNCTION  

          function outer ()
          {
             function inner(){

             }

             inner();

          }

          outer();

          //output -  outer after runner 


          //FUNCTION SCOPE 

             *** WHO CAN ACCESS WHAT 


            A VARAIBLE DEFINED  INSIDE FUNCTION THAT CAN NOT BE ACCESS ANYWHER OUTSIDE FUNCTION

            A FUNCTION CAN ACCESS ALL VAIBALE INSIDE SCOPE - FUNCTION IS DEFINED GLOBAL SCOPE  

         LET Y =30 ;
         FUNCTION DESOMETING()
         {
            LET X =10 ;

            CONSOLE.LOG(X) ;
            CONSOLE.LOG(Y) ;
         }

         EVEN WE YOU VAR TILL KAN NOT ACESSS  THAT VAR

      CLOUSER -  THIS FUNCTION IS CLOUSER 
       THE INNER FUNCTION ACCESS ONLY 

       

1) function defination mense  function body

     function  FUNCTION_NAME(paramert1 , parameter 2  , parameter 3 )
     {
              FUNCTION_BODY 



              return if  function want any

              return VALUE ;

     }

     NOTE :-  ALWAYS   1st right  function   call  not a body  


2) function  call   -  exectuion starting  point 

         onclick = "FUNCTION_NAME() 


3)  function types

       1. function without return and without parameter 
       2. function with parameter and without return 
       3. function with return  and  without  parameter 
       4. function with return and  with  parameter

4) function having  return then this is last line of  ecxtuon 


5)  function  expressions mense   

      like 

      let  Varibale =  FUNCTION_BODY


      mese that varible store a referance  of function  

      Varibale point  to  FUNCTION_NAME 

      THAT WHY WHEN WE CALL  VAIRBLE THAT STOE FUNCTION REFERNCE  THEN INDIRECTLY   call go to function  function


      example  like  =  

      function add(a ,b ) 
      {
        return a+b ;
      } 

      let sum =  add  ;

      console.log(sum(3,4)) ;


      this reduce  the function  callback 


       function sayHello()
        {
                  console.log("Hello!");
         }

          function callFunction(sayHello) 
          {
            sayHello(); // indirect call
           }

          callFunction(sayHello);

6)  function Constructor :

        why function construcor Neeed  in real time  

        suppose we want  same object item for every object  then  it is diffcult ot wight that why

        let  user1 = {
            name : "vaibhav" ,
            age : 21

        } ;
        let  user2 = {
            name : "rakesh" ,
            age : 22

        } ; 
        let  user3 = {
            name : "rahul" ,
            age : 22

        } ;

        and with function constructor 

          function User(name , age )
          {
            this.name = name ;
            this.age = age ;

          }

          let user1 = new User("vaibhav" , 21) ;
          let user2 = new User("rakesh" , 22) ;
          let user3 = new User("rahul" , 22) ;


          this keyword refer to object   , new keyword create the object  


7)  function Hoisting 

    function hosting  is allow with function  declaration  not with function  expression

8) self-Invoking functions : - 

        mnese  function  immedialty call 

        (function () ) 
        {
            // function body 
        }
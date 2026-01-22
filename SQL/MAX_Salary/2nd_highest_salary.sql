
/*
   logic is that  - 

    1..... 1st we need to find  1st highest salary  from employee  table 

     how to find  :

      select max(salary) from  employee   // 1st  highest salary 

    2.....after we need find out  or filter reming salaray  
         salary < 1st highest salary 
    
    3..... after  from  filter salay we need find max  salary 

        (salary) 

*/

/*
    in that qution we need how to right sub query 
    (subquery)

    mense  we are passing  parameter  ()  is also  subquerry 

*/
    select  max(salary) 
    from employee
    where  salary < (select max(salary) from employee) ; 
/*
    // what is  max  and where we are use this  ?

        max is  an  aggregate  function  that returns  the highest  value  from  a cloumn .

    // what is  where ?
     
         where is  used  to  filter row  base on a conditon 
        
 */
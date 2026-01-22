
select name , salary
from  employee
   where salary =  ( select max(salary)
       from employee
      where salary < (select max(salary)from employee) ) ; 


/*
  in that we are using  equl sing 

  mese we are using comparison (relationl)  operators  

  = , != . > , < , >= , <=

*/
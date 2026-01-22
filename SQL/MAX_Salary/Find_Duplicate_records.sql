/*
 differnce btween  where and having 


 where -  filters row before grouping 

 having -  filters groups after grouping 

*/

 select name , department , count(*) 
 from employee
 group by  name , department having count(*)> 1 ;
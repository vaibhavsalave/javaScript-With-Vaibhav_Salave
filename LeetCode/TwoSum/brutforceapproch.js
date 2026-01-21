
/*

 an array of  integrer nums is give  

 also target is given

*/

/*

 task  is array madhale indices  gheyche  ki tyanchi addtion   target value pahijen  

 nums [i]  +  nums[j] =  target 

*/

/*
  Rules - 


  every test case only  one  vilid pair of answer 

  you  cannot use the same element  twice  mense  4+5 = 9  5+4 =9

  return the indices , not a values  [i ,j]


*/
/*
  test case  

  nums = [2,7,11,15 ]    ,  

  nums.length = 4   nums.length-1 = 3  mense  this index 0 ,1 ,2 ,3 

  target = 9 

  possible pair            logic 

    2+ 7  = 9         nums[i] +  nums[j = i+1]  i =1   j = 2

    2 +11 =  13       nums[i] + nums[j = i + 1 +1 ]  i = 1  j = 3

    2+15  =  17       nums[i] +  nums[j= i+ 1 + 1 + 1]  i = 1  ,j =  4   ,  i++

    7+ 11 = 18        nums [i = i + 1] + nums[j = i + 1 ]   i = 2 , j = 3

    7 + 15 =  22      nums [i = i + 1] + nums[j = i + 1 + 1]  i = 2 , j = 4  , i++
 
    11 +  15 = 27     nums [i= i + 1] +  nums[j = i + 1]    i = 3  , j = 4



    note :-  always array index satrt with 0 so  i and j satr with  0    

*/

function twosumbrute(nums ,target)
{
     //  loop for taking  i  

     for (let i = 0 ; i< nums.length ; i++)
     {

        for (let j = i + 1 ; j <nums.length ; j++)
        {
            if(nums[i] + nums[j] === target)
            {
            return [i ,j ] ;
            }
        }
     }
}










let  nums = [2,7,11, 15] ;
let target =  9 ;

let result =twosumbrute(nums , target) ;

console.log(result) ;





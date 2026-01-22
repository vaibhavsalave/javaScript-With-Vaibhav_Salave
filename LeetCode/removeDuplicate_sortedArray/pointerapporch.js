
/*
  user want remove dupicate element  from sorted array and  display count 

  nums = [1,1,2,2,3]

  output =  3
*/

function removeDuplicates(nums)
{
    let fast = 1 ;
    let slow = 0 ;

    for(fast  ; fast < nums.length ; fast++) //fast =  2
    {
        if(nums[fast] !== nums[slow]) // nums[1] = 1 , nums[0] = 1 
        {  // 1 !== 1  // fasle

            // nums[2] !== nums[0]  // 2 !== 1 // true

            slow ++ ; // 1 

            // console.log(slow) ;

            nums[slow] = nums[fast] ; // nums[1] = nums[2 ]  nums[1] = 2
             
        }

  
    } 

    return slow + 1 ;
   
}




let  nums = [1,1,2,2,3 ] ;

let result =  removeDuplicates(nums) ;

console.log(result) ;
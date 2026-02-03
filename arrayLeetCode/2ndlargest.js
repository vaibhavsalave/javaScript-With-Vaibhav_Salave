
function largest(num)
{
    let max = num[0];

    for(let i =0 ; i < num.length ; i++)
    {
        if(num[i] > max)
        {
            max =  num[i] ;
        }
    }

    let secmax = null ;

    for (let j = 0 ; j <num.length ; j ++)
    {
         if (num[j] !== max)
         {
            if(secmax===null || num[j] > secmax)
            {
                secmax = num[j] ;
            }
         }
    }
  
    return secmax ;

}


let result = largest([-10,40,-50,-70]) ;
console.log(result) ;
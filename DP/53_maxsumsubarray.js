function maxsubArray(num)
{
    let n  =  num.length ;

    
    let best = 0 ;

    for(let start =0 ; start < num.length ; start++)
    {
         let  curr = 0 ; 
        curr = curr + num[start] ;

        if(best < curr)
        {
            best = curr ;
        }
        
    }

    return best ;
}

let result = maxsubArray([-2,1,-3,4,-1,2,1,-5,4])


console.log(result) ;
function mincost(arr)
{
    let n  =  arr.length ;

    let prev1 = arr[0] ;
    let prev2 = arr[1] ; 
    let min ; 

    for(let i =2 ; i < n ; i++ )
    {
        if(prev1 < prev2) // 10 < 20  // 20  < 13  13< 18
        {
             min = prev1 ;  // min = 1) 10   3) 13
        }
        else{ 
            min =  prev2 ; // min =  2)  13
        }

        let curr = arr[i]+ min ;  // curr= 10 + 3   13+5   13+1
        prev1 = prev2 ; // 20    13     18
        prev2 = curr ;  //  13   // 18   14
    }

    if(prev1 < prev2)
    {
        return prev1 ;

    }else
    {
        return prev2 ;
    }

}

mincost[10, 20 , 3 ,  5 , 1] ;
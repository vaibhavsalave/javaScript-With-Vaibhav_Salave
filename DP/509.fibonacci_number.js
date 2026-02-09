function fibonacci (n)
{
    // let dp = [] ;
    // dp[0] =0 ;
    // dp [1] =1 ;
    // for(let i = 2  ;  i <= n ; i++)
    // {
    //       dp[i] =  dp[i-1] + dp[i-2] ;
    // }

    // return dp[n] ;

    if(n <= 1)
    {
        return n ;
    }
    let preve2 = 0 ; // 1   // 1    // 1
    let preve1 = 1 ; // 1  // 2    // 3

    for(let i=2 ;  i <= n ; i++)
    {
        let curr =  preve1 + preve2 ; // i =2>1+0  // 2   //3 
        preve2 = preve1 // 1   // 1  // 2
        preve1 = curr  // 1    // 2  //3
    }

    return preve1 ;
}

let result =  dp(6) ;

console.log(result) ;


//
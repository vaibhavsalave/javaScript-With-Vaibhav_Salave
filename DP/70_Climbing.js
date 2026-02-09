function climbing(n)
{
//    let dp = [] ;
//     dp[1] = 1 ;
//     dp[2] = 2 ;
//     for(i=3 ;  i<=n ; i++)
//     {
//         dp[i] = dp[i - 1] + dp[i -2] ;
//     }
   let preve1=1 ;
   let  preve2 =  2 ;

    for(let  i =3  ;  i <= n ; i ++)
    {
        let curr = preve1 + preve2 ; 
        preve1 = preve2 ;
        preve2 = curr ;
    }

    return  preve2 ;
}

  let  result=climbing(8);

  console.log(result);
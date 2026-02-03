
function firstOccur(haystack , needle)
{
    if(needle === " ")
    {
        return 0 ;
    }

    for(let i = 0 ; i <=haystack.length - needle.length ; i++)
    {
        let j =0 ;

        while(j < needle.length && needle[i + j] === needle[j])
        {
             j ++ ;
        }

        if(j === needle.length)
        {
            return i ;
        }

    }

    return -1 ;


}


let result = firstOccur("sadstopsad" , "sad") ;

console.log(result) ;
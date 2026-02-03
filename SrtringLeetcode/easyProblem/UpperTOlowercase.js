/*
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely"
 

Constraints:

1 <= s.length <= 100
s consists of printable ASCII characters.


*/
function lowercase(s)
{  let lower = "" ;
    
    // string char convert 

    for( let i = 0  ; i < s.length ; i ++)
    {
         let c = s.charCodeAt(i) ;

         if(c >= 65 &&  c <= 90 )
         {
             lower = lower + String.fromCharCode(c +32) ;
         }
         else
         {
             lower = lower + s[i];
         }
    }

    return lower ;

}


 
let s = "Vaibhav"
let result =  lowercase(s) ;

console.log(result) ;
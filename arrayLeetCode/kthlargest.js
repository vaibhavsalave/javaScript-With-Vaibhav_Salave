function  kthLargest(nums , k)  //[3(),2,3,1,2,4,5,5,6], 4
{
     let left = 0;
    let right = nums.length - 1; 

    while (left <= right) { // 0 <= 8
        let start = left; // 0   ,  1
        let low = left; // 0   , 1
        let pivot = right; // 8

        // Partition (bigger values go left)
        for (start; start < pivot; start++) {
            if (nums[start] >= nums[pivot]) {  // 1) 3 >= 6 flase 
                let temp = nums[start];
                nums[start] = nums[low];
                nums[low] = temp;
                low++;
            }
        }

        // Place pivot
        let temp = nums[low];   // 3
        nums[low] = nums[pivot]; // 6
        nums[pivot] = temp;  // 3

         console.log(nums) ;

        // Rank of pivot (1st largest, 2nd largest, etc)
        let rank = low + 1;  // 1

        if (rank === k) {  // 11 === 4
            return nums[low];
        }
        else if (rank > k) { // 1 > 4
            right = low - 1;
        }
        else {              // 
            left = low + 1;  // 1
        }
    }

    // while(left <= right)
    // {
    //     let start = left ; // 0
    //     let low = left ; // 0
    //     let last = right ; // 

    //     for(start ; start < right ; start ++)  // 0  1 2
    //     {
    //         // all biggenr number is come in righ side 
    //         if(nums[start] <= nums[last])    // 3 <= 6  // 
    //         {
    //                  let temp = nums[start] ;  // 2    3
    //                  nums[start] = nums[low] ; // 3    
    //                  nums[low] = temp ;  2
    //                  low ++ ;

    //         }

    //     }

    //     let temp = nums[low] ;
    //     nums[low] = nums[last];
    //     nums[last]=temp;
        
    //    let countBigger = right - low; // 8-8 =0  7-7 =0  6-6

    //     if (countBigger === k - 1) { //0 === 3   0 === 2  0 = 2 -1 
    //         return nums[low];
    //     }
    //     else if (countBigger > k - 1) {
    //         left = low + 1;     // go right side
    //     }
    //     else {
    //         right = low - 1;    // go left side  7   6    5
    //         k = k - (countBigger + 1);  //= 4-(0+1) =  3  2  1
    //     }

    // }
     

    

}

let result = kthLargest([3,2,3,1,2,4,5,5,6], 4) ;
console.log(result) ;














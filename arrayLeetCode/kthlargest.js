function  kthLargest(nums , k)  //[3(),2,3,1,2,4,5,5,6], 4
{
     let left = 0;
    let right = nums.length - 1; 

    while (left <= right) { //
        let start = left;
        let low = left;
        let pivot = right;

        // Partition (bigger values go left)
        for (start; start < pivot; start++) {
            if (nums[start] >= nums[pivot]) {
                let temp = nums[start];
                nums[start] = nums[low];
                nums[low] = temp;
                low++;
            }
        }

        // Place pivot
        let temp = nums[low];
        nums[low] = nums[pivot];
        nums[pivot] = temp;

         console.log(nums) ;

        // Rank of pivot (1st largest, 2nd largest, etc)
        let rank = low + 1;

        if (rank === k) {
            return nums[low];
        }
        else if (rank > k) {
            right = low - 1;
        }
        else {
            left = low + 1;
        }
    }

    

}

let result = kthLargest([3,2,3,1,2,4,5,5,6], 4) ;
console.log(result) ;














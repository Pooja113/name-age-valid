let nums = [2,7,11];

// function arrlen(nums){
//     let count = 0;
//     while (nums[count] !== undefined) {
//         count++
//     }
//     return count;
// }

// console.log(arrlen(nums))


// Multiple ways to print array

//    for (let index = 0; index < nums.length; index++) {
//         console.log(nums[index]);
//    }

// nums.forEach((element,index) => {
//     console.log(element)
//    });


//    for(let el in nums){
//     console.log(nums[el]);
//    }

   for(let el of nums){
    console.log(el);
   }
   

   


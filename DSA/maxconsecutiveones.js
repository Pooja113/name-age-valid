let nums = [2,7,11,15];
let target = 9;

var twoSum = function(nums, target) {
  let map = new Map();
  for (var i=0; i<=nums.length-1; i++){
      const complement_value = target - nums[i];
      if(map.has(complement_value)){
         return [map.get(complement_value),i]
      }else{
          map.set(nums[i],i)
      }       
  }
   return [];
};
console.log(twoSum(nums,target))

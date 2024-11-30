var maxProduct = function(nums) {
    let max = -Infinity
    const memo = {}
    for (let i=0; i < nums.length; i++) {
      const result = dp(nums, i, nums.length, memo)
      if (result.max > max) {
          max = result.max
      }
    }
    return max
  };
  
  function dp(nums, start, end, memo) {
    if (end - start === 1) {
        return { min: nums[start], max: nums[start] }
    }
  
    if (memo[`${start}-${end}`]) {
      return memo[`${start}-${end}`]
    }
  
    const r = dp(nums, start + 1, end, memo)
    const max = Math.max(nums[start], nums[start] * r.max, nums[start] * r.min)
    const min = Math.min(nums[start], nums[start] * r.max, nums[start] * r.min)
    const result = { max , min }
    memo[`${start}-${end}`] = result
    return result
  }
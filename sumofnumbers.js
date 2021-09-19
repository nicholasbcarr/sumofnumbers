const testNums = [1, 2, 3, 4];

function forNums(nums) {
  let total = 0;
  for (const num of nums) {
    // eslint-disable-next-line no-undef
    total += num;
  }
  return total;
}

console.log(forNums(testNums));

function whileNums(nums) {
  let total = 0;
  let count = 0;
  while (count < nums.length) {
    total += nums[count];
    count++;
  }
  return total;
}

console.log(whileNums(testNums));

function recurseNums(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + recurseNums(nums.slice(1, nums.length));
}

console.log(recurseNums(testNums));

function sumSimp(nums) {
  return _.reduce(nums, function (memo, num) {
    return memo + num;
  });
}

console.log(sumSimp(testNums));

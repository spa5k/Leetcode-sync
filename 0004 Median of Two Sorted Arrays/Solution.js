/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let joined = [...nums1, ...nums2];

  const middle = Math.floor((joined.length - 1) / 2);
  joined = joined.sort((a, b) => a - b);

  if (joined.length % 2 !== 0) {
    return joined[middle];
  } else {
    return (joined[middle] + joined[middle + 1]) / 2.0;
  }
};
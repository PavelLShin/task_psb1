let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3

function merge(arr1, length1, arr2, length2) {
  let id1 = length1 - 1
  let id2 = length2 - 1
  let id3 = length1 + length2 - 1

  while (id2 >= 0) {
    if (id1 >= 0 && arr1[id1] > arr2[id2]) {
      arr1[id3] = arr1[id1]
      id1--
    } else {
      arr1[id3] = arr2[id2]
      id2--
    }
    id3--
  }
}

merge(nums1, m, nums2, n)
console.log(nums1)

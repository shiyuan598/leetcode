/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length
  }
  let arr = []
  let temp = ''
  for (let i = 0; i < s.length; i++) {
    temp = ''
    for (let j = i; j < s.length; j++){
      const char = s[j]
      if (temp.indexOf(char) > -1) {
        arr.push(temp.length)
        temp = ''
      } else {
        temp += char
      }
    }
    arr.push(temp.length)
  }
  return Math.max.apply(null, arr)
};



var str = ' 25285625863'
// str = ' fd'
let length = lengthOfLongestSubstring(str)

console.info(length)
// str = 'bbbbb'
// length = lengthOfLongestSubstring(str)
// console.info(length)
// str = 'pwwkew'
// length = lengthOfLongestSubstring(str)
// console.info(length)


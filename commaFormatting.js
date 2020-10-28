/**
 * 숫자에 ,를 붙혀주는 함수
 * @param {number} num integer
 * @returns {string} "1,000,000"
 */
module.exports = function(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
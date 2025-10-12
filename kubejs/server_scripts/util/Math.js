/**
 * 生成一个n到m之间的随机整数
 * @param { number } min 最小值(整数)
 * @param { number } max 最大值(整数)
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

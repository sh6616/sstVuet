
/* 验证账号 */
export function validateAccount(rule, value, callback) {
  if (value.length < 6 || value.length > 20) {
    return callback(new Error('用户名不得小于6个或大于20个字符!'))
  } else {
    callback()
  }
}